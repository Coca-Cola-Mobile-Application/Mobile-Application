import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { topicDetails } from '../data/formtopics';
import { optionSet } from '../data/formdata2';
import Topic from "../components/topic";
import Card from '../components/card';
import CheckBoxContainer from '../components/checkBox';  // Corrected import

export default function PageTwo({ navigation }) {
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
                        <Topic topicDetail={topicDetails[6]} />
                        <Card>
                            <View style={styles.notice}>
                                <Text style={styles.noticeText}>
                                    Jointly By Issuer And Hand Over Party !
                                </Text>
                            </View>
                        </Card>
                        <Card>
                            <FlatList
                                data={optionSet}
                                renderItem={({ item }) => (
                                    <CheckBoxContainer  // Corrected component usage
                                        optionTitle={item.optionName}
                                    />
                                )}
                                scrollEnabled={false}
                            />
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
