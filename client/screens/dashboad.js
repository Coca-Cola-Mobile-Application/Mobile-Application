import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminSummary from './adminSummery';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons from react-native-vector-icons
import viewAllPermit from './viewAllPermit';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
      <Tab.Navigator initialRouteName="Analyze">
        <Tab.Screen
          name="Analyze"
          component={AdminSummary}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="analytics" color={color} size={size} /> // Use custom icon
            ),
          }}
        />
        <Tab.Screen
          name="allPermit"
          component={viewAllPermit}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <Icon name="assignment" size={30} color="#000" /> // Use custom icon
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={RegisterPage}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="app-registration" color={color} size={size} /> // Use custom icon
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={RegisterPage}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" color={color} size={size} /> // Use custom icon
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="login" color={color} size={size} /> // Use custom icon
            ),
          }}
        />
      </Tab.Navigator>
  );
}
