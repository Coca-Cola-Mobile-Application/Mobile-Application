import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    insideContainer: {
        width: '100%',
        height: '90%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        overflow: 'hidden',
        paddingHorizontal:50,
        paddingVertical:50,
    },
    bodyView:{
        flex:1,
        width:'100%',
        alignItems:'center',
    },
    insideBodyView:{
        width:'100%',
        alignItems:'center'
    },
    insideBodyView2:{
        width:'100%',
    }
});