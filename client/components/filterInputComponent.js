import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Platform, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FilterInputComponent({updateFunction,value,placeHolder,id}) {

    const handleTextChange = (newValue) => {
        updateFunction(id, newValue); 
    };
   
    return (
        <View style={styles.inputStyle}>
            <TextInput
                style={styles.subStyle}
                editable={true}
                keyboardType='default'
                placeholder={placeHolder}
                multiline={true}
                value={value}
                onChangeText={handleTextChange}
            />
            <Ionicons name="search" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: 'row',
        marginBottom:10,
        marginTop: 5,
        backgroundColor: '#E8E8E8',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 3,
    },
    subStyle: {
        backgroundColor: '#E8E8E8',
        width:180,
        overflow: 'hidden',
        borderRadius: 10,
        fontWeight: 'bold',
        color:'#000000'
    },
});
