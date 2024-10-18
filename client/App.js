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

         <Stack.Screen name='splash' component={SplashScreen} />
         <Stack.Screen name='Register' component={RegisterPage} />
         <Stack.Screen name='Login' component={LoginPage} />
         <Stack.Screen name='forgetPassword' component={ForgetPassword} />
         <Stack.Screen name='otp' component={SplashScreen} />
         <Stack.Screen name='reset' component={ResetPasswordScreen} />
          <Stack.Screen name="HomePage" component={HomePage}/>
          <Stack.Screen name="Create Work Permit" component={WorkPermitStack} options={{ headerShown: false }}/>
          <Stack.Screen name="FillTypes" component={FillPermitStack} options={{ headerShown: false }}/>
          <Stack.Screen name="AcceptPermitList" component={AcceptPermitListStack}  options={{ headerShown: false }}/>
          <Stack.Screen name="My Profile" component={MyProfile} />
          {/* <Stack.Screen name="Analyze" component={AdminSummery} /> */}
          <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />

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