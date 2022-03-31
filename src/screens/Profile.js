
import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import ButtonActive from '../component/ButtonActive';
import ButtonSeeAll from '../component/ButtonSeeAll';
import CurrencyPicker from "react-native-currency-picker"
import STYLES from '../STYLES'


const Profile = ({ navigation }) => {

    let currencyPickerRef = undefined;
    const [stateCurencyName, setStateCurrencyName] = useState('PKR')
    return (


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
                    marginLeft: '10%'
                }}>

                    <Text style={STYLES.fontSize45_FFFFFF_LouisGeorgeCafé_Bold}>Profile</Text>
                </View>
                <View style={{
                    flex: 0.55,
                    backgroundColor: '#FFFFFF',
                    shadowColor: '#000000',
                    elevation: 5,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingHorizontal: '5%',
                    // paddingTop: "5%",
                    justifyContent: 'space-evenly'

                }}>



                    <View style={{
                        flexDirection: 'row',
                        //backgroundColor: 'green',
                        justifyContent: 'space-between',

                        borderBottomColor: '#E2E9FF',
                        borderBottomWidth: 1,
                        paddingBottom: '5%'

                    }}>
                        <Text style={STYLES.fontSize16_000000_Arial_Regular}>Select Currency</Text>
                        <View style={{
                            flexDirection: 'row',
                            flex: 0.35,// backgroundColor: 'blue',
                            justifyContent: 'space-between'
                        }}>
                            <CurrencyPicker
                                currencyPickerRef={(ref) => { currencyPickerRef = ref }}
                                enable={true}
                                darkMode={false}
                                currencyCode={stateCurencyName}
                                showFlag={false}
                                showCurrencyName={false}
                                showCurrencyCode={stateCurencyName}
                                onSelectCurrency={(data) => {
                                    setStateCurrencyName(data.code)
                                    // console.log("DATA", data.code)
                                }}

                                onOpen={() => { console.log("Open") }}
                                onClose={() => { console.log("Close") }}

                                showNativeSymbol={false}
                                showSymbol={false}
                                containerStyle={{

                                    flagWidth: 25,

                                }}

                                title={"Currency"}
                                searchPlaceholder={"Search"}
                                showCloseButton={true}
                                showModalTitle={true}
                            />

                            <SvgXml
                                xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
                                <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
                              </svg>
                              
                                `}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomColor: '#E2E9FF',
                        borderBottomWidth: 1,
                        paddingBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize16_000000_Arial_Regular}>Edit Profile</Text>


                        <SvgXml
                            xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
                                <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
                              </svg>
                              
                                `}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomColor: '#E2E9FF',
                        borderBottomWidth: 1,
                        paddingBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize16_000000_Arial_Regular}>Edit Company Info</Text>


                        <SvgXml
                            xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
                                <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
                              </svg>
                              
                                `}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomColor: '#E2E9FF',
                        borderBottomWidth: 1,
                        paddingBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize16_000000_Arial_Regular}>About Us</Text>


                        <SvgXml
                            xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
                                <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
                              </svg>
                              
                                `}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomColor: '#E2E9FF',
                        borderBottomWidth: 1,
                        paddingBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize16_000000_Arial_Regular}>Rate Us</Text>


                        <SvgXml
                            xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
                                <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
                              </svg>
                              
                                `}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 0.25, //backgroundColor: 'green',
                    backgroundColor: '#FFFFFF',
                    justifyContent: 'flex-end',
                    shadowColor: '#000000',
                    elevation: 5,
                }}>
                    <TouchableOpacity style={{
                        marginBottom: '10%',
                        borderColor: '#2979FF',
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderRadius: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: '5%',
                        marginHorizontal: "5%",

                    }}>
                        <Text style={STYLES.fontSize17_2979FF_LouisGeorgeCafé_Bold}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>






        </ImageBackground >



    );
};



export default Profile;