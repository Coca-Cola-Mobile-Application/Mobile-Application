import React, { useState } from 'react';
import {ScrollView, View, TextInput, Button, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons from react-native-vector-icons

export default function viewAllPermit({ navigation }) {
  const [searchText, setSearchText] = useState('');

  
  const data = [
    { id: 1, date: '2022-01-01', status: 'Approved' },
    { id: 2, date: '2022-01-02', status: 'Pending' },
    { id: 3, date: '2022-01-03', status: 'Rejected' },
    { id: 4, date: '2022-01-03', status: 'Rejected' },
    { id: 5, date: '2022-01-03', status: 'Rejected' },
    { id: 6, date: '2022-01-03', status: 'Rejected' },
    { id: 7, date: '2022-01-03', status: 'Rejected' },
    { id: 8, date: '2022-01-03', status: 'Rejected' },
    { id: 9, date: '2022-01-03', status: 'Rejected' },
    { id: 10, date: '2022-01-03', status: 'Rejected' },
    { id: 11, date: '2022-01-03', status: 'Rejected' },
    { id: 12, date: '2022-01-03', status: 'Rejected' },
    { id: 11, date: '2022-01-03', status: 'Rejected' },
    { id: 12, date: '2022-01-03', status: 'Rejected' },
    // Add more data as needed

  ]

  const handleSearch = () => {
    // Perform search action with the current searchText
    console.log('Searching for:', searchText);
    alert(searchText)
  };

  const handleNavigateIndividualPermit = async(id)=>{
    try {
      alert(id)
      navigation.navigate('PermitView', { id: id})
      console.log(id);
    
    } catch (error) {
       alert(error)
    }
  }

  return (
    <ScrollView style={styles.main_section}>
      <p style={styles.permit_list_p}>All Permit List</p>
      <View style={styles.search_section}>
      <TextInput
        style={styles.search_box}
        placeholder="Search Date..."
        value={searchText}
        onChangeText={text => setSearchText(text)} // Updates state on text input
      />
      <Icon name="search" size={30} style={styles.search_icon} onPress={handleSearch} />
    </View>
     
     <View style={styles.permit_list}>
       {data.map((item, index) =>(
        <View style={styles.permit_list_card}>
        <Text>{item.date}</Text>
        <Icon name="arrow-right" size={30} style={styles.icon} onPress={()=>handleNavigateIndividualPermit(item.id)} />
        </View>
       ))}
     </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  main_section:{
    // backgroundColor:"#fff",
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  search_section: {
    flexDirection: 'row',  // Places input and button in a row
    alignItems: 'center',  // Aligns items vertically centered
    justifyContent: 'space-between', // Ensures equal space between items
    // padding: 10,
  },
  search_box: {
    flex: 1,  // Takes up the available space
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    marginLeft: 10,  
    borderRadius:10,
    width:120
  },
  search_icon:{
    borderRadius:20,
    marginLeft:-50,
    width:60,
    cursor:"pointer"
  },
  permit_list:{
     marginTop:30,
  },
  permit_list_p:{
    // backgroundColor:"#000"
    color:"#000",
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    marginTop:20,
    fontFamily: "Roboto, sans-serif",  // updated to a professional font
  },
  permit_list_card: {
    flexDirection: 'row',  // Ensures Text and Icon are in a row
    alignItems: 'center',  // Vertically centers the Text and Icon
    justifyContent: 'space-between',  // Places Text on the left and Icon on the right
    padding: 10,
    borderWidth:0,
    borderColor: '#fff',  // Optional: Add border styling for the card
    backgroundColor:"#E8E8E8",
    borderRadius:10,
    marginBottom:15,
  },
  icon: {
    color: '#000',  // Optional: Customize the icon color
    cursor:"pointer"
  },
})