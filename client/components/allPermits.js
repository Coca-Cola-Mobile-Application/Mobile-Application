import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function AllPermitsCard({topicDetail,navigateName}) {

    const navigation = useNavigation(); 

    const navigateToAnotherPage = () => {
        navigation.navigate(navigateName,{objectID:topicDetail.objectID});
    };

    return (
        <TouchableOpacity onPress={navigateToAnotherPage}>
            <View style={styles.topicContainer}>
                <Text style={styles.topicText}>
                    {topicDetail.permitId}.  {topicDetail.permitName}
                </Text>
                <Icon name="chevron-forward" size={20} color="#000" />
            </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    topicContainer: {
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 15,
      width: '100%',
      height: 50,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: '8%',
      marginTop:'5%',
      borderWidth:2,
      borderColor: '#000000', 
      backgroundColor: '#f9f9f9',
    },
    topicText: {
      fontWeight: 'bold',
      fontSize: 15,
      color: '#000000',
      textAlign: 'center',
    },
});
  