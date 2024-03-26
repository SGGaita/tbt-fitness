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
    
      // Helper function to clear the input field
      const handleClear = () => {
        setWeight('');
      };
    

  return (
    <View style={styles.weightPicker}>
      <TouchableOpacity style={styles.buttonLeft} onPress={handleDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.weightInput}
        value={weight.toString()} // Convert weight to string for TextInput
        keyboardType="number-pad" // Set keyboard type for numbers
        onChangeText={handleChangeText}
        minLength={2} // Limit input to 3 digits (weight in kgs)
        maxLength={3} // Limit input to 3 digits (weight in kgs)
      />
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>X</Text> 
        </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRight} onPress={handleIncrement}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  weightPicker: {
    alignItems: 'center',
    //backgroundColor:COLORS.textGray,
    width:'100%',
    borderColor:COLORS.textGray,
    
    //elevation:0.1,
    //paddingHorizontal:SIZES.padding * 2,
    borderRadius: SIZES.radius,
    flexDirection:'row'
  },
  buttonLeft: {
    paddingHorizontal: SIZES.padding * 2,
    backgroundColor:COLORS.textGray,
    opacity:0.5,
    paddingVertical: SIZES.padding * 1.5,
    borderBottomStartRadius:10,
    borderTopStartRadius:10
  },
  buttonRight: {
    paddingHorizontal: SIZES.padding * 2,
    backgroundColor:COLORS.textGray,
    opacity:0.5,
    paddingVertical: SIZES.padding * 1.5,
    borderBottomEndRadius:10,
    borderTopEndRadius:10
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
    marginVertical: 10, // Add vertical spacing around input
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


