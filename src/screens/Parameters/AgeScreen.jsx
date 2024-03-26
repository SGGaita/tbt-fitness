import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { routes, COLORS, FONTS, SIZES } from '../../constants'
import { CustomNumberRangeInput } from '../../components'

export const AgeScreen = () => {
  const navigation = useNavigation()
  const [selectedRangeIndex, setSelectedRangeIndex] = useState(0);

  const handleSelectRange = (index) => {
    setSelectedRangeIndex(index);
  };

  const getSelectedRangeDescription = () => {
    return ageRanges[selectedRangeIndex].description;
  };


  const handleContinue = () => {
    navigation.navigate(routes.WEIGHTSCREEN)
  }

  const handleBack = () => {
    navigation.goBack();
  }

 

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ ...FONTS.h1, fontWeight: 700, alignSelf: 'center' }}>How Old are You</Text>
          <Text style={{ ...FONTS.body1, alignSelf: 'center', textAlign: 'center' }}>Age in years. This will help us to personalize
            an exercise program that suits you</Text>
        </View>
      </View>


      <View style={styles.midSection}>
        <CustomNumberRangeInput
          selectedRangeIndex={selectedRangeIndex}
          onSelectRange={handleSelectRange}
        />
      </View>


      <View style={styles.bottomSection}>
        <View style={{ flex: 1, marginHorizontal: 5 }} >
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={handleBack}
          >
            <Text style={styles.buttonBackText}>
              Back
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginHorizontal: 5 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'relative'

  },
  topSection: {
    marginTop: SIZES.padding * 3,
    marginBottom: SIZES.padding * 2
  },
  midSection: {
    alignSelf: 'center'
  },
  bottomSection: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
    bottom: 40,
    flexDirection: 'row',
    width: '100%'
  },
  textInput: {
    color: '#000',
    width: '100%',
    backgroundColor: '#cfcfcf',
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    width: 100
  },
  button: {
    backgroundColor: COLORS.primaryDark,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBack: {
    backgroundColor: COLORS.primaryLight,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBackText: {
    color: COLORS.textBlack,
    ...FONTS.h4
  },
  buttonText: {
    color: COLORS.white,
    ...FONTS.h4
  }
})