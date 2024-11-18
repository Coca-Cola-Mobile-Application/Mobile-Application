import React, { useEffect, useState } from 'react';
import { ScrollView, View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons from react-native-vector-icons
import axios from 'axios';

export default function ViewAllPermit({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [formattedArray, setFormattedArray] = useState([]);

  const getCreatedAllPermitList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/workPermit/all-workPermit");

      // Map over each item in the data array to format the date
      const formattedData = response.data.data.map(item => {
        const date = new Date(item.permitCreateTime);
        const formattedDate = date.toISOString().split('T')[0]; // "YYYY-MM-DD"
        
        // Return a new object with the formatted date
        return {
          ...item,
          permitCreateTime: formattedDate
        };
      });

      setFormattedArray(formattedData);

    } catch (err) {
      alert(err);
    }
  };

  const handleSearch = () => {
    // Perform search action with the current searchText
    console.log('Searching for:', searchText);
    alert(searchText);
  };

  const handleNavigateIndividualPermit = (id) => {
    try {
      navigation.navigate('PermitView', { id: id });
      console.log(id);

    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getCreatedAllPermitList();
  }, []); // Add empty dependency array to prevent infinite loop

  return (
    <ScrollView style={styles.main_section}>
      <Text style={styles.permit_list_p}>All Permit List</Text>
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
        {formattedArray.map((item, index) => (
          <View style={styles.permit_list_card} key={index}>
            <Text>{item.permitCreateTime}</Text>
            <Icon name="arrow-right" size={30} style={styles.icon} onPress={() => handleNavigateIndividualPermit(index)} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main_section: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  search_section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search_box: {
    flex: 1,
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 10,
    width: 120,
  },
  search_icon: {
    borderRadius: 20,
    marginLeft: -50,
    width: 60,
    cursor: "pointer",
  },
  permit_list: {
    marginTop: 30,
  },
  permit_list_p: {
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom:30,
    fontFamily: "Roboto, sans-serif",
  },
  permit_list_card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    marginBottom: 15,
  },
  icon: {
    color: '#000',
    cursor: "pointer",
  },
});
