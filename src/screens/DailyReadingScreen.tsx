import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const dailyReadings = [
  { day: 1, passage: "Gênesis 1:1-31", explanation: "A criação do mundo." },
  { day: 2, passage: "Gênesis 2:1-25", explanation: "A criação do homem e da mulher." },
  { day: 3, passage: "Gênesis 3:1-24", explanation: "A queda do homem." },
  { day: 4, passage: "Salmos 1:1-6", explanation: "A felicidade dos justos." },
  { day: 5, passage: "Mateus 1:1-17", explanation: "Genealogia de Jesus Cristo." },
  // Adicione mais leituras aqui para completar os 365 dias
];

export default function DailyReadingScreen() {
  const [currentDay, setCurrentDay] = useState(1);

  const handleNextDay = () => {
    if (currentDay < dailyReadings.length) {
      setCurrentDay(currentDay + 1);
    } else {
      alert("Parabéns! Você completou todas as leituras do ano litúrgico!");
    }
  };

  const handlePreviousDay = () => {
    if (currentDay > 1) {
      setCurrentDay(currentDay - 1);
    }
  };

  const currentReading = dailyReadings.find((reading) => reading.day === currentDay);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leitura Diária - Ano C</Text>
      {currentReading && (
        <View style={styles.card}>
          <Text style={styles.day}>Dia {currentReading.day}</Text>
          <Text style={styles.passage}>{currentReading.passage}</Text>
          <Text style={styles.explanation}>{currentReading.explanation}</Text>
        </View>
      )}
      <View style={styles.navigation}>
        <TouchableOpacity
          style={[styles.button, currentDay === 1 && styles.disabledButton]}
          onPress={handlePreviousDay}
          disabled={currentDay === 1}
        >
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, currentDay === dailyReadings.length && styles.disabledButton]}
          onPress={handleNextDay}
          disabled={currentDay === dailyReadings.length}
        >
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
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
  card: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  day: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  passage: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  explanation: {
    fontSize: 14,
    color: "#666",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
