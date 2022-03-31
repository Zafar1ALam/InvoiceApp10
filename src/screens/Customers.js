import React, { useState } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import ButtonActive from '../component/ButtonActive';
import ButtonAll from '../component/ButtonAll';
import ButtonClosed from '../component/ButtonClosed';
import ButtonOverDue from '../component/ButtonOverDue';
import ButtonPending from '../component/ButtonPending';
import STYLES from '../STYLES'

const Customers = props => {
    const [stateCustomerFlatList, setStateCustomerFlatlist] =
        useState([
            { image: "1", id: 1, date: "21/06/2020", },
            { image: "1", id: 3, date: "22/06/2020", },
            { image: "1", id: 4, date: "21/06/2020", },
            { image: "1", id: 5, date: "22/06/2020", },
            { image: "1", id: 6, date: "21/06/2020", },
            { image: "1", id: 7, date: "22/06/2020", },
            { image: "1", id: 8, date: "22/06/2020", },
            { image: "1", id: 9, date: "21/06/2020", },
            { image: "1", id: 10, date: "22/06/2020", },
        ]);
    return (
        <View style={STYLES.container}>
            <View style={{
                flex: 0.11,// backgroundColor: 'red',
                justifyContent: 'space-between',
            }}>
                <Text style={STYLES.fontSize31_000000_LouisGeorgeCafé_Regular}>
                    My Customer</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <ButtonAll />
                    <ButtonActive />
                    <ButtonPending />
                    <ButtonOverDue />
                    <ButtonClosed />
                </View>
            </View>
            <View style={{
                flex: 0.89,// backgroundColor: 'green'
            }}>
                <FlatList
                    data={stateCustomerFlatList}
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
                                        Customer No {item.id}</Text>
                                    <Text style={STYLES.fontSize14_000000_LouisGeorgeCafé_Regular_50}>
                                        {item.date}</Text>
                                </View>
                                <View style={{
                                    alignSelf: 'center'
                                }}>
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`} />
                                </View>


                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id}


                />

                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: "5%",
                    right: '5%',
                    backgroundColor: '#176EFF',
                    height: 70,
                    width: 70,
                    borderRadius: 150,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={require('../assets/images/plus.png')}
                        resizeMode='contain' style={{
                            flex: 1,// width: '50%',
                            //backgroundColor: 'red'
                            // height: '50%'
                        }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default Customers;