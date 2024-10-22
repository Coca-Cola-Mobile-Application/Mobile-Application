import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccpetViewPermitDrawer from './acceptViewDrawerPermit';
import AcceptPermits from '../screens/AcceptPermits';


const Stack = createNativeStackNavigator();

export default function AcceptPermitListStack() {
  return (
    <Stack.Navigator
      initialRouteName="AcceptPermitList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#008000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }, 
        headerTitleAlign: 'center',
        headerShown: true,
      }}
    >
      <Stack.Screen name="AcceptPermitList" component={AcceptPermits}/>
      <Stack.Screen name="AcceptPermitPageDrawer" component={AccpetViewPermitDrawer} />
    </Stack.Navigator>
  );
}
