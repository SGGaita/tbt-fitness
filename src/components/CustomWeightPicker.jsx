import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

export const CustomWeightPicker = () => {
    const [weight, setWeight] = useState(50); // Initial weight set to 50kg

    const handleIncrement = () => {
      setWeight(weight + 1);
    };
  
    const handleDecrement = () => {
      if (weight > 50) { // Only decrement if weight is above minimum
        setWeight(weight - 1);
      }
    };
  
    const handleChangeText = (text) => {
        const parsedWeight = parseInt(text, 10);
        if (text === '') { // Handle empty string for clearing input
          setWeight('');
        } else if (!isNaN(parsedWeight) && parsedWeight >= 50) {
          setWeight(parsedWeight);
        }
      };
    
     
    

  return (
    <View style={styles.weightPicker}>
      <TouchableOpacity style={styles.buttonTop} onPress={handleIncrement}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.weightInput}
        value={weight.toString()} // Convert height to string for TextInput
        keyboardType="number-pad" // Set keyboard type for numbers
        onChangeText={handleChangeText}
        maxLength={3} // Limit input to 3 digits (height in cm)
      />
      <Text style={styles.unitText}>Kg(s)</Text>
      <TouchableOpacity style={styles.buttonBottom} onPress={handleDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    weightPicker: {
        alignItems: 'center',
        justifyContent: 'center', // Center elements vertically
        
      },
      buttonTop: {
        marginBottom: SIZES.padding * 0.5, // Add small margin between buttons and input
        backgroundColor:COLORS.textGray,
        opacity:0.5,
        paddingVertical: SIZES.padding * 1.5,
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        width:70,
        alignItems:'center'
      },
      buttonBottom: {
        marginTop: SIZES.padding * 0.5, // Add small margin between buttons and input
        backgroundColor:COLORS.textGray,
        opacity:0.5,
        paddingVertical: SIZES.padding * 1.5,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        width:70,
        alignItems:'center'
      },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weightInput: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 70, // Adjust width for input field
    textAlign: 'center',
    color: COLORS.primaryDark,
  },
  unitText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: SIZES.padding * 0.5, // Add small margin between input and unit text
  },
    // ... your existing styles
    clearButton: {
        paddingHorizontal: SIZES.padding, // Adjust padding as needed
        paddingVertical: SIZES.padding / 2, // Adjust padding as needed
      },
      clearButtonText: {
        fontSize: 18, // Adjust font size for clear button text
        fontWeight: 'bold',
        color: COLORS.primaryLight, // Adjust clear button text color
      },
});


