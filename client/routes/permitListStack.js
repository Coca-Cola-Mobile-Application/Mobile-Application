import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkPermitDrawer from './WorkPermitDrawer';
import FillingPermits from '../screens/FillingPermits';


const Stack = createNativeStackNavigator();

export default function PermitListStack() {
  return (
    <Stack.Navigator
      initialRouteName="FillPermitList"
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
      <Stack.Screen name="FillPermitList" component={FillingPermits} options={{ headerShown: false }}/>
      <Stack.Screen name="permitPageDrawer" component={WorkPermitDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
