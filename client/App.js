// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import splashScreen from './screens/splashScreen';
// import PageOne from './screens/page_one';
// import PageTwo from './screens/page_two';
// import PageThree from './screens/page_three';
// import PageFour from './screens/page_four';
// import PageFive from './screens/page_five';
// import PageSix from './screens/page_six';
// import PageSeven from './screens/page_seven';
// import PageEight from './screens/page_eight';
// import PageNine from './screens/page_nine';
// import PageTen from './screens/page_ten';
// import StackNavigator from './routes/stack';
// import RegisterPage from './screens/RegisterPage';
// import LoginPage from './screens/LoginPage';
// import CreateWorkPermitPage from './screens/main_page';
// import WorkPermitStack from './routes/createNewPermitStack'; // Import the stack navigator
// import HomePageStack from './routes/homePageStack';

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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import CreateWorkPermitPage from '../screens/main_page';
import FillingPermits from '../client/screens/FillingPermits';  // Fix component name capitalization
import AcceptPermits from '../client/screens/AcceptPermits';
import MyProfile from '../client/screens/MyProfile';
import HomePage from '../client/screens/Home';

//import WorkPermitDrawer from './routes/WorkPermitDrawer';
import WorkPermitStack from './routes/createNewPermitStack';
import FillPermitStack from './routes/fillPermitsStack';
import AcceptPermitListStack from './routes/acceptPermitListStack';
import SplashScreen from './screens/splashScreen';
import RegisterPage from './screens/RegisterPage';
import LoginPage from './screens/LoginPage';
import ForgetPassword from './screens/ForgetPassword';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import AdminSummery from './screens/adminSummery';
import Dashboard from './screens/dashboad';
import ApprovePermitView from './screens/permitView/approvePermitView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="dashboard" // Ensure this matches one of your screen names
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
        {/* Drawer Screens */}
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

        {/* Stack Screens */}
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="forgetPassword" component={ForgetPassword} />
        <Stack.Screen name="otp" component={SplashScreen} />
        <Stack.Screen name="reset" component={ResetPasswordScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen
          name="Create Work Permit"
          component={WorkPermitStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FillTypes"
          component={FillPermitStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AcceptPermitList"
          component={AcceptPermitListStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="My Profile" component={MyProfile} />
        <Stack.Screen
          name="PermitView"
          component={ApprovePermitView}
          options={{ headerShown: true }}
        />

        {/* Commented Screen */}
        {/* <Stack.Screen name="Analyze" component={AdminSummery} /> */}

        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


{/* <Drawer.Screen name="Splash" component={splashScreen} />
        <Drawer.Screen name="Register" component={RegisterPage} />
        <Drawer.Screen name="Login" component={LoginPage} />
        <Drawer.Screen name="forgetPassword" component={ForgetPassword} />
        <Drawer.Screen name="otp" component={OTPPage} />
        <Drawer.Screen name="reset" component={ResetPasswordScreen} /> */}