import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


export default function Topic({topicDetail}) {
  return (
    <LinearGradient
        colors={['#4751A0', '#4686A0']}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
        style={styles.topicContainer}
    >
        <Text style={styles.topicText}>
             {topicDetail.number}.  {topicDetail. title}
        </Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    topicContainer:{
        justifyContent:'center',
        borderRadius:20,
        width:'100%',
        height:50,
        paddingHorizontal:15
    },
    topicText:{
        fontWeight:'bold',
        fontSize:17,
        color:'#fff'
    }
})

