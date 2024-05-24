import React from "react";
import { globalStyles } from "../styles/global";
import {topicDetails} from "../data/formtopics";
import Card from '../components/card';
import { StyleSheet, View, Text, Button,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Topic from "../components/topic";
import DateTimePicker from '@react-native-community/datetimepicker';


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
                    <View style={styles.bodyView}>
                        <Topic topicDetail={topicDetails[0]}/>
                        <Card>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
                            <Text>Test1</Text>
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
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    cardDecoration:{
        width:'96%',
        borderRadius:30,
        elevation:10,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        paddingHorizontal:15,
        paddingVertical:15,
        marginBottom:'15%',
    },
    bodyView:{
        flex:1,
        width:'100%',
        alignItems:'center'
    }
});
