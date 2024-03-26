import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AgeScreen, EmailScreen, GenderScreen, GoalScreen, HeightScreen, HomeScreen, OnboardingScreen, WeightScreen } from './src/screens';
import { routes } from './src/constants';

const Stack = createNativeStackNavigator();

const App = () => {


  useEffect(() => {
    SplashScreen.hide();

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={routes.ONBOARDING}
      >
        <Stack.Screen
          name={routes.ONBOARDING}
          options={{
            headerShown: false,
          }}
          component={OnboardingScreen} />

        {/* <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen} /> */}

          <Stack.Group
          screenOptions={
            {
              headerShown:false
            }
          }
          >
            <Stack.Screen name={routes.EMAILSCREEN} component={EmailScreen} />
            <Stack.Screen name={routes.GENDERSCREEN} component={GenderScreen} />
            <Stack.Screen name={routes.AGESCREEN} component={AgeScreen} />
            <Stack.Screen name={routes.WEIGHTSCREEN} component={WeightScreen} />
            <Stack.Screen name={routes.HEIGHTSCREEN} component={HeightScreen} />
            <Stack.Screen name={routes.GOALSCREEN} component={GoalScreen} />
          </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App