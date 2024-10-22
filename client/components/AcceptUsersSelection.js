import React from "react";
import { useEffect , useState } from "react";
import { globalStyles } from "../styles/global";
import Card from '../components/card';
import FilterCard from '../components/FilterPagesCard';
import { StyleSheet, View, FlatList ,ScrollView,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CenterTopicOnly from "../components/centerTopicOnly";
import FilterInputComponent from "../components/filterInputComponent";
import FilterResultCard from "../components/filterResultList";
import InputComponent from "../components/textInput";
import InputTitle from "../components/inpuTitle";
import MoodleBoxTitle from "../components/moodleBoxTitle"
import {topicDetails} from "../data/formtopics";
import {newPermitDetails} from "../data/formdataNewPermit";
import ShowSelectPersonBox from "../components/showSelectPersonBox"
import axios from 'axios';
                                                               
export default function AcceptUsersSelection({ navigation ,route}) {
    const [authUserListIDS, setAuthUserListIDS] = useState([]);
    const[userList,setUserList]=useState([]);
    const [filteredUserList, setFilteredUserList] = useState([]);
    const[showUserList,setShowUserList]=useState([]);
    const[searchChangeValue,setSearchChangeValue]=useState({
        Fname:"",
        Lname:"",
        DepName:""
    });//in

    const findMatchingObjects = (tempUserList, objectIDArray) => {
        const objectIDSet = new Set(objectIDArray); 
        return tempUserList.filter(user => objectIDSet.has(user.objectID)); 
    };

    useEffect(() => {
        setAuthUserListIDS(route.params.acceptIDList);
        setUserList(route.params.useList); 
    }, []); 

    useEffect(() => {
        const matchingObjects = findMatchingObjects(userList, authUserListIDS);
        setShowUserList(matchingObjects);
        filterUsers();
    }, [userList, authUserListIDS]);

    const updateFunction = (id, value) => {
        setSearchChangeValue((prevDataSet) => ({
            ...prevDataSet,
            [id]: value
        }));
    };    

    useEffect(() => {
        filterUsers();
    }, [searchChangeValue]);

    const filterUsers = () => {
        // Check if all search fields are empty
        const noSearchValues = !searchChangeValue.Fname && !searchChangeValue.Lname && !searchChangeValue.DepName;
    
        if (noSearchValues) {
            // If all search fields are empty, show the entire userList
            setFilteredUserList(userList);
            return;
        }
    
        // Filter the user list based on entered search values
        const filtered = userList.filter(user => {
            const matchesFirstName = searchChangeValue.Fname
                ? user.firstName.toLowerCase().startsWith(searchChangeValue.Fname.toLowerCase())
                : true; // If first name is not entered, ignore it
    
            const matchesLastName = searchChangeValue.Lname
                ? user.lastName.toLowerCase().startsWith(searchChangeValue.Lname.toLowerCase())
                : true; // If last name is not entered, ignore it
    
            const matchesDepartment = searchChangeValue.DepName
                ? user.DepartmentName.toLowerCase().startsWith(searchChangeValue.DepName.toLowerCase())
                : true; // If department name is not entered, ignore it
    
            // Return users that match all non-empty fields
            return matchesFirstName && matchesLastName && matchesDepartment;
        });
    
        setFilteredUserList(filtered);
    };

    const addNewID = (newID) => {
        setAuthUserListIDS((prevIDs) => {
            if (!prevIDs.includes(newID)) {
                return [...prevIDs, newID];
            }
            return prevIDs;
        });
    };

    const removeID = (idToRemove) => {
        setAuthUserListIDS((prevIDs) => {
            if (prevIDs.includes(idToRemove)) {
                return prevIDs.filter(id => id !== idToRemove); 
            }
            return prevIDs; 
        });
    };
    
    
    const confirmSelection = () => {
        navigation.navigate('Create Work Permit', { authUserListIDS });
    };
 
    return (
        <LinearGradient
            colors={['#4751A0', '#4686A0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={globalStyles.container}
        > 
            <View style={style.topRowList}>
                <FlatList
                    data={showUserList}
                    keyExtractor={(item) => item.objectID}
                    renderItem={({ item }) => (
                        <FilterCard>
                            <ShowSelectPersonBox detailObject={item} updateSelectPersonID={removeID} confirmSelection={confirmSelection} number={2}/>
                        </FilterCard>
                    )}
                    scrollEnabled={true}
                    horizontal={true}
                />
                {showUserList.length==0 && (
                    <FilterCard>
                        <ShowSelectPersonBox detailObject={{}} updateSelectPersonID={removeID} confirmSelection={confirmSelection} number={2}/>
                    </FilterCard>
                )}
            </View>
            <View style={style.insideContainer}>
                <ScrollView>
                    <View style={globalStyles.bodyView}>
                       <FilterCard>
                            <FilterInputComponent placeHolder="Enter First Name" id="Fname" value={searchChangeValue.Fname} updateFunction={updateFunction}/>
                            <FilterInputComponent placeHolder="Enter Last Name" id="Lname" value={searchChangeValue.Lname} updateFunction={updateFunction}/>
                            <FilterInputComponent placeHolder="Enter Department Name" id="DepName" value={searchChangeValue.DepName} updateFunction={updateFunction}/>
                       </FilterCard>
                       <FilterCard>
                            <FlatList
                                data={filteredUserList}
                                keyExtractor={(item) => item.objectID}
                                renderItem={({ item }) => (
                                    <FilterResultCard detailObject={item} updateSelectPersonID={addNewID} />
                                )}
                                scrollEnabled={false}
                            />
                       </FilterCard>
                    </View> 
                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    insideContainer: {
        width: '100%',
        height: '72%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        overflow: 'hidden',
        paddingHorizontal:20,
        paddingVertical:30,
    },
    topRowList:{
        flexDirection:'row',
    }
});
