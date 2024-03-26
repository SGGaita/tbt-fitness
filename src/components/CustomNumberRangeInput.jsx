import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export const CustomNumberRangeInput = ({ selectedRangeIndex, onSelectRange }) => {

  const ageRanges = [
    { id: 1, label: 'Young Adults (18-24)' },
    { id: 2, label: 'Active Adults (25-34)' },
    { id: 3, label: 'Adults in their Prime (35-50)' },
    { id: 4, label: 'Active Maturing Adults (50+)' },
  ];

    return (
      <View style={styles.numberInput}>
      {ageRanges.map((range, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, index === selectedRangeIndex && styles.buttonSelected]}
          onPress={() => onSelectRange(index)}
        >
          <Text style={[styles.buttonText, , index === selectedRangeIndex && styles.buttonTextSelected]}>{range.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    numberInput: {
      flexDirection: 'row',
      flexWrap: 'wrap', // Wrap buttons if they don't fit on one line
      justifyContent: 'space-between',
    },
    button: {
      padding: 10,
      margin: 5,
      borderRadius: 5,
      backgroundColor: '#ccc',
      width: '45%', // Adjust width for 2 buttons per row
    },
    buttonSelected: {
      backgroundColor: COLORS.primaryDark, // Apply primary light color on selection
    },
    buttonTextSelected:{
      color: COLORS.white
    },
    buttonText: {
      fontSize: 16,
      //fontWeight: 'bold',
      textAlign: 'center',
    },
  });