import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Topic from "../components/topic";

const topicDetail_1 ={
    number:1,
    title:'VALIDITY'
}
const card_1 =['Date' ,'Time Start','Time End'];


export default function PageOne({ navigation }) {

    return (
        <LinearGradient
            colors={['#4751A0', '#4686A0']}
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={globalStyles.container}
        >
            <View style={globalStyles.insideContainer}>
                <Topic topicDetail={topicDetail_1}/>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    }
});
