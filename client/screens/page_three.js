import React from "react";
import { useEffect , useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {StyleSheet,View,Text, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from "../styles/global";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Topic from "../components/topic";
import SubTopic from "../components/subTopic";
import { topicDetails } from '../data/formtopics';
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import Card from '../components/card';
import{isolationData ,tempData} from "../data/formdata3";
import CheckBoxContainer from '../components/checkBox'; 

 
export default function PageThree({navigation}) {
  const [dataSet,setDataSet]=useState({
    p3DriveOrPanelInvolved:"",
    p3motorIsolation:[],
    p3motorCertifiedBy:"",
    p3MotorCrDate:new Date(),
    p3motorCrTime:new Date(),
    p3ServicesIsolated:"",
    p3HowServiceIsolated:[],
    p3serviceCertifiedBy:"",
    p3serviceCrDate:new Date(),
    p3serviceCrTime:new Date(),
    p4EquipmentInvolved:"",
    p4ProcessIsolated:[],
    p4ProcessCertifiedBy:"",
    p4ProcessCrDate:new Date(),
    p4ProcessCrTime:new Date(),
  });
  const [changed,setChanged]=useState({
    p3DriveOrPanelInvolved:false,
    p3motorIsolation:false,
    p3motorCertifiedBy:false,
    p3MotorCrDate:false,
    p3motorCrTime:false,
    p3ServicesIsolated:false,
    p3HowServiceIsolated:false,
    p3serviceCertifiedBy:false,
    p3serviceCrDate:false,
    p3serviceCrTime:false,
    p4EquipmentInvolved:false,
    p4ProcessIsolated:false,
    p4ProcessCertifiedBy:false,
    p4ProcessCrDate:false,
    p4ProcessCrTime:false,
  });

  const fetchData = async () => {
    try {
        setDataSet(tempData);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
        // try {
        //   // API call to fetch data for a specific work permit using objectID
        //   const response = await axios.get(`http://your-backend-url/api/workpermits/${objectID}`);
          
        //   // Assuming the response contains the data you need
        //   setDataSet(response.data);
        // } catch (error) {
        //     console.error("Error fetching data: ", error);
        // }
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

  const updatearray = (optionTitle,value,valueID) => {
    let newArray=[...dataSet[valueID]];
      if(value){
        newArray.push(optionTitle);
      }else{
        newArray = newArray.filter(item => item !== optionTitle);
      }
    setDataSet((prevDataSet) => ({
        ...prevDataSet,
        [valueID]: newArray
    }));

    setChanged((prevChanged) => ({
        ...prevChanged,
        [valueID]: true
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

  //const subtopicname="Requested by issuer";
    return(
      <LinearGradient
        colors={['#4751A0', '#4686A0']}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
        style={globalStyles.container}
      >
        <View style={globalStyles.insideContainer}>
          <ScrollView>
              <View style={globalStyles.bodyView}>
                <Topic topicDetail={topicDetails[8]}/>
                {/* <Card>
                  <InputTitle>{subtopicname}</InputTitle>
                  <InputComponent
                      pickerDisplay={false}
                      editable={true}
                      keyBoardType="default"
                  />
                </Card> */}
                <FlatList
                          data={isolationData}
                          scrollEnabled={false}
                          renderItem={({item})=>(
                            <Card>
                                <SubTopic  topicDetail={item.topic}/>
                                <InputTitle>{item.insideOne}</InputTitle>
                                <InputComponent
                                    pickerDisplay={false}
                                    editable={true}
                                    keyBoardType="default"
                                    updateFunction={updateDataSet}
                                    id={item.insideOneKey}
                                    value={dataSet[item.insideOneKey]}
                                />
                                {/* <InputTitle>{item.insideTwo}</InputTitle>
                                <InputComponent
                                    pickerDisplay={false}
                                    editable={true}
                                    keyBoardType="default"
                                /> */}
                                <FlatList
                                    data={item.AddTickes}
                                    renderItem={({ item }) => (
                                      <CheckBoxContainer
                                          optionTitle={item.attribute}
                                          value={dataSet[item.valueID].includes(item.attribute) ? true : false}
                                          id={item.key}
                                          updateFunction={updatearray}
                                          number={1}
                                          valueID={item.valueID}
                                      />
                                    )}
                                    scrollEnabled={false}
                                />
                                <InputTitle>{item.certify}</InputTitle>
                                <InputComponent
                                    pickerDisplay={false}
                                    editable={true}
                                    keyBoardType="default"
                                    updateFunction={updateDataSet}
                                    id={item.certifyByKey}
                                    value={dataSet[item.certifyByKey]}
                                />
                                <InputTitle>{item.timeStampOne}</InputTitle>
                                <InputComponent
                                    pickerDisplay={true}
                                    editable={false}
                                    keyBoardType="default"
                                    mode="date"
                                    placeHolder="select date"
                                    updateFunction={updateDataSet}
                                    id={item.timeStampOneKey}
                                    value={dataSet[item.timeStampOneKey]}
                                />
                                <InputTitle>{item.timeStampTwo}</InputTitle>
                                <InputComponent
                                    pickerDisplay={true}
                                    editable={false}
                                    keyBoardType="default"
                                    mode="time"
                                    placeHolder="select Time"
                                    updateFunction={updateDataSet}
                                    id={item.timeStampTwoKey}
                                    value={dataSet[item.timeStampTwoKey]}
                                />
                            </Card>
                          )}
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

const styles = StyleSheet.create({
    
  });

// <Button title="Next" onPress={()=> navigation.navigate('PageFour')} />