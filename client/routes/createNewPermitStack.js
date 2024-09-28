import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateWorkPermitPage from '../screens/main_page';
import FiilPersonSelectMoodle from '../components/fiilPersonSelectMoodle';  // Fix component name capitalization
import DepartmentSelection from '../components/DepartmentSelection';
import AcceptUsersSelection from '../components/AcceptUsersSelection';

const Stack = createNativeStackNavigator();

export default function WorkPermitStack() {
  return (
    <Stack.Navigator
      initialRouteName="Create Work Permit"
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
      <Stack.Screen name="Create Work Permit" component={CreateWorkPermitPage} options={{ headerShown: false }}/>
      <Stack.Screen name="Select Filling Person" component={FiilPersonSelectMoodle} />
      <Stack.Screen name="Select Authorized Departments" component={DepartmentSelection} />
      <Stack.Screen name="Select Authorized Users" component={AcceptUsersSelection} />
    </Stack.Navigator>
  );
}
