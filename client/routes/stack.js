import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageOne from '../screens/page_one';
import PageTwo from '../screens/page_two';
import PageThree from '../screens/page_three';
import PageFour from '../screens/page_four';
import PageFive from '../screens/page_five';
import PageSix from '../screens/page_six';
import PageSeven from '../screens/page_seven';
import PageEight from '../screens/page_eight';
import PageNine from '../screens/page_nine';
import PageTen from '../screens/page_ten';
import PageEleven from '../screens/page_eleven';
import PageTwelve from '../screens/page_twelve';
import PageThirteen from '../screens/page_thirteen';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    return (
      <Stack.Navigator
        initialRouteName="PageOne"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerShown:true
        }}
      >
        <Stack.Screen
          name="PageOne"
          component={PageOne}
          options={{ title: 'Page One' }}
        />
        <Stack.Screen name="PageTwo" component={PageTwo} />
        <Stack.Screen name="PageThree" component={PageThree} />
        <Stack.Screen name="PageFour" component={PageFour} />
        <Stack.Screen name="PageFive" component={PageFive} />
        <Stack.Screen name="PageSix" component={PageSix} />
        <Stack.Screen name="PageSeven" component={PageSeven} />
        <Stack.Screen name="PageEight" component={PageEight} />
        <Stack.Screen name="PageNine" component={PageNine} />
        <Stack.Screen name="PageTen" component={PageTen} />
        <Stack.Screen name="PageEleven" component={PageEleven} />
        <Stack.Screen name="PageTwelve" component={PageTwelve} />
        <Stack.Screen name="PageThirteen" component={PageThirteen} />
      </Stack.Navigator>
    );
  }

  export function PageTenStack() {
    return (
      <Stack.Navigator
        initialRouteName="PageTen"
        screenOptions={{
          headerStyle: { backgroundColor: '#008000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="PageTen"
          component={PageTen}
          options={{ title: 'Page Ten' }}
        />
        <Stack.Screen
          name="BasicInformation"
          component={PageEleven}
          options={{ title: 'Basic Information' }}
        />
        <Stack.Screen
          name="DetailedInformation"
          component={PageTwelve}
          options={{ title: 'Detailed Information' }}
        />
      </Stack.Navigator>
    );
  }
  