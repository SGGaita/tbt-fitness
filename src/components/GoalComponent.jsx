import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const goals = [
  { id: 1, name: 'Get Fitter' },
  { id: 2, name: 'Gain Weight' },
  { id: 3, name: 'Lose Weight' },
  { id: 4, name: 'Building Muscles' },
  { id: 5, name: 'Improving Endurance' },
];

export const GoalComponent = () => {
  const [selectedGoals, setSelectedGoals] = useState([]); // Array to store selected goal IDs

  const handleGoalPress = (goalId) => {
    const isSelected = selectedGoals.includes(goalId);
    const updatedSelectedGoals = isSelected
      ? selectedGoals.filter((id) => id !== goalId) // Deselect if already selected
      : [...selectedGoals, goalId]; // Select if not already selected
    setSelectedGoals(updatedSelectedGoals);
  };

  return (
    <View style={styles.container}>
      {goals.map((goal) => (
        <TouchableOpacity
          key={goal.id} // Unique key for each button
          style={[
            styles.button,
            selectedGoals.includes(goal.id) && styles.buttonSelected,
          ]}
          onPress={() => handleGoalPress(goal.id)}
        >
          <Text style={styles.buttonText}>
            {goal.name}
            {selectedGoals.includes(goal.id) && <Text style={styles.checkMark}>✓</Text>}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Remove flexWrap and justifyContent
    
    
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
    fontWeight: 'bold',
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
