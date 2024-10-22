import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Topic from "../components/topic";
import { ScrollView } from "react-native-gesture-handler";
import { topicDetails } from '../data/formtopics';
import Card from '../components/card';
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";

export default function PageNine({ navigation }) {
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
                        <Topic topicDetail={topicDetails[11]} />
                        <Card>
                            <View style={styles.notice}>
                                <Text style={styles.noticeText}>
                                   Names of employees on the job & their NIC after understanding the hazard of the task/Induction
                                </Text>
                            </View>
                        </Card>
                        <Card>
                        
                        </Card>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
        
    );
}

const styles = StyleSheet.create({
    notice: {
        alignItems: 'center',
    },
    noticeText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red'
    }
});

//<Button title="Next" onPress={()=> navigation.navigate('PageTen')} />