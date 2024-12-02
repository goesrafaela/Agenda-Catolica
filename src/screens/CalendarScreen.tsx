import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import axios from "axios";

// Chave da API Calendarific
const CALENDARIFIC_API_KEY = "5cU3iK7hKF9FM1qt3n4EM9M7o4gZugcf";

// URL do Google Translate
const GOOGLE_TRANSLATE_API_URL = "https://translate.googleapis.com/translate_a/single";

export default function CalendarScreen() {
  const [holidays, setHolidays] = useState<Record<string, any>>({});
  const [selectedHoliday, setSelectedHoliday] = useState<{
    name: string;
    description: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Ano em exibição

  useEffect(() => {
    fetchHolidays(currentYear); // Busca inicial para o ano corrente
  }, [currentYear]); // Reexecuta quando o ano em exibição muda

  const fetchHolidays = async (year: number) => {
    setLoading(true);
    try {
      // Busca os feriados da API Calendarific
      const response = await axios.get(
        `https://calendarific.com/api/v2/holidays`,
        {
          params: {
            api_key: CALENDARIFIC_API_KEY,
            country: "BR",
            year,
          },
        }
      );

      if (response.data?.response?.holidays) {
        const fetchedHolidays: Record<string, any> = {};

        // Traduz os feriados
        for (const holiday of response.data.response.holidays) {
          const date = holiday.date.iso;
          const translatedName = await translateText(holiday.name, "pt");
          const translatedDescription = await translateText(
            holiday.description,
            "pt"
          );

          fetchedHolidays[date] = {
            marked: true,
            dotColor: "red",
            event: translatedName,
            description: translatedDescription,
          };
        }

        setHolidays(fetchedHolidays);
      } else {
        Alert.alert("Erro", "Resposta inesperada da API.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert("Erro ao buscar feriados", error.message);
      } else {
        Alert.alert("Erro desconhecido", "Algo deu errado ao buscar feriados.");
      }
    } finally {
      setLoading(false);
    }
  };

  const translateText = async (text: string, targetLang: string): Promise<string> => {
    try {
      const response = await axios.get(GOOGLE_TRANSLATE_API_URL, {
        params: {
          client: "gtx",
          sl: "en",
          tl: targetLang,
          dt: "t",
          q: text,
        },
      });

      // A resposta do Google Translate contém o texto traduzido no índice 0
      return response.data[0][0][0];
    } catch (error) {
      console.error("Erro ao traduzir:", error);
      return text; // Retorna o texto original em caso de erro
    }
  };

  const handleDayPress = (day: DateData) => {
    const holiday = holidays[day.dateString];
    if (holiday) {
      setSelectedHoliday({
        name: holiday.event,
        description: holiday.description,
      });
    } else {
      setSelectedHoliday(null);
      Alert.alert("Nenhum feriado", "Não há feriados cadastrados para esta data.");
    }
  };

  const handleMonthChange = (monthData: { year: number; month: number }) => {
    if (monthData.year !== currentYear) {
      setCurrentYear(monthData.year); // Atualiza o estado para o ano selecionado
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendário Religioso</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : (
        <Calendar
          locale={"pt-BR"}
          markingType={"dot"}
          markedDates={holidays}
          onDayPress={handleDayPress}
          onMonthChange={handleMonthChange} // Garante que o ano seja alterado corretamente
          minDate={"2020-01-01"} // Limite mínimo para as datas
          maxDate={"2050-12-31"} // Limite máximo para o ano de 2050
        />
      )}
      {selectedHoliday && (
        <View style={styles.holidayDetails}>
          <Text style={styles.holidayName}>{selectedHoliday.name}</Text>
          <Text style={styles.holidayDescription}>
            {selectedHoliday.description}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  holidayDetails: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  holidayName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  holidayDescription: {
    fontSize: 16,
    color: "#555",
  },
});
