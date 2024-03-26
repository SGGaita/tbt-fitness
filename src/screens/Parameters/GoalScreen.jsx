import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../../constants';
import { CustomHeightPicker, GoalComponent } from '../../components';
import { useNavigation } from '@react-navigation/native';

export const GoalScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate(routes.GOALSCREEN); // Assuming you have a GOALSCREEN route
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ ...FONTS.h1, fontWeight: 700, alignSelf: 'center' }}>
            What is your Goal?
          </Text>
          <Text style={{ ...FONTS.body1, alignSelf: 'center', textAlign: 'center' }}>
            You can choose multiple goals. Don't worry, you can change this later.
          </Text>
        </View>
      </View>

      <View style={styles.midSection}>
        <GoalComponent/>
      </View>

      <View style={styles.bottomSection}>
        <View style={{ flex: 1, marginHorizontal: 5 }}>
          <TouchableOpacity style={styles.buttonBack} onPress={handleBack}>
            <Text style={styles.buttonBackText}>Back</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginHorizontal: 5 }}>
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
