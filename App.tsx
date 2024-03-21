import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, OnboardingScreen } from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {


  useEffect(() => {
    SplashScreen.hide();


  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          options={{
            headerShown: false,
          }}
          component={OnboardingScreen} />

<Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App