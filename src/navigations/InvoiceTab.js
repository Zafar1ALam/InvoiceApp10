
import * as React from 'react';
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InvoiceView from '../screens/InvoiceView';
import Invoices from '../screens/Invoices';

const Stack = createNativeStackNavigator();
const InvoiceTab = props => {
    return (

        <Stack.Navigator initialRouteName='Invoices'>

            {/* <Stack.Screen name="InvoiceView" component={InvoiceView}
                options={{
                    headerShown: false,
                }} /> */}
            <Stack.Screen name="Invoices" component={Invoices}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>


    );
};



export default InvoiceTab;