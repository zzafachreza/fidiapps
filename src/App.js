import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './routes';
import { LogBox, StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { colors } from './utils';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
