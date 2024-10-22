import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import FillingPermits from '../screens/FillingPermits';
import FillingPerTypes from '../screens/fillPermitTypeSelection';

import PermitListStack from './permitListStack';


const Stack = createNativeStackNavigator();

export default function FillPermitStack() {
  return (
    <Stack.Navigator
      initialRouteName="FillTypes"
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
      <Stack.Screen name="FillTypes" component={FillingPerTypes}/>
      <Stack.Screen name="FillPermitList" component={PermitListStack}/>
    </Stack.Navigator>
  );
}
