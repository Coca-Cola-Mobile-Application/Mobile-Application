import React from "react";
import { globalStyles } from "../styles/global";
import {topicDetails} from "../data/formtopics";
import Card from '../components/card';
import { StyleSheet, View,ScrollView,FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Topic from "../components/topic";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle"

const card_1 =[
    {
        key:'1',
        inputTitle :'Date',
        placeHolder:'select date',
        mode:'date'
    },
    {
        key:'2',
        inputTitle :'Time Start',
        placeHolder:'select start time',
        mode:'time'
    },
    {
        key:'3',
        inputTitle :'Time End',
        placeHolder:'select end  time',
        mode:'time'
    }
]
const card_2 =[
    {
        key:'3',
        inputTitle:'Name',
        placeHolder:'enter name',
    },
    {
        key:'4',
        inputTitle:'Dept',
        placeHolder:'enter department name',
    }
]
const card_3 =[
    {
        key:'5',
        inputTitle:'Name',
        placeHolder:'enter name',
    },
    {
        key:'6',
        inputTitle:'Dept/Co',
        placeHolder:'enter department name',
    }
]
const card_4 =[
    {
        key:'7',
        placeHolder:'enter cross ref',
    }
]
const card_5 =[
    {
        key:'8',
        placeHolder:'enter location',
    }
]
const card_6 =[
    {
        key:'9',
        placeHolder:'enter description',
    }
]



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
                            <ScrollView>
                                <FlatList
                                    data={card_1}
                                    renderItem={({item})=>{
                                        return(
                                            <View>
                                                <InputTitle>{item.inputTitle}</InputTitle>
                                                <InputComponent pickerDisplay={true} editable={false} keyBoardType="default" placeHolder={item.placeHolder} mode={item.mode}/>
                                            </View>
                                        )
                                    }}
                                />
                            </ScrollView>
                        </Card>
                        <Topic topicDetail={topicDetails[1]}/>
                        <Card>
                            <ScrollView>
                                <FlatList
                                    data={card_2}
                                    renderItem={({item})=>{
                                        return(
                                            <View>
                                                <InputTitle>{item.inputTitle}</InputTitle>
                                                <InputComponent pickerDisplay={false} editable={true} keyBoardType="default" placeHolder={item.placeHolder}/>
                                            </View>
                                        )
                                    }}
                                />
                            </ScrollView>
                        </Card>
                        <Topic topicDetail={topicDetails[2]}/>
                        <Card>
                            <ScrollView>
                                <FlatList
                                    data={card_3}
                                    renderItem={({item})=>{
                                        return(
                                            <View>
                                                <InputTitle>{item.inputTitle}</InputTitle>
                                                <InputComponent pickerDisplay={false} editable={true} keyBoardType="default" placeHolder={item.placeHolder}/>
                                            </View>
                                        )
                                    }}
                                />
                            </ScrollView>
                        </Card>
                        <Topic topicDetail={topicDetails[3]}/>
                        <Card>
                            <ScrollView>
                                <FlatList
                                    data={card_4}
                                    renderItem={({item})=>{
                                        return(
                                            <View>
                                                <InputComponent pickerDisplay={false} editable={true} keyBoardType="default" placeHolder={item.placeHolder}/>
                                            </View>
                                        )
                                    }}
                                />
                            </ScrollView>
                        </Card>
                        <Topic topicDetail={topicDetails[4]}/>
                        <Card>
                            <ScrollView>
                                <FlatList
                                    data={card_5}
                                    renderItem={({item})=>{
                                        return(
                                            <View>
                                                <InputComponent pickerDisplay={false} editable={true} keyBoardType="default" placeHolder={item.placeHolder}/>
                                            </View>
                                        )
                                    }}
                                />
                            </ScrollView>
                        </Card>
                        <Topic topicDetail={topicDetails[5]}/>
                        <Card>
                            <ScrollView>
                                <FlatList
                                    data={card_6}
                                    renderItem={({item})=>{
                                        return(
                                            <View>
                                                <InputComponent pickerDisplay={false} editable={true} keyBoardType="default" placeHolder={item.placeHolder}/>
                                            </View>
                                        )
                                    }}
                                />
                            </ScrollView>
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
