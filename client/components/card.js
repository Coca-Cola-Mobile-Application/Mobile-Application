import React from "react";
import {View,StyleSheet} from 'react-native';


export default function Card({children})
{

    return(
        <View style={styles.cardDecoration}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardDecoration:{
        width:'97%',
        borderRadius:30,
        elevation:10,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        paddingHorizontal:15,
        paddingVertical:15,
        marginBottom:'15%',
        alignSelf: 'center', 
    }
});
