import React from "react";
import { globalStyles } from "../styles/global";
import {topicDetails} from "../data/formtopics";
import Card from '../components/card';
import { StyleSheet, View, Text, Button,ScrollView,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Topic from "../components/topic";
import InputComponent from "../components/textInput";


const card_1 =['Date' ,'Time Start','Time End'];


export default function PageOne({ navigation }) {

    return (
        <LinearGradient
            colors={['#4751A0', '#4686A0']}
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={globalStyles.container}
        >
            <View style={globalStyles.insideContainer}>
                <ScrollView>
                    <View style={globalStyles.bodyView}>
                        <Topic topicDetail={topicDetails[0]}/>
                        <Card>
                            <Text>Test1</Text> 
                            <InputComponent pickerDisplay={true} editable={false} keyBoardType="default" placeHolder="select date" mode="date"/>
                        </Card>
                        <Topic topicDetail={topicDetails[1]}/>
                        <Card>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                        </Card>
                        <Topic topicDetail={topicDetails[2]}/>
                        <Card>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                        </Card>
                        <Topic topicDetail={topicDetails[3]}/>
                        <Card>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                        </Card>
                        <Topic topicDetail={topicDetails[4]}/>
                        <Card>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                        </Card>
                        <Topic topicDetail={topicDetails[5]}/>
                        <Card>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'flex-end',
    // },
});
