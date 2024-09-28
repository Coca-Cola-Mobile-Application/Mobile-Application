import React from "react";
import { useEffect , useState } from "react";
import { globalStyles } from "../styles/global";
import Card from '../components/card';
import { StyleSheet, View, FlatList ,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CenterTopicOnly from "../components/centerTopicOnly";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import MoodleBoxTitle from "../components/moodleBoxTitle"
import {topicDetails} from "../data/formtopics";
import {newPermitDetails} from "../data/formdataNewPermit";
import axios from 'axios';
                                                               
export default function MyProfile({ navigation }) {
    return (
        <LinearGradient
            colors={['#4751A0', '#4686A0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={globalStyles.container}
        > 
            <View style={globalStyles.insideContainer}>
                <ScrollView>
                    <View style={globalStyles.bodyView}>
                        <CenterTopicOnly topicDetail={topicDetails[12]}/>
                        <Card>
                            <MoodleBoxTitle topicDetail=" MyProfile" />
                        </Card>
                    </View> 

                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    
});
