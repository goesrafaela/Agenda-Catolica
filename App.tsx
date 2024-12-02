import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreens';
import PrayerScreen from './src/screens/PrayerScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import * as Font from 'expo-font'; // Pacote para carregar fontes
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import RosaryScreen from './src/screens/RosaryScreen';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'DeliusSwashCaps': require('./assets/fonts/DeliusSwashCaps-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts(); // Carregar fontes quando o app for inicializado
  }, []);

  if (!fontsLoaded) {
    // Exibe o indicador de carregamento até as fontes estarem prontas
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ headerTitleStyle: { fontFamily: 'DeliusSwashCaps' } }}
        />
        <Stack.Screen name="Orações" component={PrayerScreen} options={{ headerTitleStyle: { fontFamily: 'DeliusSwashCaps' } }}/>
        <Stack.Screen name="Calendario" component={CalendarScreen} options={{ headerTitleStyle: { fontFamily: 'DeliusSwashCaps' } }}/>
        <Stack.Screen name="Rosario" component={RosaryScreen} options={{ headerTitleStyle: { fontFamily: 'DeliusSwashCaps' } }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
