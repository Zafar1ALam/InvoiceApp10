
import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import ButtonActive from '../component/ButtonActive';
import ButtonClosed from '../component/ButtonClosed';
import ButtonSeeAll from '../component/ButtonSeeAll';
import STYLES from '../STYLES'


const Home = ({ navigation }) => {


    const [stateCustomersFlatList, setStateCusatomersFlatlist] =
        useState([
            { image: "1", id: 1, date: "21/06/2020" },
            { image: "1", id: 2, date: "22/06/2020" },
        ]);

    const [stateInvoicesFlatList, setStateInvoicesFlatlist] =
        useState([
            { image: "1", id: 1, date: "21/06/2020", status: 'active' },
            { image: "1", id: 3, date: "22/06/2020", status: 'closed' },
            { image: "1", id: 4, date: "21/06/2020", status: 'active' },
            { image: "1", id: 5, date: "22/06/2020", status: 'closed' },
            { image: "1", id: 6, date: "21/06/2020", status: 'active' },
            { image: "1", id: 7, date: "22/06/2020", status: 'closed' },
        ]);



    return (


        <ImageBackground
            resizeMode="cover"
            style={[STYLES.backgroundImageContainer,
            ]} source={require('../assets/images/Splash.png')}>

            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 0.20, paddingRight: '5%',
                    alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>

                    <View style={{
                        //backgroundColor: 'red',
                        height: '40%'
                    }}>
                        <Image
                            style={{
                                flex: 1, resizeMode: 'contain',
                                borderRadius: 250
                            }}
                            source={require('../assets/images/humanbeing.png')} />
                    </View>
                    <View>
                        <Text style={STYLES.fontSize14_FFFFFF_LouisGeorgeCafé_Regular_50}>
                            Pending Balance
                        </Text>
                        <Text style={STYLES.fontSize40_FFFFFF_LouisGeorgeCafé_Regular}>
                            Rs.{`1,50,245`}</Text>
                    </View>
                </View>
                <View style={{
                    flex: 0.80,
                    backgroundColor: '#FFFFFF',
                    shadowColor: '#000000',
                    elevation: 5,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingHorizontal: '5%',
                    paddingTop: "5%"

                }}>
                    <View style={{ flex: 0.3, justifyContent: 'space-evenly', marginBottom: "5%" }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            flex: 0.2
                        }}>
                            <Text style={STYLES.fontSize20_000000_LouisGeorgeCafé_Regular}>
                                Customers</Text>

                            <ButtonSeeAll />
                        </View>
                        <View style={{ flex: 0.8 }}>
                            <FlatList
                                data={stateCustomersFlatList}
                                renderItem={({ item }) => {
                                    console.log(item.id)
                                    console.log(item.date)
                                    return (
                                        <View style={{
                                            backgroundColor: '#FFFFFF',
                                            height: 70, justifyContent: "center",
                                            borderBottomWidth: 1,
                                            borderColor: '#E2E9FF'
                                        }} >
                                            <View style={{
                                                flexDirection: 'row', paddingVertical: '2%',
                                                flex: 1,
                                                //  paddingHorizontal: '2%',
                                                justifyContent: 'center'
                                            }}>

                                                <View style={{
                                                    height: "90%",
                                                    flex: 0.2,

                                                }}>
                                                    <Image
                                                        source={require('../assets/images/humanbeing.png')}
                                                        style={{
                                                            borderRadius: 20, flex: 0.9, width: '100%',
                                                            //resizeMode: 'contain', 

                                                        }}
                                                        resizeMode='contain' />
                                                </View>
                                                <View style={{
                                                    justifyContent: 'space-evenly',
                                                    flex: 0.8,
                                                    paddingLeft: "5%"
                                                }}>
                                                    <Text style={STYLES.fontSize16_000000_LouisGeorgeCafé_Bold} >
                                                        Customer No {item.id}</Text>
                                                    <Text style={STYLES.fontSize14_000000_LouisGeorgeCafé_Regular_50}>
                                                        {item.date}</Text>
                                                </View>
                                                <TouchableOpacity style={{ alignSelf: 'center' }}>
                                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                                                    />
                                                </TouchableOpacity>
                                            </View>




                                        </View>
                                    )
                                }}
                                keyExtractor={(item) => item.id}


                            />
                        </View>

                    </View>

                    <View style={{
                        flex: 0.7// backgroundColor: 'green' 
                    }}>
                        <View style={{
                            flex: 0.1, //backgroundColor: 'red',
                            paddingVertical: '1%',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Text
                                style={STYLES.fontSize20_000000_LouisGeorgeCafé_Regular}>
                                Invoices</Text>
                            <ButtonSeeAll />
                        </View>
                        <View style={{ flex: 0.9, backgroundColor: 'white' }}>
                            <FlatList
                                data={stateInvoicesFlatList}
                                renderItem={({ item }) => {
                                    console.log(item.id)
                                    console.log(item.date)
                                    return (
                                        <View style={{
                                            // backgroundColor: '#FFFFFF',
                                            height: 80,// justifyContent: "center",
                                            borderBottomWidth: 1,
                                            borderColor: '#E2E9FF',
                                            flexDirection: 'row',
                                            paddingVertical: '4%',
                                            // backgroundColor: 'red'
                                            //alignItems: 'center'
                                        }} >
                                            <View style={{
                                                flex: 0.2,
                                                //  backgroundColor: 'green' 
                                            }}>
                                                <Image source={require('../assets/images/humanbeing.png')}
                                                    resizeMode='contain' style={{
                                                        flex: 0.9,
                                                        borderRadius: 20,
                                                        width: '100%'
                                                    }} />
                                            </View>
                                            <View style={{
                                                justifyContent: 'space-evenly',
                                                flex: 0.8,
                                                paddingLeft: "5%"
                                            }}>
                                                <Text style={STYLES.fontSize16_000000_LouisGeorgeCafé_Bold} >
                                                    Invoice No # {item.id}</Text>
                                                <Text style={STYLES.fontSize14_000000_LouisGeorgeCafé_Regular_50}>
                                                    {item.date}</Text>
                                            </View>

                                            {item.status == 'active' ?
                                                <View style={{
                                                    alignSelf: 'center'
                                                }}>
                                                    <ButtonActive />
                                                    {/* <ButtonClosed /> */}
                                                </View> :

                                                <View style={{
                                                    alignSelf: 'center'
                                                }}>

                                                    <ButtonClosed />
                                                </View>
                                            }



                                        </View>
                                    )
                                }}
                                keyExtractor={(item) => item.id}


                            />
                        </View>
                    </View>
                </View>


            </View>






        </ImageBackground >



    );
};



export default Home;