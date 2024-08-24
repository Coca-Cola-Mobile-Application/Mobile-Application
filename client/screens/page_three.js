import React from "react";
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
import{isolationData} from "../data/formdata3";
import CheckBoxContainer from '../components/checkBox'; 


export default function PageThree({navigation}) {

  const subtopicname="Requested by issuer";
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
                <Card>
                  <InputTitle>{subtopicname}</InputTitle>
                  <InputComponent
                      pickerDisplay={false}
                      editable={true}
                      keyBoardType="default"
                  />
                </Card>
                <View style={globalStyles.insideBodyView}>
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
                                />
                                <InputTitle>{item.insideTwo}</InputTitle>
                                <InputComponent
                                    pickerDisplay={false}
                                    editable={true}
                                    keyBoardType="default"
                                />
                                <FlatList
                                    data={item.AddTickes}
                                    renderItem={({ item }) => (
                                      <CheckBoxContainer
                                          optionTitle={item.attribute}
                                      />
                                    )}
                                    scrollEnabled={false}
                                />
                                <InputTitle>{item.certify}</InputTitle>
                                <InputComponent
                                    pickerDisplay={false}
                                    editable={true}
                                    keyBoardType="default"
                                />
                                <InputTitle>{item.timeStamp}</InputTitle>
                                <InputComponent
                                    pickerDisplay={true}
                                    editable={false}
                                    keyBoardType="default"
                                    mode="date"
                                    placeHolder="select date"
                                />
                            </Card>
                          )}
                    />
                </View>
              </View>
          </ScrollView>
        </View>
      </LinearGradient>
    );
}

const styles = StyleSheet.create({
    
  });

// <Button title="Next" onPress={()=> navigation.navigate('PageFour')} />