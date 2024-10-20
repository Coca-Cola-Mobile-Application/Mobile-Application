import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons from react-native-vector-icons

export default function viewAllPermit() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform search action with the current searchText
    console.log('Searching for:', searchText);
    alert(searchText)
  };


  return (
    <View style={styles.main_section}>
      <View style={styles.search_section}>
      <TextInput
        style={styles.search_box}
        placeholder="Search Date..."
        value={searchText}
        onChangeText={text => setSearchText(text)} // Updates state on text input
      />
      <Icon name="search" size={30} style={styles.search_icon} onPress={handleSearch} />
    </View>
     

    </View>
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
    marginRight: 10,  
    borderRadius:10,
    width:120
  },
  search_icon:{
    borderRadius:20,
    marginLeft:-50,
    width:60,
    cursor:"pointer"
  }
})