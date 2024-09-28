import React from "react";
import { useEffect , useState } from "react";
import { globalStyles } from "../styles/global";
import Card from '../components/card';
import { StyleSheet, View, FlatList ,ScrollView,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CenterTopicOnly from "../components/centerTopicOnly";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import MoodleBoxTitle from "../components/moodleBoxTitle"
import {topicDetails} from "../data/formtopics";
import {sampleData} from "../data/ongoingPermitList";
import axios from 'axios';
                                                               
export default function FillingPerTypes({ navigation }) {

    const navigateToPage = (navigateName,number) => {
        navigation.navigate(navigateName,{number}); // Navigate to another page
    };

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
                        <CenterTopicOnly topicDetail={topicDetails[13]}/>
                        <Card>
                            <TouchableOpacity onPress={()=>navigateToPage("FillPermitList",{number:1})}>
                                <MoodleBoxTitle topicDetail="New Permits For Today"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigateToPage("FillPermitList",{number:2})}>
                                <MoodleBoxTitle topicDetail="Submited Permits Today"/>
                            </TouchableOpacity>
                        </Card>
                    </View> 
                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    
});
