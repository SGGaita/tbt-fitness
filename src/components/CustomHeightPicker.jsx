import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants'; // Assuming COLORS and SIZES are defined elsewhere

export const CustomHeightPicker = () => {
  const [height, setHeight] = useState(0); // Initial height set to 0cm

  const handleIncrement = () => {
    setHeight(height + 1);
  };

  const handleDecrement = () => {
    if (height > 0) {
      setHeight(height - 1);
    }
  };

  const handleChangeText = (text) => {
    const parsedHeight = parseInt(text, 10);
    if (!isNaN(parsedHeight) && parsedHeight >= 0) { // Validate input (>= 0)
      setHeight(parsedHeight);
    }
  };

  const handleClear = () => {
    setHeight('');
  };

  return (
    <View style={styles.heightPicker}>
      <TouchableOpacity style={styles.buttonTop} onPress={handleIncrement}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.heightInput}
        value={height.toString()} // Convert height to string for TextInput
        keyboardType="number-pad" // Set keyboard type for numbers
        onChangeText={handleChangeText}
        maxLength={3} // Limit input to 3 digits (height in cm)
      />
      <Text style={styles.unitText}>cm</Text>
      <TouchableOpacity style={styles.buttonBottom} onPress={handleDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  heightPicker: {
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
  heightInput: {
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
  clearButton: {
    marginTop: SIZES.padding, // Adjust margin for clear button
  },
  clearButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primaryLight,
  },
});
