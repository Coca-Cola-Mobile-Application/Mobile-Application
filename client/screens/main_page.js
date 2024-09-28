import React from "react";
import { useEffect , useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { globalStyles } from "../styles/global";
import Card from '../components/card';
import { StyleSheet, View, FlatList ,ScrollView,TouchableOpacity,Pressable,Button,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CenterTopicOnly from "../components/centerTopicOnly";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import MoodleBoxTitle from "../components/moodleBoxTitle"
import {topicDetails} from "../data/formtopics";
import {newPermitDetails} from "../data/formdataNewPermit";
import {tempUserList} from "../data/fillPersonSelectData";
import axios from 'axios';
                                                               
export default function CreateWorkPermitPage({ navigation,route }) {
    const[newDetails,setNewDetails]=useState({
        permitName:"",
        fillPermissionID:"",
        acceptPermissionIDs:[]
    });
    const[useList,setUserList]=useState([]);
    const[selectedDepList,setSelectedDepList]=useState([]);

    const updateDataSet = (id, value) => {
        if(id=="acceptPermissionIDs"){
            setNewDetails((prevDataSet) => ({
                ...prevDataSet,
                acceptPermissionIDs: value // Directly assign the new array
            }));
        }
        else{
            setNewDetails((prevDataSet) =>({
                ...prevDataSet,
                [id]: value
            }));
        }
    };      
 
    useFocusEffect(
        React.useCallback(() => {
          if (route.params?.selectedPersonID !== undefined) {
            updateDataSet("fillPermissionID", route.params.selectedPersonID);
          }
        }, [route.params?.selectedPersonID])
    );

    useFocusEffect(
        React.useCallback(() => {
            if (route.params?.authUserListIDS) {
                 updateDataSet("acceptPermissionIDs", route.params.authUserListIDS);
            }
        }, [route.params?.authUserListIDS])
    );

    useFocusEffect(
        React.useCallback(() => {
            if (route.params?.selectedDepList) {
                setSelectedDepList(route.params.selectedDepList);
            }
        }, [route.params?.selectedDepList])
    );
    
    const navigateToPage = (pageName) => {
        if (pageName == "Select Filling Person") {
            navigation.navigate("Select Filling Person", {
                currentFillPermissionID: newDetails.fillPermissionID ,
                useList:useList
            });
        }else if(pageName == "Select Authorized Users"){
            navigation.navigate("Select Authorized Users", {
                acceptIDList: newDetails.acceptPermissionIDs ,
                useList:useList
            });
        }else {
            navigation.navigate(pageName,{
                acceptIDList: newDetails.acceptPermissionIDs ,
                useList:useList,
                selectedDepList:selectedDepList
            });
        }
    };

    //async funtion add later
    const fetchUserData =() => {
        try {
            //const response = await axios.get('http://server-url/api/formdata');
            //const formData = response.data;
            console.log(tempUserList);
            setUserList(tempUserList);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(()=>{
        fetchUserData();
    },[]);

    const confirmSelection = () => {
        navigation.navigate('HomePage');
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
                        <CenterTopicOnly topicDetail={topicDetails[12]}/>
                        <Card>
                            <InputTitle>{newPermitDetails[0].inputTitle}</InputTitle>
                            <InputComponent
                                pickerDisplay={newPermitDetails[0].pickerDisplay}
                                editable={newPermitDetails[0].editable}
                                keyBoardType="default"
                                placeHolder={newPermitDetails[0].placeHolder}
                                id={newPermitDetails[0].key}
                                updateFunction={updateDataSet}     
                                value={newDetails.permitName}
                            />
                            <TouchableOpacity onPress={()=>navigateToPage("Select Filling Person")}>
                                <MoodleBoxTitle topicDetail="Select Fill Person" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigateToPage("Select Authorized Departments")}>
                                <MoodleBoxTitle topicDetail="Select Authorized Departments" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigateToPage("Select Authorized Users")}>
                                <MoodleBoxTitle topicDetail="Select Authorized Users" />
                            </TouchableOpacity>
                        </Card>
                        <TouchableOpacity onPress={confirmSelection} style={style.confirmButton}>
                            <LinearGradient
                                colors={['#4751A0', '#4686A0']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={style.buttonGradient}
                            >
                                <Text style={style.buttonText}>Create</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View> 
                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    confirmButton: {
        marginTop: 5,
        alignItems: 'center',
    },
    buttonGradient: {
        width: '80%',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    }  
});
