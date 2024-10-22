import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Animated, Easing } from 'react-native';
import { globalStyles } from "../styles/global";
import { LinearGradient } from 'expo-linear-gradient';
import img from "../assets/coca-cola.jpg"; // Make sure this is the correct path to the image
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const spinValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    // Spin animation
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,  // Duration of one full spin (in milliseconds)
        easing: Easing.linear,
        useNativeDriver: true, // Enables native driver for better performance
      })
    );

    spinAnimation.start();

    // Navigate to Home screen after 1.5 seconds  
    const timer = setTimeout(() => {
      navigation.navigate('Register'); // Make sure 'Home' is the correct route name
    }, 1500);

    // Cleanup function to clear the timeout and stop the animation
    return () => {
      clearTimeout(timer);
      spinAnimation.stop();
    };
  }, [spinValue, navigation]);

  // Interpolation to map the animated value to a spin transformation
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <LinearGradient
      colors={['#4751A0', '#4686A0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={globalStyles.container}
    >
      <View style={styles.centerContent}>
        <Animated.Image
          source={img}
          style={[styles.image, { transform: [{ rotate: spin }] }]} // Apply spin transformation
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,                // Makes the container take up the full screen
    justifyContent: 'center', // Vertically centers the content
    alignItems: 'center',     // Horizontally centers the content
  },
  image: {
    width: 150,
    height: 150,
  },
});
