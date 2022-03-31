import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Invoices from '../screens/Invoices';
import { View, Text } from 'react-native'
import Customers from '../screens/Customers';
import Profile from '../screens/Profile';
import { SvgXml } from 'react-native-svg';

import Analytics from '../screens/Analytics';
import STYLES1 from '../STYLES';
import StackInsideTab from './InvoiceTab';
import InvoiceTab from './InvoiceTab';

const Tab = createBottomTabNavigator();

const TabNavigation = props => {

    return (
        // <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown: false,

        }}>
            <Tab.Screen name="Home" component={Home}


                options={{
                    tabBarLabel: ({ focused }) => (
                        focused ?
                            <Text style={STYLES1.fontSize14_2979FF_LouisGeorgeCafé_Bold}>Home</Text> : null
                    ),




                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {


                            return (
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24.676" height="27.14" viewBox="0 0 24.676 27.14">
                                <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(1.25 1.25)">
                                  <path id="Path_27" data-name="Path 27" d="M13.5,30.32V18h7.392V30.32" transform="translate(-6.108 -5.68)" fill="none" stroke="#2979ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                                  <path id="Path_36" data-name="Path 36" d="M4.5,11.624,15.588,3l11.088,8.624V25.176a2.464,2.464,0,0,1-2.464,2.464H6.964A2.464,2.464,0,0,1,4.5,25.176Z" transform="translate(-4.5 -3)" fill="none" stroke="#2979ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                                </g>
                              </svg>                                                       
                                      
                      `} />
                            )
                        }
                        else {

                            return (
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24.676" height="27.14" viewBox="0 0 24.676 27.14">
                        <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(1.25 1.25)">
                          <path id="Path_27" data-name="Path 27" d="M13.5,30.32V18h7.392V30.32" transform="translate(-6.108 -5.68)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                          <path id="Path_36" data-name="Path 36" d="M4.5,11.624,15.588,3l11.088,8.624V25.176a2.464,2.464,0,0,1-2.464,2.464H6.964A2.464,2.464,0,0,1,4.5,25.176Z" transform="translate(-4.5 -3)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                        </g>
                      </svg>
                      
                                      
                      `} />


                            )
                        }
                    }
                }}
            />
            <Tab.Screen name="InvoiceTab" component={InvoiceTab}
                options={{
                    tabBarLabel: ({ focused }) => (
                        focused ?
                            <Text style={STYLES1.fontSize14_2979FF_LouisGeorgeCafé_Bold}>Invoices</Text> : null
                    ),
                    tabBarIcon: ({ color, focused }) => {
                        console.log(focused)
                        if (focused) {

                            return (
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="28.098" height="28.106" viewBox="0 0 28.098 28.106">
                                <g id="Group_21" data-name="Group 21" transform="translate(0.5 0.5)">
                                  <g id="Group_232" data-name="Group 232">
                                    <path id="Path_28" data-name="Path 28" d="M158.181-694.764q0-2.422,0-4.844c0-.555.169-.725.727-.709a11.072,11.072,0,0,1,7.137,2.74,10.915,10.915,0,0,1,3.845,7.187,10.944,10.944,0,0,1-2.568,8.611,10.883,10.883,0,0,1-7.31,3.953,10.935,10.935,0,0,1-8.717-2.692A11.069,11.069,0,0,1,147.5-687.5a9.2,9.2,0,0,1-.1-1.378c0-.469.181-.654.654-.655h8.715c.382,0,.764-.009,1.146,0,.212.007.271-.075.27-.277C158.178-691.462,158.181-693.113,158.181-694.764Zm1,.686q0,2.465,0,4.931c0,.444-.168.611-.615.611h-9.9c-.245,0-.267.026-.241.258.029.258.047.517.088.773a10.051,10.051,0,0,0,3.8,6.532,9.968,9.968,0,0,0,9.073,1.862,10.263,10.263,0,0,0,7.573-10.477,10.213,10.213,0,0,0-1.222-4.331,10.2,10.2,0,0,0-4.216-4.192,10.172,10.172,0,0,0-4.038-1.181c-.281-.023-.3-.021-.3.261Q159.183-696.554,159.183-694.078Z" transform="translate(-142.88 704.847)" fill="#2979ff" stroke="#2979ff" stroke-width="1"/>
                                    <path id="Path_29" data-name="Path 29" d="M111.684-742.128q0,2.6,0,5.191c0,.509-.183.695-.685.695h-10.4c-.569,0-.731-.221-.705-.8a12.082,12.082,0,0,1,.4-2.708,11.109,11.109,0,0,1,2.539-4.593,11.224,11.224,0,0,1,6.67-3.578,14.187,14.187,0,0,1,1.571-.129c.406-.02.61.211.61.661q0,2.552,0,5.1Q111.684-742.2,111.684-742.128Zm-1,0q0-2.292,0-4.584c0-.307,0-.318-.318-.294a8.4,8.4,0,0,0-.879.1,10.2,10.2,0,0,0-7.149,4.9,9.84,9.84,0,0,0-1.413,4.449c-.023.3-.01.3.291.3h9.168c.3,0,.3,0,.3-.3Q110.682-739.832,110.682-742.124Z" transform="translate(-99.887 748.047)" fill="#2979ff" stroke="#2979ff" stroke-width="1"/>
                                  </g>
                                </g>
                              </svg>
                              
                                  
                  `} />
                            )
                        }
                        else

                            return (
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="28.098" height="28.106" viewBox="0 0 28.098 28.106">
                            <g id="Group_21" data-name="Group 21" transform="translate(0.5 0.5)" opacity="0.2">
                              <g id="Group_232" data-name="Group 232">
                                <path id="Path_28" data-name="Path 28" d="M158.181-694.764q0-2.422,0-4.844c0-.555.169-.725.727-.709a11.072,11.072,0,0,1,7.137,2.74,10.915,10.915,0,0,1,3.845,7.187,10.944,10.944,0,0,1-2.568,8.611,10.883,10.883,0,0,1-7.31,3.953,10.935,10.935,0,0,1-8.717-2.692A11.069,11.069,0,0,1,147.5-687.5a9.2,9.2,0,0,1-.1-1.378c0-.469.181-.654.654-.655h8.715c.382,0,.764-.009,1.146,0,.212.007.271-.075.27-.277C158.178-691.462,158.181-693.113,158.181-694.764Zm1,.686q0,2.465,0,4.931c0,.444-.168.611-.615.611h-9.9c-.245,0-.267.026-.241.258.029.258.047.517.088.773a10.051,10.051,0,0,0,3.8,6.532,9.968,9.968,0,0,0,9.073,1.862,10.263,10.263,0,0,0,7.573-10.477,10.213,10.213,0,0,0-1.222-4.331,10.2,10.2,0,0,0-4.216-4.192,10.172,10.172,0,0,0-4.038-1.181c-.281-.023-.3-.021-.3.261Q159.183-696.554,159.183-694.078Z" transform="translate(-142.88 704.847)" stroke="#000" stroke-width="1"/>
                                <path id="Path_29" data-name="Path 29" d="M111.684-742.128q0,2.6,0,5.191c0,.509-.183.695-.685.695h-10.4c-.569,0-.731-.221-.705-.8a12.082,12.082,0,0,1,.4-2.708,11.109,11.109,0,0,1,2.539-4.593,11.224,11.224,0,0,1,6.67-3.578,14.187,14.187,0,0,1,1.571-.129c.406-.02.61.211.61.661q0,2.552,0,5.1Q111.684-742.2,111.684-742.128Zm-1,0q0-2.292,0-4.584c0-.307,0-.318-.318-.294a8.4,8.4,0,0,0-.879.1,10.2,10.2,0,0,0-7.149,4.9,9.84,9.84,0,0,0-1.413,4.449c-.023.3-.01.3.291.3h9.168c.3,0,.3,0,.3-.3Q110.682-739.832,110.682-742.124Z" transform="translate(-99.887 748.047)" stroke="#000" stroke-width="1"/>
                              </g>
                            </g>
                          </svg>
                          
                                      
                      `} />
                            )
                    }


                }} />

            <Tab.Screen name="Analytics" component={Analytics}

                options={{
                    tabBarLabel: ({ focused }) => (
                        focused ?
                            <Text style={STYLES1.fontSize14_2979FF_LouisGeorgeCafé_Bold}>Analytics</Text> : null
                    ),
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {

                            return (
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="22.494" height="22.494" viewBox="0 0 22.494 22.494">
                                <g id="Group_283" data-name="Group 283" transform="translate(-175 -873)">
                                  <path id="Icon_open-graph" data-name="Icon open-graph" d="M19.766,0,11.247,8.435,8.435,5.623,0,14.143l2.812,2.812,5.623-5.708,2.812,2.812L22.494,2.812ZM0,19.682v2.812H22.494V19.682Z" transform="translate(175 873)" fill="#2979ff"/>
                                </g>
                              </svg>                             
                                           
`} />
                            )
                        }
                        else
                            return (
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="22.494" height="22.494" viewBox="0 0 22.494 22.494">
                        <path id="Icon_open-graph" data-name="Icon open-graph" d="M19.766,0,11.247,8.435,8.435,5.623,0,14.143l2.812,2.812,5.623-5.708,2.812,2.812L22.494,2.812ZM0,19.682v2.812H22.494V19.682Z" fill="#cbcbcb"/>
                      </svg>
                                           
`} />
                            )
                    }
                }}
            />

            <Tab.Screen name="Customers" component={Customers}

                options={{
                    tabBarLabel: ({ focused }) => (
                        focused ?
                            <Text style={STYLES1.fontSize14_2979FF_LouisGeorgeCafé_Bold}>Customers</Text> : null
                    ),
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {

                            return (

                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="27.685" height="22.494" viewBox="0 0 27.685 22.494">
                                <path id="Icon_awesome-list-ul" data-name="Icon awesome-list-ul" d="M2.6,3.375a2.6,2.6,0,1,0,2.6,2.6,2.6,2.6,0,0,0-2.6-2.6Zm0,8.651a2.6,2.6,0,1,0,2.6,2.6,2.6,2.6,0,0,0-2.6-2.6Zm0,8.651a2.6,2.6,0,1,0,2.6,2.6,2.6,2.6,0,0,0-2.6-2.6Zm24.224.865H9.517a.865.865,0,0,0-.865.865v1.73A.865.865,0,0,0,9.517,25h17.3a.865.865,0,0,0,.865-.865v-1.73A.865.865,0,0,0,26.819,21.543Zm0-17.3H9.517a.865.865,0,0,0-.865.865v1.73a.865.865,0,0,0,.865.865h17.3a.865.865,0,0,0,.865-.865V5.105A.865.865,0,0,0,26.819,4.24Zm0,8.651H9.517a.865.865,0,0,0-.865.865v1.73a.865.865,0,0,0,.865.865h17.3a.865.865,0,0,0,.865-.865v-1.73A.865.865,0,0,0,26.819,12.892Z" transform="translate(0 -3.375)" fill="#176eff"/>
                              </svg>                          
                                            
      `} />
                            )
                        }
                        else
                            return (

                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="27.685" height="22.494" viewBox="0 0 27.685 22.494">
                        <path id="Icon_awesome-list-ul" data-name="Icon awesome-list-ul" d="M2.6,3.375a2.6,2.6,0,1,0,2.6,2.6,2.6,2.6,0,0,0-2.6-2.6Zm0,8.651a2.6,2.6,0,1,0,2.6,2.6,2.6,2.6,0,0,0-2.6-2.6Zm0,8.651a2.6,2.6,0,1,0,2.6,2.6,2.6,2.6,0,0,0-2.6-2.6Zm24.224.865H9.517a.865.865,0,0,0-.865.865v1.73A.865.865,0,0,0,9.517,25h17.3a.865.865,0,0,0,.865-.865v-1.73A.865.865,0,0,0,26.819,21.543Zm0-17.3H9.517a.865.865,0,0,0-.865.865v1.73a.865.865,0,0,0,.865.865h17.3a.865.865,0,0,0,.865-.865V5.105A.865.865,0,0,0,26.819,4.24Zm0,8.651H9.517a.865.865,0,0,0-.865.865v1.73a.865.865,0,0,0,.865.865h17.3a.865.865,0,0,0,.865-.865v-1.73A.865.865,0,0,0,26.819,12.892Z" transform="translate(0 -3.375)" fill="#cbcbcb"/>
                      </svg>
                                            
      `} />
                            )
                    }
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: ({ focused }) => (
                        focused ?
                            <Text style={STYLES1.fontSize14_2979FF_LouisGeorgeCafé_Bold}>Profile</Text> : null
                    ),
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {

                            return (
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="23.363" height="25.908" viewBox="0 0 23.363 25.908">
                                <g id="Group_281" data-name="Group 281" transform="translate(-354.5 -871.5)">
                                  <path id="Path_2981" data-name="Path 2981" d="M26.363,30.136V27.591A5.091,5.091,0,0,0,21.272,22.5H11.091A5.091,5.091,0,0,0,6,27.591v2.545" transform="translate(350 865.772)" fill="none" stroke="#2979ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                  <path id="Path_2982" data-name="Path 2982" d="M22.181,9.591A5.091,5.091,0,1,1,17.091,4.5,5.091,5.091,0,0,1,22.181,9.591Z" transform="translate(349.091 868.5)" fill="none" stroke="#2979ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                </g>
                              </svg>
                                             
                                  
                  `} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="23.363" height="25.908" viewBox="0 0 23.363 25.908">
        <g id="Icon_feather-user" data-name="Icon feather-user" transform="translate(-4.5 -3)">
          <path id="Path_2981" data-name="Path 2981" d="M26.363,30.136V27.591A5.091,5.091,0,0,0,21.272,22.5H11.091A5.091,5.091,0,0,0,6,27.591v2.545" transform="translate(0 -2.728)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_2982" data-name="Path 2982" d="M22.181,9.591A5.091,5.091,0,1,1,17.091,4.5,5.091,5.091,0,0,1,22.181,9.591Z" transform="translate(-0.909)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        </g>
      </svg>                    
                  
  `} />
                            )
                        }

                    }
                }}
            />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}

export default TabNavigation;