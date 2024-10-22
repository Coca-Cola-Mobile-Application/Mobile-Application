import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FilterResultCard({detailObject,updateSelectPersonID}) {
    
    const handleIDChange = (newValue) => {
        updateSelectPersonID(newValue); 
    };
  
    return (
    <View style={styles.fullContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.topicText}>
                {detailObject.firstName} {detailObject.lastName}
            </Text>
            <Text style={styles.topicText}>
                {detailObject.DepartmentName}
            </Text>
        </View>
        <TouchableOpacity onPress={() => handleIDChange(detailObject.objectID)}>
          <LinearGradient
              colors={['#4751A0', '#4686A0']}
              start={{x:0, y:0}}
              end={{x:1, y:0}}
              style={styles.addContainer}
          >
              <Text style={styles.addText}>
                  ADD
              </Text>
          </LinearGradient>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    fullContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
      width: '100%',
      height: 80, 
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 20, 
      borderColor: '#000080',
      backgroundColor: '#f9f9f9',
      elevation:20,
      shadowColor:'#333',
      shadowOpacity:0.3,
      shadowRadius:2,
      shadowOffset:{width:1,height:1},
    },
    topicText: {
        fontWeight: 'bold',
        fontSize: 16,  
        color: '#000', 
        textAlign: 'start'
    },
    addContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 70,  
        height: 50, 
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    addText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    textContainer: {      
    },
});
