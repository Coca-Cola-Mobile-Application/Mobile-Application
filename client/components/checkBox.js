import React from "react";
import {View,StyleSheet,Text} from 'react-native';
import { useState } from "react";
import CheckBox from 'expo-checkbox';
import { globalStyles } from "../styles/global";


export default function CheckBoxContainer({optionTitle})
{
    const [isChecked,setChecked] =useState(false);
    return(
        <View style={styles.boxContainer}>
            <Text style={globalStyles.checkBoxTitle} >{optionTitle}</Text>
            <CheckBox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#00FF00': undefined}
              style={styles.CheckBoxs}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer:{
        flexDirection:'row',
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
        marginBottom:10,
        justifyContent:'space-between',
        alignItems:'center',

    },
    CheckBoxs:{
        margin:8,
        width:24,
        height:24
    }
});


