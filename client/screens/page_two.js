import React from "react";
import { useEffect , useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, ScrollView, FlatList,Button,Alert } from 'react-native';
import { topicDetails } from '../data/formtopics';
import { optionSet ,tempData} from '../data/formdata2';
import Topic from "../components/topic";
import Card from '../components/card';
import CheckBoxContainer from '../components/checkBox';
import axios from 'axios'; 
   
export default function PageTwo({ navigation }) {
    const [isChecked,setChecked] =useState({
        corrosive:false,
        flammables:false,
        explosives:false,
        compressedGas:false, 
        hotMaterial:false,
        steam:false,
        fumes:false,
        loneWork:false,
        movingMachine:false,
        autoStartEquipment:false,
        traffic:false,
        confinedSpace:false,
        lackOxygen:false,
        heightWork:false,
        unsafeAccess:false,
        fragileRoof:false,
        liveElectrical:false,
        overheadDanger:false,
        buriedCables:false,
        buriedPipelines:false,
        highLowPressure:false,
        highLowTemperature:false,
        weatherCondition:false,
    });

    const [changed,setChanged]=useState({
        corrosive:false,
        flammables:false,
        explosives:false,
        compressedGas:false,
        hotMaterial:false,
        steam:false,
        fumes:false,
        loneWork:false,
        movingMachine:false,
        autoStartEquipment:false,
        traffic:false,
        confinedSpace:false,
        lackOxygen:false,
        heightWork:false,
        unsafeAccess:false,
        fragileRoof:false,
        liveElectrical:false,
        overheadDanger:false,
        buriedCables:false,
        buriedPipelines:false,
        highLowPressure:false,
        highLowTemperature:false,
        weatherCondition:false,
    });

    const fetchData = async () => {
        try {
            // const objectID = route.params.objectID; // Assuming objectID is passed via route params
            // const response = await axios.get(`http://your-backend-url/api/workpermits/${objectID}`);
            // const { p2HazardsIdentified } = response.data; // Extract hazards array
    
            // // Update the isChecked state based on the hazards identified
            // const updatedChecked = { ...isChecked }; // Copy the current state
            // p2HazardsIdentified.forEach(hazard => {
            //     if (updatedChecked.hasOwnProperty(hazard)) {
            //         updatedChecked[hazard] = true; // Set to true for identified hazards
            //     }
            // });
            console.log("inside");
            // setChecked(updatedChecked); // Set the new checked state
            setChecked({
                corrosive:true,
                flammables:true,
                explosives:true,
                highLowPressure:true,
                highLowTemperature:true,
                weatherCondition:true,
            });
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };
    

    useFocusEffect(
        React.useCallback(() => {
            // Re-fetch data when the screen comes into focus
            fetchData();
        }, [])
    );

    const updateDataSet = (id, value) => {
        setChecked((prevDataSet) => ({
            ...prevDataSet,
            [id]: value
        }));
    
        setChanged((prevChanged) => ({
            ...prevChanged,
            [id]: true
        }));
    };   
    
    const saveData = async () => {
        // Filter changed data
        const changedFields = {};
        Object.keys(changed).forEach((key) => {
            if (changed[key]) {
                changedFields[key] = isChecked[key];
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
                                        value={isChecked[item.key]}
                                        id={item.key}
                                        updateFunction={updateDataSet}
                                    />
                                )}
                                keyExtractor={(item) => item.key}
                                scrollEnabled={false}
                            />
                        </Card>
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
    notice: {
        alignItems: 'center',
    },
    noticeText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red'
    }
});
