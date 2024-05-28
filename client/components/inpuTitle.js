import React from "react";
import {Text,StyleSheet} from 'react-native';


export default function InputTitle({children})
{

    return(
        <Text style={styles.decorateTitle}>
            {children}  
        </Text>
    )
}

const styles = StyleSheet.create({
    decorateTitle:{
        fontWeight:'bold',
        fontSize:17,
    }                      
}); 