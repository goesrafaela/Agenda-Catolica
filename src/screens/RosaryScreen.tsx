import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const rosaryMysteries = [
  "Mistério 1: A Anunciação do Anjo a Maria",
  "Mistério 2: A Visitação de Maria a Isabel",
  "Mistério 3: O Nascimento de Jesus",
  "Mistério 4: A Apresentação de Jesus no Templo",
  "Mistério 5: A Perda e o Encontro de Jesus no Templo",
];

export default function RosaryScreen() {
  const [currentMystery, setCurrentMystery] = useState(0);
  const [currentHailMary, setCurrentHailMary] = useState(0);

  const handleNextHailMary = () => {
    if (currentHailMary < 9) {
      setCurrentHailMary(currentHailMary + 1);
    } else if (currentMystery < rosaryMysteries.length - 1) {
      setCurrentHailMary(0);
      setCurrentMystery(currentMystery + 1);
    } else {
      Alert.alert("Parabéns!", "Você completou o Rosário!");
      setCurrentHailMary(0);
      setCurrentMystery(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Rosário</Text>
      <View style={styles.card}>
        <Text style={styles.mystery}>{rosaryMysteries[currentMystery]}</Text>
        <Text style={styles.hailMaryCount}>
          Ave Maria: {currentHailMary + 1} de 10
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextHailMary}>
        <Text style={styles.buttonText}>
          {currentHailMary < 9 ? "Próxima Ave Maria" : "Próximo Mistério"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: "90%",
    alignItems: "center",
  },
  mystery: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  hailMaryCount: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
