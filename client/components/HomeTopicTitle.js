import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function HomeTopicTitle({topicDetail,navigateName}) {

  const navigation = useNavigation(); 

  const navigateToAnotherPage = () => {
    console.log(topicDetail);
    navigation.navigate(navigateName); // Navigate to another page
  };

  return (
    <TouchableOpacity onPress={navigateToAnotherPage}>
       <View style={styles.topicContainer}>
          <Text style={styles.topicText}>
              {topicDetail}
          </Text>
       </View>
    </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
    topicContainer: {
      gap: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      width: 250,
      height: 60,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: '5%',
      marginTop:'5%',
      borderWidth:3,
      borderColor: '#000080', 
      backgroundColor: '#f9f9f9',
      elevation: 40, 
    },
    topicText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#000080',
      textAlign: 'center',
    },
});
  