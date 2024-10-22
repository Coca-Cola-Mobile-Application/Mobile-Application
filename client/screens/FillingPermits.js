import React from "react"; 
import { useEffect , useState } from "react";
import { globalStyles } from "../styles/global";
import Card from '../components/card';
import { StyleSheet, View, FlatList ,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CenterTopicOnly from "../components/centerTopicOnly";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import AllPermitsCard from "../components/allPermits"
import {topicDetails} from "../data/formtopics";
import {sampleData} from "../data/ongoingPermitList";
import axios from 'axios';
                                                                
export default function FillingPermits({ navigation ,route}) {

    const[fillList,setFillList]=useState([]);

    //async funtion add later
    const fetchUserData =() => {
        try {
            //based on number get permits from db
            // const number =route.params.number;
            // console.log(number);
            //const response = await axios.get('http://server-url/api/formdata');
            //const sampleData = response.data;
            //console.log(sampleData);
            setFillList(sampleData);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(()=>{
        fetchUserData();
    },[]);

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
                        <CenterTopicOnly topicDetail={topicDetails[14]}/>
                        <Card> 
                            <FlatList
                                data={fillList}
                                renderItem={({ item }) => (
                                    <AllPermitsCard topicDetail={item} navigateName="permitPageDrawer"/>
                                )}
                                keyExtractor={(item) => item.permitId.toString()}
                                scrollEnabled={false}
                            />
                        </Card>
                    </View> 

                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    
});
