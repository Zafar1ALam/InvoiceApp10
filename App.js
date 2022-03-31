import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import TabNavigation from './src/navigations/TabNavigation';
import InvoiceView from './src/screens/InvoiceView';
import EditCompanyInfo from './src/screens/EditCompanyInfo';
import ForgotPasswordEmail from './src/screens/ForgotPasswordEmail';
import VerificationCode from './src/screens/VerificationCode';
import CI from './src/screens/CI';
import CreateInvoice from './src/screens/CreateInvoice';
import Pdf1 from './src/screens/Pdf1';
import CIflatlist from './src/screens/CIflatlist';

const Stack = createNativeStackNavigator();
const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="TabNavigation" component={TabNavigation}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail}

          options={{ title: 'Forgot Password' }}
        />
        <Stack.Screen name="VerificationCode" component={VerificationCode}
          options={{ title: 'Verification Code' }}

        />

        {/*
        <Stack.Screen name="InvoiceView" component={InvoiceView}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="EditProfile" component={EditProfile}
          options={{
            headerShown: false,
          }} />*/}
        <Stack.Screen name="EditCompanyInfo" component={EditCompanyInfo}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="CreateInvoice" component={CreateInvoice}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Pdf1" component={Pdf1}
          options={{
            title: "Invoice",
          }}
        />
        <Stack.Screen name="CIflatlist" component={CIflatlist}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};



export default App;