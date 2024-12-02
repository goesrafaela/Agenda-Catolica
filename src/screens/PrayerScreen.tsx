import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const prayers = [
  { id: '1', title: 'Pai Nosso', content: 'Pai nosso que estais no céu...' },
  { id: '2', title: 'Ave Maria', content: 'Ave Maria, cheia de graça...' },
  { id: '3', title: 'Glória ao Pai', content: 'Glória ao Pai, ao Filho...' },
  { id: '4', title: 'Salvé Rainha', content: 'Salvé Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salvé...' },
  { id: '5', title: 'Credo', content: 'Creio em Deus Pai todo-poderoso, criador do céu e da terra...' },
  { id: '6', title: 'Oração de São Francisco', content: 'Senhor, fazei-me instrumento de vossa paz. Onde houver ódio, que eu leve o amor...' },
  { id: '7', title: 'Ato de Contrição', content: 'Meu Deus, eu me arrependo de todo o coração de Vos ter ofendido...' },
  { id: '8', title: 'Oração ao Anjo da Guarda', content: 'Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou...' },
  { id: '9', title: 'Magnificat', content: 'A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus, meu Salvador...' },
  { id: '10', title: 'Oração da Manhã', content: 'Senhor, no silêncio deste dia que nasce, venho pedir-Te a paz...' },
  { id: '11', title: 'Oração da Noite', content: 'Meu Deus, eu Vos dou graças pelo dia que terminou...' },
  { id: '12', title: 'Oração ao Espírito Santo', content: 'Vinde, Espírito Santo, enchei os corações dos vossos fiéis...' },
  { id: '13', title: 'Bênção da Mesa', content: 'Abençoai, Senhor, este alimento que vamos tomar...' },
];

export default function PrayerScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={prayers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardContent}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});
