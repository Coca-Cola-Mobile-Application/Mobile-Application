import React from "react";
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {StyleSheet, View, Text, TouchableOpacity ,Pressable,Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from "../styles/global";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Topic from "../components/topic";
import SubTopic from "../components/subTopic";
import { topicDetails } from '../data/formtopics';
import Card from '../components/card';
import { PPEdata ,tempData} from "../data/formatdata5";
import CheckBoxContainer from '../components/checkBox'; 

export default function PageFive({navigation}) {
 
  const[listOpen,setListOpen]=useState({
    first:false,
    second:false,
    third:false,
    fourth:false,
    fifth:false
  });  

  const listOpenHandler = (getUpdate) => {
    setListOpen((prevState) => ({
      ...prevState,
      [getUpdate]: !prevState[getUpdate],
    }));
  };

  const [dataSet,setDataSet] =useState({
    p6PrecautionGeneral:[],
    p6PrecautionHotWork:[],
    p6PrecautionElectricalWork:[],
    p6PrecautionWorkAtHeight:[], 
    p6PrecautionConfinedSpace:[]
  });

  const [changed,setChanged]=useState({
    p6PrecautionGeneral:false,
    p6PrecautionHotWork:false,
    p6PrecautionElectricalWork:false,
    p6PrecautionWorkAtHeight:false, 
    p6PrecautionConfinedSpace:false
  });

  const fetchData = async () => {
    try {
        setDataSet(tempData);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
    // try {
    //   const objectID = route.params.objectID; // Get the objectID from route params
    //   const response = await axios.get(`http://your-backend-url/api/workpermits/${objectID}`);
      
    //   // Update the dataset with the response data
    //   setDataSet(response.data);

    //   // Show a success alert
    //   Alert.alert('Data fetched successfully');
    // } catch (error) {
    //     console.error("Error fetching data: ", error);
    //     Alert.alert('Error fetching data');
    // }
  };

  useFocusEffect(
      React.useCallback(() => {
          // Re-fetch data when the screen comes into focus
          fetchData();
      }, [])
  );

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

  const subtopicname="Requested by issuer";
  return (
    <LinearGradient
      colors={['#4751A0', '#4686A0']}
      start={{x:0, y:0}}
      end={{x:1, y:0}}
      style={globalStyles.container}
    >
      <View style={globalStyles.insideContainer}>
        <ScrollView>
          <View style={globalStyles.bodyView}>
            <Topic topicDetail={topicDetails[10]} />
            <FlatList
              data={PPEdata}
              renderItem={({item}) => (
                <Card>
                    <Pressable onPress={() => listOpenHandler(item.checkOpen)}>
                        <SubTopic topicDetail={item.topic} />
                    </Pressable>
                  {listOpen[item.checkOpen] && (<FlatList
                    data={item.DropSelection}
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
                  />)}
                </Card>
              )}
              keyExtractor={(item, index) => index.toString()}
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

const styles = StyleSheet.create({});
