import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const activityLevels = [
  { id: 1, name: 'Beginner' },
  { id: 2, name: 'Intermediate' },
  { id: 3, name: 'Advanced' },
];

export const ActivityLevelComponent = () => {
  const [selectedLevel, setSelectedLevel] = useState(null); // Store the selected level ID

  const handleLevelPress = (levelId) => {
    setSelectedLevel(levelId); // Update selected level
  };

  return (
    <View style={styles.container}>
      {activityLevels.map((level) => (
        <TouchableOpacity
          key={level.id} // Unique key for each button
          style={[styles.button, selectedLevel === level.id &&  styles.buttonSelected]}
          onPress={() => handleLevelPress(level.id)}
        >
          <Text style={styles.buttonText}>
           
            {level.name}
            {selectedLevel === level.id &&  <Text style={styles.checkMark}>✓</Text>}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add styling for the container as needed
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80, // Set button height
  },
  buttonText: {
    fontSize: 16,
  },
  checkMark: {
    fontSize: 20,
    color: COLORS.primary, // Adjust checkmark color
  },
  buttonSelected: {
    borderWidth: 2, // Add border for selected buttons
    borderColor: COLORS.primaryLight, // Set border color to red
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
