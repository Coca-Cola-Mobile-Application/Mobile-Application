import React from "react";
import { useEffect , useState } from "react";
import { globalStyles } from "../styles/global";
import Card from '../components/card';
import { StyleSheet, View, FlatList ,ScrollView,TouchableOpacity,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CenterTopicOnly from "../components/centerTopicOnly";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import HomeTopicTitle from "../components/HomeTopicTitle"
import {topicDetails} from "../data/formtopics";
import {homeTopicDetails} from "../data/homeData";
import axios from 'axios';
                                                               
export default function FiilPersonSelectMoodle({ navigation}) {

    const navigateToPage = (pageName) => {
         navigation.navigate(pageName);
    };
    return (
        <LinearGradient
            colors={['#4751A0', '#4686A0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.container}
        > 
            <View style={style.homeViewOne}>
                    <HomeTopicTitle topicDetail="Create New Permit" navigateName="Create Work Permit"/>
                    <HomeTopicTitle topicDetail="Fill Permits" navigateName="FillTypes"/>
                    <HomeTopicTitle topicDetail="Accept Permits" navigateName="AcceptPermitList" />
                    <HomeTopicTitle topicDetail="My Profile" navigateName="My Profile"/>
            </View>
        </LinearGradient>
    ); 
}

const style = StyleSheet.create({
    homeViewOne: {
        width: '90%',
        height: '80%',
        backgroundColor: '#fff',
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        overflow: 'hidden',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    bodyView:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
});
