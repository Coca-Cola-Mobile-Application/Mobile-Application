import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; // Added Text import
import { globalStyles } from "../styles/global";

export default function RegisterPage() {
  return (
    <LinearGradient
      colors={['#4751A0', '#4686A0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={globalStyles.container} // Add globalStyles.container to style the gradient container
    >
      <View style={styles.content}> {/* Apply some style for positioning */}
        <Text style={styles.text}>Register Page</Text> 
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center',     // Centers the content horizontally
  },
  text: {
    color: '#fff', // White text color
    fontSize: 24,  // Larger font size
    fontWeight: 'bold',
  },
});
