import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PageOne from './screens/page_one';
import PageTwo from './screens/page_two';
import PageThree from './screens/page_three';
import PageFour from './screens/page_four';
import PageFive from './screens/page_five';
import PageSix from './screens/page_six';
import PageSeven from './screens/page_seven';
import PageEight from './screens/page_eight';
import PageNine from './screens/page_nine';
import PageTen from './screens/page_ten';
import PageEleven from './screens/page_eleven';
import PageTwelve from './screens/page_twelve';
import PageThirteen from './screens/page_thirteen';
import PageFourteen from './screens/page_fourteen';
import {PageTenStack} from './routes/stack';

const Drawer = createDrawerNavigator();
 

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
       initialRouteName="Home"
       screenOptions={{
        headerStyle: {
          backgroundColor: '#5f9ea0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerShown:true
      }}
      >
        <Drawer.Screen name="Page One" component={PageOne} />
        <Drawer.Screen name="Page Two" component={PageTwo} />
        <Drawer.Screen name="Page Three" component={PageThree} />
        <Drawer.Screen name="Page Four" component={PageFour} />
        <Drawer.Screen name="Page Five" component={PageFive} />
        <Drawer.Screen name="Page Six" component={PageSix} />
        <Drawer.Screen name="Page Seven" component={PageSeven} />
        <Drawer.Screen name="Page Eight" component={PageEight} />
        <Drawer.Screen name="Page Nine" component={PageNine} />
        <Drawer.Screen name="Page Ten" component={PageTenStack} />
        <Drawer.Screen name="Page Eleven" component={PageEleven} />
        <Drawer.Screen name="Page Twelve" component={PageTwelve} />
        <Drawer.Screen name="Page Thirteen" component={PageThirteen} />
        <Drawer.Screen name="Page Fourteen" component={PageFourteen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
