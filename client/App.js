import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PageOne}>
        <Stack.Screen
           name="PageOne"
           component={PageOne} 
           options={{title:'Page One'}}
        />
        <Stack.Screen name="PageTwo" component={PageTwo}/>
        <Stack.Screen name="PageThree" component={PageThree}/>
        <Stack.Screen name="PageFour" component={PageFour}/>
        <Stack.Screen name="PageFive" component={PageFive}/>
        <Stack.Screen name="PageSix" component={PageSix}/>
        <Stack.Screen name="PageSeven" component={PageSeven}/>
        <Stack.Screen name="PageEight" component={PageEight}/>
        <Stack.Screen name="PageNine" component={PageNine}/>
        <Stack.Screen name="PageTen" component={PageTen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
