import React from "react";
import { globalStyles } from "../styles/global";
import Card from '../components/card';
import { StyleSheet, View, FlatList ,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Topic from "../components/topic";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import {sections} from "../data/formtopics";

 
export default function PageOne({ navigation }) {
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
            </View>
        </LinearGradient>
    );
}
