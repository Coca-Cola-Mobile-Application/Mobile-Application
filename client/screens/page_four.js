import React from "react";
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from "../styles/global";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Topic from "../components/topic";
import SubTopic from "../components/subTopic";
import { topicDetails } from '../data/formtopics';
import Card from '../components/card';
import { PPEdata } from "../data/formdata4";
import CheckBoxContainer from '../components/checkBox'; 

export default function PageFour({navigation}) {

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
            <Topic topicDetail={topicDetails[9]} />
            <FlatList
              data={PPEdata}
              renderItem={({item}) => (
                <Card>
                  <SubTopic topicDetail={item.topic} />
                  <FlatList
                    data={item.DropSelection}
                    renderItem={({ item }) => (
                      <CheckBoxContainer
                        optionTitle={item.attribute}
                      />
                    )}
                    scrollEnabled={false}
                  />
                </Card>
              )}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
