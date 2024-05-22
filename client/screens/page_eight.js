import React from "react";
import {StyleSheet,View,Text,Button} from 'react-native';

export default function PageEight({navigation}) {
    return(
        <View style={styles.container}>
            <Text>this is page Eight</Text>
            <Button title="Next" onPress={()=> navigation.navigate('PageNine')} />
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