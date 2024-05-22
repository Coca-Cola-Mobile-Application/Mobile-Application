import React from "react";
import {StyleSheet,View,Text,Button} from 'react-native';

export default function PageFive({navigation}) {
    return(
        <View style={styles.container}>
            <Text>this is page five</Text>
            <Button title="Next" onPress={()=> navigation.navigate('PageSix')} />
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