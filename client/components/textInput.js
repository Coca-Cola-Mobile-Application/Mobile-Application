import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Platform, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

export default function InputComponent({ pickerDisplay, editable, keyBoardType, placeHolder, mode = "date" }) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dpDate, setdpDate] = useState("");

    const pickerHandler = () => {
        setShow(!show);
    };

    const onChange = (event, selectedDate) => {
        if (event.type === "set" && selectedDate) {
            const currentDate = selectedDate || date;
            setDate(currentDate);
            setdpDate(currentDate.toDateString());

            if (Platform.OS === "android") {
                pickerHandler();
            }
        } else {
            pickerHandler();
        }
    };

    return (
        <View style={styles.inputStyle}>
            {!show && (
                <Pressable onPress={pickerHandler}>
                    <TextInput
                        style={styles.subStyle}
                        editable={editable}
                        keyboardType={keyBoardType}
                        placeholder={placeHolder}
                        multiline={true}
                        value={dpDate}
                       // onChangeText={setdpDate}
                    />
                </Pressable>
            )}
            {pickerDisplay && (
                <TouchableOpacity onPress={pickerHandler}>
                    <Ionicons name="calendar" size={24} color="black" />
                </TouchableOpacity>
            )}
            {show && (
                <DateTimePicker
                    display='default'
                    mode={mode}
                    value={date}
                    onChange={onChange}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: 'row',
        marginBottom: 10,
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
        width: '90%',
        overflow: 'hidden',
        borderRadius: 10,
        fontWeight: 'bold',
    },
});
