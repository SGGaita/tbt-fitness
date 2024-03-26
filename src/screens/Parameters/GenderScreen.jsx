import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, icons, routes, SIZES } from '../../constants'

export const GenderScreen = () => {
    const [gender, setGender] = useState(null); // Use null as initial value for clarity
    const navigation = useNavigation()


    const handleContinue = () => {
        if (gender) { // Ensure a gender is selected before navigating
            navigation.navigate(routes.AGESCREEN);
        } else {
            // Handle the case where no gender is selected (optional)
            alert('Please select your gender.');
        }
    };

     // Handle gender select
    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
    };

     // Handle back button press
    const handleBack = () => {
        navigation.goBack();
    }



    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ ...FONTS.h1, fontWeight: 700, alignSelf: 'center' }}>Tell Us About Yourself</Text>
                    <Text style={{ ...FONTS.body1, alignSelf: 'center', textAlign: 'center' }}>To give you a better experience and
                        results we need to know your gender</Text>
                </View>
            </View>


            <View style={styles.midSection}>
                <TouchableOpacity
                    style={[
                        styles.genderButton,
                        gender === 'Male' && styles.genderButtonSelected, // Conditional styling for Male
                    ]}
                    onPress={() => handleGenderSelect('Male')}
                > 
                <Image source={icons.male} resizeMOde='contain' style={[{width:40, height:40, marginBottom:5},  gender === 'Male' && styles.genderButtonImageSelected]}/>
                    <Text style={[{ fontSize: 16 }, gender === 'Male' && styles.genderButtonTextSelected, ]}>Male</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.genderButton,
                        gender === 'Female' && styles.genderButtonSelected, // Conditional styling for Female
                    ]}
                    onPress={() => handleGenderSelect('Female')}
                >
                    <Image source={icons.female} resizeMOde='contain' style={[{width:40, height:40, marginBottom:5},  gender === 'Female' && styles.genderButtonImageSelected]}/>
                    <Text style={[{ fontSize: 16 }, gender === 'Female' && styles.genderButtonTextSelected, ]}>Female</Text>
                </TouchableOpacity>
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
                    <TouchableOpacity style={styles.button} disabled={!gender} onPress={handleContinue}>
                        <Text style={styles.buttonText}>Continue</Text>
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
        //flexDirection:'column',
        //justifyContent: 'center',
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
    genderButton: {
        backgroundColor: '#ccc',
        height: 150,
        width: 150,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 150
    },
    genderButtonSelected: {
        backgroundColor: COLORS.primaryDark, // Apply primary color on selection
      },
      genderButtonTextSelected:{
        color: COLORS.white
      },
      genderButtonImageSelected:{
        tintColor:COLORS.white
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