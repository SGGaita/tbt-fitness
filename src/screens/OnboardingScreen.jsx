import {  StyleSheet,  View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { OnboardingComponent } from '../components'
import { images } from '../constants'
import { onboardingData } from '../data/onboardingData'
import { useNavigation } from '@react-navigation/native'



export const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation()

  const buttonStyle = currentIndex === onboardingData.length - 1 ? styles.lastButton : styles.button;
  const buttonTextStyle = currentIndex === onboardingData.length - 1 ? styles.lastButtonText : styles.buttonText;

  useEffect(() => {

    return () => {}; // Cleanup function to avoid memory leaks
  }, [onboardingData]); // Re-run effect when onboardingData changes

  const currentData = onboardingData[currentIndex];
  console.log(currentData)

  const handleNext = () => {
    if (currentIndex === onboardingData.length - 1) {
      // Navigate to Home screen on last slide
      navigation.navigate('Home');
    } else {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, onboardingData.length - 1));

    }
  };

  return (
    <View style={styles.container}>
      <OnboardingComponent 
      bgImage={images[currentData.image]} 
      title={currentData.title} 
      subTitle={currentData.subtitle} 
      buttonTitle={currentData.buttonTitle} 
      onPress={handleNext}
      buttonStyle={buttonStyle}
      buttonTextStyle={buttonTextStyle}
      />
    </View>
  )
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
   // backgroundColor: "white"
  },
  button: {
    backgroundColor: '#ddd',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lastButton: {
    backgroundColor: '#e23e51', // Change to your desired color for the last screen button
    color:'white',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 23,
    color: '#000'
  },
  lastButtonText: {
    fontSize: 23,
    color: '#fff'
  },
})