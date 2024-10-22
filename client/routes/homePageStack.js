import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateWorkPermitPage from '../screens/main_page';
import FillingPermits from '../screens/FillingPermits';  // Fix component name capitalization
import AcceptPermits from '../screens/AcceptPermits';
import MyProfile from '../screens/MyProfile';
import HomePage from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function HomePageStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
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
      <Stack.Screen name="HomePage" component={HomePage}/>
      <Stack.Screen name="Create New Permit" component={CreateWorkPermitPage}/>
      <Stack.Screen name="Fill Permits" component={FillingPermits} />
      <Stack.Screen name="Accept Permits" component={AcceptPermits} />
      <Stack.Screen name="My Profile" component={MyProfile} />
    </Stack.Navigator>
  );
}
