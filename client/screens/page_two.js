import React from "react";
import {StyleSheet,View,Text,Button} from 'react-native';

export default function PageTwo({navigation}) {
    return(
        <View style={styles.container}>
            <Text>this is page two</Text>
            <Button title="Next" onPress={()=> navigation.navigate('PageThree')}/>
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