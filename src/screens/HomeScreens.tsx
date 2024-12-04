import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Definição das rotas possíveis
type RootStackParamList = {
  Orações: undefined;
  Calendario: undefined;
  Rosario: undefined;
  LeituraDiaria: undefined;
};

export default function HomeScreen() {
  // Tipar o `useNavigation`
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ImageBackground
      source={require("../images/fundo.png")} // Substitua pelo caminho correto da sua imagem
      style={styles.background}
      resizeMode="cover" // Ajusta a imagem para cobrir todo o espaço
    >
      <View style={styles.container}>
        <Text style={styles.title}>Agenda Católica</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Orações")}
        >
          <Text style={styles.buttonText}>Orações Diárias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Calendario")}
        >
          <Text style={styles.buttonText}>Calendário de Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Rosario")}
        >
          <Text style={styles.buttonText}>Rosário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LeituraDiaria")}
        >
          <Text style={styles.buttonText}>Leitura Diaria</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adiciona uma camada semi-transparente por cima da imagem
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#21618c",
  },
  button: {
    backgroundColor: "#21618c",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Para Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
