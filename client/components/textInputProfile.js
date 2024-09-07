import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";

export default function TextInputProfile({
  children,
  pickerDisplay,
  editable,
  keyBoardType,
  placeHolder,
  mode,
}) {
  const [show, setShow] = useState(false);
  const [dpDate, setdpDate] = useState('');

  const pickerHandler = () => {
    setShow(!show);
  };

  return (
    <View style={styles.cardDecoration}>
      {children}

      {!show && (
        <Pressable onPress={pickerHandler} style={styles.inputWrapper}>
          <Text style={styles.fixedText}>{placeHolder}</Text>
          <TextInput
            style={[styles.subStyle, { paddingLeft: placeHolder.length * 8 }]} // Adjust padding based on placeholder length
            editable={editable}
            keyboardType={keyBoardType}
            multiline={true}
            value={dpDate}
            onChangeText={setdpDate}
          />
        </Pressable>
      )}
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
    alignSelf: 'center', 
    
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  fixedText: {
    position: "absolute",
    left: 0,
    fontWeight: "bold",
    color: "#000000",
  },

  subStyle: {
    backgroundColor: "rgba(232, 232, 232, 0)", // Making background transparent
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
    fontWeight: "bold",
    color: "#000000",
    paddingLeft: 100, // initial padding
  },
});
