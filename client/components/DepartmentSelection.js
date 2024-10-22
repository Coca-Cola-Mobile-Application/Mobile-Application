import React from "react";
import { useEffect , useState } from "react";
import { globalStyles } from "../styles/global";
import Card from '../components/card';
import FilterCard from '../components/FilterPagesCard';
import { StyleSheet, View, FlatList ,ScrollView,TouchableOpacity,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CenterTopicOnly from "../components/centerTopicOnly";
import FilterInputComponent from "../components/filterInputComponent";
import FilterResultCard from "../components/filterResultList";
import DepDisplayCart from "../components/depDisplayCart";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import MoodleBoxTitle from "../components/moodleBoxTitle"
import {topicDetails} from "../data/formtopics";
import {newPermitDetails} from "../data/formdataNewPermit";
import ShowSelectPersonBox from "../components/showSelectPersonBox"

import axios from 'axios';
                                                                 
export default function DepartmentSelection({ navigation ,route }) {
    const [authUserListIDS, setAuthUserListIDS] = useState([]);//come
    const[userList,setUserList]=useState([]);//come
    const [depCategoryList, setDepCategoryList] = useState({});//create
    const[depList,SetDepList]=useState([]);//create
    const[selectedDepList,setSelectedDepLsit]=useState([]);//come

    const groupByDepartment = (users) => {
        const result = users.reduce(
          (acc, user) => {
            const department = user.DepartmentName;
      
            if (!acc.departmentGroups[department]) {
              acc.departmentGroups[department] = [];
              acc.uniqueDepartments.push(department);
            }
      
            acc.departmentGroups[department].push(user.objectID);
      
            return acc;
          },
          { departmentGroups: {}, uniqueDepartments: [] }
        );
      
        return result;
    };
      
    useEffect(() => {
        setAuthUserListIDS(route.params.acceptIDList);
        setUserList(route.params.useList); 
        setSelectedDepLsit(route.params.selectedDepList);
    }, []); 

    useEffect(() => {
        const { departmentGroups, uniqueDepartments } = groupByDepartment(userList);
        setDepCategoryList(departmentGroups);
        SetDepList(uniqueDepartments);
    }, [userList]); 

    const addDepartmentToSelectedList = (departmentName) => {
        setSelectedDepLsit((prevSelectedDepList) => {
            if (!prevSelectedDepList.includes(departmentName)) {
                return [...prevSelectedDepList, departmentName];
            }
            return prevSelectedDepList;
        });
    };
    
    const removeDepartmentFromSelectedList = (departmentName) => {
        setSelectedDepLsit((prevSelectedDepList) => 
            prevSelectedDepList.filter(dep => dep !== departmentName)
        );
    };

    const addUsersToAuthList = (departmentName) => {
        const departmentObjectIDs = depCategoryList[departmentName];
    
        if (departmentObjectIDs) {
            setAuthUserListIDS((prevAuthUserListIDS) => [
                ...prevAuthUserListIDS,
                ...departmentObjectIDs.filter(id => !prevAuthUserListIDS.includes(id)),
            ]);
        }

        addDepartmentToSelectedList(departmentName);
    };
    
    const deleteUsersFromAuthList = (departmentName) => {
        const departmentObjectIDs = depCategoryList[departmentName];
    
        if (departmentObjectIDs) {
            setAuthUserListIDS((prevAuthUserListIDS) =>
                prevAuthUserListIDS.filter(id => !departmentObjectIDs.includes(id))
            );
        }

        removeDepartmentFromSelectedList(departmentName);
    };    

    const confirmSelection = () => {
        navigation.navigate('Create Work Permit', { authUserListIDS,selectedDepList });
    };

    return (
        <LinearGradient
            colors={['#4751A0', '#4686A0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.container}
        > 
            <View style={style.insideContainer}>
                <ScrollView>
                    <View style={globalStyles.bodyView}>
                       <FilterCard>
                            <FlatList
                                data={depList}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <DepDisplayCart detail={item} addUsersToAuthList={addUsersToAuthList} deleteUsersFromAuthList={deleteUsersFromAuthList} selectedDepList={selectedDepList} />
                                )}
                                scrollEnabled={false}
                            />
                       </FilterCard>
                       <TouchableOpacity onPress={confirmSelection} style={style.confirmButton}>
                            <LinearGradient
                                colors={['#4751A0', '#4686A0']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={style.buttonGradient}
                            >
                                <Text style={style.buttonText}>Confirm Selection</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View> 
                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    insideContainer: {
        width: '100%',
        height: '90%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        overflow: 'hidden',
        paddingHorizontal:20,
        paddingVertical:30,
    },
    topRowList:{
        flexDirection:'row',
    },
    confirmButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    buttonGradient: {
        width: '80%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
