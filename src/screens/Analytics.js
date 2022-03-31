
import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { SvgXml } from 'react-native-svg';

import Svgs from '../assets/svgs/Svgs'
import ButtonCustom from '../component/ButtonCustom';
import ButtonLastMonth from '../component/ButtonLastMonth';
import ButtonLastYear from '../component/ButtonLastYear';
import ButtonAll from '../component/ButtonAll';

import STYLES from '../STYLES'
import ButtonThisMonth from '../component/ButtonThisMonth';



const Analytics = ({ navigation }) => {



    return (
        <ScrollView>
            <ImageBackground
                resizeMode="cover"
                style={[STYLES.backgroundImageContainer,
                ]} source={require('../assets/images/Splash.png')}>

                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        flex: 0.20,
                        justifyContent: 'center',
                        paddingLeft: '10%'

                    }}>

                        <Text style={STYLES.fontSize45_FFFFFF_LouisGeorgeCafé_Bold}>Analytics</Text>
                    </View>
                    <View style={{
                        flex: 0.80,
                        backgroundColor: '#FFFFFF',
                        shadowColor: '#000000',
                        elevation: 5,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        paddingHorizontal: '5%',
                    }}>


                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                            ,
                            alignItems: 'center', flex: 0.2, //backgroundColor: 'red'
                        }}>
                            <ButtonCustom />
                            <ButtonAll />
                            <ButtonThisMonth />
                            <ButtonLastMonth />
                            <ButtonLastYear />


                        </View>
                        <View style={{
                            flex: 0.6,
                            // backgroundColor: 'green', 
                            justifyContent: 'space-between'
                        }}>

                            <View style={{
                                flex: 0.30, borderRadius: 20,
                                borderWidth: 1,
                                borderColor: "rgba(112,112,112,0.49)",
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF' //backgroundColor: 'blue',
                            }}>
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="29.25" viewBox="0 0 31.5 29.25">
  <path id="Icon_ionic-md-warning" data-name="Icon ionic-md-warning" d="M2.25,32.625h31.5L18,3.375Zm17.438-4.5H16.313V24.75h3.375Zm0-5.625H16.313V15.75h3.375Z" transform="translate(-2.25 -3.375)" fill="red"/>
</svg>
`} />
                                <View style={{ marginLeft: '5%' }}>
                                    <Text style={STYLES.fontSize14_2979FF_Arial_Bold}>Over Due</Text>
                                    <Text style={STYLES.fontSize40_2D2D2D_LouisGeorgeCafé_Regular}>Rs. 1,50,245</Text>
                                </View>
                            </View>
                            <View style={{
                                flex: 0.30, borderRadius: 20,
                                borderWidth: 1,
                                borderColor: "rgba(112,112,112,0.49)",
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF' //backgroundColor: 'yellow'
                            }}>
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
  <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z" transform="translate(-0.563 -0.563)" fill="#19bd00"/>
</svg>

`} />
                                <View style={{ marginLeft: '5%' }}>
                                    <Text style={STYLES.fontSize14_2979FF_Arial_Bold}>Paid</Text>
                                    <Text style={STYLES.fontSize40_2D2D2D_LouisGeorgeCafé_Regular}>Rs. 1,50,245</Text>
                                </View>
                            </View>
                            <View style={{
                                flex: 0.30, borderRadius: 20,
                                borderWidth: 1,
                                borderColor: "rgba(112,112,112,0.49)",
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF' // backgroundColor: 'blue'
                            }}>
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
  <path id="Icon_awesome-clock" data-name="Icon awesome-clock" d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm4.015,24.616-6.2-4.507a.849.849,0,0,1-.345-.682V8.156a.846.846,0,0,1,.844-.844h3.375a.846.846,0,0,1,.844.844v9.682L25,21.087a.843.843,0,0,1,.183,1.181L23.2,25A.85.85,0,0,1,22.015,25.179Z" transform="translate(-0.563 -0.563)" fill="#ffbc00"/>
</svg>

`} />
                                <View style={{ marginLeft: '5%' }}>
                                    <Text style={STYLES.fontSize14_2979FF_Arial_Bold}>Unpaid</Text>
                                    <Text style={STYLES.fontSize40_2D2D2D_LouisGeorgeCafé_Regular}>Rs. 1,50,245</Text>
                                </View>
                            </View>
                        </View>


                    </View>
                </View>






            </ImageBackground >

        </ScrollView>


    );
};



export default Analytics;