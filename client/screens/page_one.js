import React from "react";
import { StyleSheet, View, Text,Button } from 'react-native';

export default function PageOne({ navigation}) {
    
    return (
        <View style={styles.container}>
            <Text>This is page one</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//<Button title="Next" onPress={()=> navigation.navigate('PageTwo')}/>