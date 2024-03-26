import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, SIZES, routes } from '../../constants'

export const EmailScreen = () => {
    const navigation = useNavigation()

    const handleContinue = () => {
        navigation.navigate(routes.GENDERSCREEN)
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.topSection}>
                <View style={{ marginBottom: 30, width: '100%', alignSelf: 'center' }}>
                    <Text style={{ fontSize:35, fontWeight: 600, alignSelf: 'flex-start' }}>Unlock you fitness journey</Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <TextInput
                        style={styles.textInput}
                        value=""
                        placeholder="Enter your email address"
                        placeholderTextColor='#0f0f0f'
                    />
                </View>
            </View>


            <View style={styles.bottomSection}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleContinue}
                >
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
        marginTop: SIZES.padding * 3
    },
    bottomSection: {

        position: 'absolute', width: '100%', alignSelf: 'center', bottom: 40
    },
    textInput: {
        color: '#000',
        width: '100%',
        backgroundColor: COLORS.secondary,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: COLORS.primary,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
})