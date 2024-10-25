import React from "react";
import { useEffect , useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import Card from '../components/card';
import { StyleSheet, View, FlatList ,ScrollView,Button ,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Topic from "../components/topic";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import {sections} from "../data/formtopics";
import {sampleDataSet} from "../data/workPermitSampleData";
import axios from 'axios';
                                                               
export default function PageOne({ navigation,route }) {
    const [dataSet,setDataSet]=useState({
        p1IssueDate:new Date(),
        p1TStart:new Date(),
        p1TEnd:new Date(),
        p1IsuNme:"",
        p1IsuDepNme:"",
        p1ContractorNme:"",
        p1ContractorComNme:"",
        p1CrosRef:"",
        p1JobLoca:"",
        p1JobDes:""
    });
    const [changed,setChanged]=useState({
        p1IssueDate:false,
        p1TStart:false,
        p1TEnd:false,
        p1IsuNme:false,
        p1IsuDepNme:false,
        p1ContractorNme:false,
        p1ContractorComNme:false,
        p1CrosRef:false,
        p1JobLoca:false,
        p1JobDes:false,
    });

    const fetchData = async () => {
        try {
            // const objectID=route.params.objectID;
            // const response = await axios.get('http://server-url/api/formdata');
            // const formData = response.data;
            // setDataSet({
            //     p1IssueDate: new Date(formData.p1IssueDate),
            //     p1TStart: new Date(formData.p1TStart),
            //     p1TEnd: new Date(formData.p1TEnd),
            //     p1IsuNme: formData.p1IsuNme,
            //     p1IsuDepNme: formData.p1IsuDepNme,
            //     p1ContractorNme: formData.p1ContractorNme,
            //     p1ContractorComNme: formData.p1ContractorComNme,
            //     p1CrosRef: formData.p1CrosRef,
            //     p1JobLoca: formData.p1JobLoca,
            //     p1JobDes: formData.p1JobDes
            // });
            setDataSet(sampleDataSet);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            // Re-fetch data when the screen comes into focus
            fetchData();
        }, [])
    );

    const updateDataSet = (id, value) => {
        setDataSet((prevDataSet) => ({
            ...prevDataSet,
            [id]: value
        }));
    
        setChanged((prevChanged) => ({
            ...prevChanged,
            [id]: true
        }));
    };    

    const saveData = async () => {
        // Filter changed data
        const changedFields = {};
        Object.keys(changed).forEach((key) => {
            if (changed[key]) {
                changedFields[key] = dataSet[key];
            }
        });

        if (Object.keys(changedFields).length === 0) {
            Alert.alert('No changes to save');
            return;
        }

        try {
            const objectID = route.params.objectID;
            const response = await axios.put(`http://your-backend-url/api/workpermits/${objectID}`, changedFields);
            Alert.alert('Data saved successfully');
        } catch (error) {
            console.error("Error saving data: ", error);
            Alert.alert('Error saving data');
        }
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
                        <FlatList 
                            style={globalStyles.insideBodyView2}
                            data={sections}
                            renderItem={({ item }) => ( 
                                <View style={globalStyles.insideBodyView}>
                                    <Topic topicDetail={item.topic} />
                                    <Card>
                                        <FlatList
                                            data={item.data}
                                            renderItem={({ item }) => (
                                                <View>
                                                    {item.inputTitle && <InputTitle>{item.inputTitle}</InputTitle>}
                                                    <InputComponent
                                                        pickerDisplay={item.pickerDisplay}
                                                        editable={item.editable}
                                                        keyBoardType="default"
                                                        placeHolder={item.placeHolder}
                                                        mode={item.mode}
                                                        id={item.key}
                                                        value={dataSet[item.key]}
                                                        updateFunction={updateDataSet}
                                                    />
                                                </View>
                                            )}
                                            keyExtractor={(item) =>item.key}
                                            scrollEnabled={false}
                                        />
                                    </Card>
                                </View>
                            )}
                            keyExtractor={(item) => item.topic.number}
                            scrollEnabled={false}
                        />
                    </View>
                </ScrollView>
                <View style={{ marginTop: 20 }}>
                    <Button title="Save" onPress={saveData} />
                </View>
            </View>
        </LinearGradient>
    );
}
