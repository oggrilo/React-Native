import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
  });
  if(!fontsLoaded){

  }
  return (
    <NavigationContainer>
      {/*<AuthStack/>*/}
      <StackRoutes/>
    </NavigationContainer>
  );
}


