import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Using Ionicons for the arrow icon
import FastImage from 'react-native-fast-image';

const ProfileCard = ({ name, position, imageUri, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.position}>{position}</Text>
      </View>

      <Icon name="chevron-forward" size={20} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20, // Rounded edges
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
    marginVertical: 10,
    marginHorizontal: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular image
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // This will allow the text to take as much space as needed
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  position: {
    fontSize: 14,
    color: "#666",
  },
});

export default ProfileCard;
