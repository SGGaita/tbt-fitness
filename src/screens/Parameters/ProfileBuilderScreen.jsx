import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, SIZES, icons, routes } from '../../constants';
import { useNavigation } from '@react-navigation/native';


export const ProfileBuilderScreen = () => {
  const [fullName, setFullName] = useState()
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate(routes.GOALSCREEN); // Assuming you have a GOALSCREEN route
  };

  const handleTextChange = (text) => {
    setFullName(text)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.topSection}>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ ...FONTS.h1, fontWeight: 700, alignSelf: 'center' }}>
            Fill your Profile
          </Text>
          <Text style={{ ...FONTS.body1, alignSelf: 'center', textAlign: 'center' }}>
            Don't worry you can always change it later, or you can skip it for now.
          </Text>
        </View>
      </View>

      <View style={styles.midSection}>
        <View style={styles.avatar}>
          <Image source={icons.user} resizeMode='contain' style={{width:120, height:120,borderRadius:60, tintColor:COLORS.textGray, alignSelf:'center', position:'absolute', bottom:0}}/>
          <Image source={icons.camera} resizeMode='contain' style={{ width: 30, height: 30, tintColor: COLORS.primary, opacity: 0.8, position: 'absolute', bottom: 10, right: 10 }} />
        </View>

        <View style={styles.inputFields}>
          <View style={{ marginBottom: 24 }}>
            <Text style={{ ...FONTS.h4, fontWeight: 700, marginBottom: 10, marginLeft: 5 }}>
              Your full name
            </Text>
            <TextInput
              placeholder='Enter your full name'
              placeholderTextColor={COLORS.textBlack}
              value={fullName}
              onChangeText={handleTextChange}
              style={styles.textInput}
            />
          </View>

          <View style={{ marginBottom: 24 }}>
            <Text style={{ ...FONTS.h4, fontWeight: 700, marginBottom: 10, marginLeft: 5 }}>
              Username
            </Text>
            <TextInput
              placeholder='Enter a username'
              placeholderTextColor={COLORS.textBlack}
              value={fullName}
              onChangeText={handleTextChange}
              style={styles.textInput}
            />
          </View>

          <View style={{ marginBottom: 24 }}>
            <Text style={{ ...FONTS.h4, fontWeight: 700, marginBottom: 10, marginLeft: 5 }}>
              Country
            </Text>
            <TextInput
              placeholder='Select your country of residence'
              placeholderTextColor={COLORS.textBlack}
              value={fullName}
              onChangeText={handleTextChange}
              style={styles.textInput}
            />
          </View>
        </View>

      </View>

      <View style={styles.bottomSection}>
        <View style={{ flex: 1, marginHorizontal: 5 }}>
          <TouchableOpacity style={styles.buttonBack} onPress={handleBack}>
            <Text style={styles.buttonBackText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginHorizontal: 5 }}>
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

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
    //alignSelf: 'center'
  },
  avatar: {
    position: 'relative',
    height: 150,
    width: 150,
    backgroundColor: COLORS.secondary,
    alignSelf: 'center',
    borderRadius: SIZES.radius * 7.5
  },
  inputFields: {
    marginTop: SIZES.section
  },
  textInput: {
    color: '#000',
    width: '100%',
    backgroundColor: COLORS.secondary,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10
  }
  ,
  bottomSection: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
    bottom: 40,
    flexDirection: 'row',
    width: '100%'
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
});
