import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Topic from "../components/topic";

export default function PageNine({ navigation }) {
    return(
        <LinearGradient
            colors={['#4751A0', '#4686A0']}
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={globalStyles.container}
        >
            <View style={globalStyles.insideContainer}></View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({

});
//<Button title="Next" onPress={()=> navigation.navigate('PageTen')} />