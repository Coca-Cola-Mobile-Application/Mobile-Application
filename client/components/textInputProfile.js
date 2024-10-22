import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default function TextInputProfile({
  children,
  editable,
  keyBoardType,
  placeHolder,
  type,
  value,
  onChangeText,
}) {
  // Ensure the value is a string for TextInput and handle undefined/null values
  const displayValue = value !== undefined && value !== null ? String(value) : "";

  // Convert input back to a number when it's a numeric field
  const handleChange = (text) => {
    if (type === "numeric") {
      const numericValue = parseInt(text, 10); // Convert the input to an integer
      onChangeText(isNaN(numericValue) ? "" : numericValue); // Update the value if valid number, else empty
    } else {
      onChangeText(text); // For non-numeric fields, pass the text as it is
    }
  };

  return (
    <View style={styles.cardDecoration}>
      {children}

      <View
        pointerEvents={editable ? "auto" : "none"} // Disable interaction when not editable
        style={styles.inputWrapper}
      >
        <Text style={styles.fixedText}>{placeHolder}</Text>
        <TextInput
          style={styles.inputField}
          editable={editable}
          keyboardType={
            type === "numeric"
              ? "numeric"
              : type === "email"
              ? "email-address"
              : "default"
          } // Conditionally set keyboard type
          secureTextEntry={type === "password"} // Enable secure text entry for password
          multiline={type === "textarea"} // Enable multiline for text areas
          value={displayValue} // Ensure the value is always a string
          onChangeText={handleChange} // Handle numeric conversion
          placeholder={editable ? "" : placeHolder} // Hide placeholder in non-editable state
          placeholderTextColor="#999999"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardDecoration: {
    width: "90%",
    borderRadius: 30,
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: "10%",
    alignSelf: "center",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  fixedText: {
    width: 100, // Fixed width for placeholder
    fontWeight: "bold",
    color: "#666666",
  },

  inputField: {
    flex: 1, // Input field takes up the remaining space
    backgroundColor: "transparent", // Transparent background for input
    borderRadius: 10,
    fontWeight: "bold",
    color: "#000000",
    paddingLeft: 5, // Space between placeholder and input
  },
});
