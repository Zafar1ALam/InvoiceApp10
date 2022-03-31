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

const Invoices = ({ navigation }) => {
    const [stateInvoicesFlatList, setStateInvoicesFlatlist] =
        useState([
            { image: "1", id: 1, date: "21/06/2020", price: 300 },
            { image: "1", id: 3, date: "22/06/2020", price: 300 },
            { image: "1", id: 4, date: "21/06/2020", price: 400 },
            { image: "1", id: 5, date: "22/06/2020", price: 400 },
            { image: "1", id: 6, date: "21/06/2020", price: 500 },
            { image: "1", id: 7, date: "22/06/2020", price: 500 },
            { image: "1", id: 8, date: "22/06/2020", price: 600 },
            { image: "1", id: 9, date: "21/06/2020", price: 600 },
            { image: "1", id: 10, date: "22/06/2020", price: 700 },
        ]);
    return (
        <View style={STYLES.container}>
            <View style={{
                flex: 0.11,// backgroundColor: 'red',
                justifyContent: 'space-between',
            }}>
                <Text style={STYLES.fontSize31_000000_LouisGeorgeCafé_Regular}>Your Invoices</Text>
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
                    data={stateInvoicesFlatList}
                    renderItem={({ item }) => {
                        console.log(item.id)
                        console.log(item.date)
                        return (
                            <TouchableOpacity

                                //onPress={() => navigation.navigate("InvoiceView")}


                                style={{
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
                                <View style={{
                                    alignSelf: 'center'
                                }}>
                                    <Text style={STYLES.fontSize16_000000_LouisGeorgeCafé_Bold} >
                                        RS. {item.price}</Text>
                                </View>


                            </TouchableOpacity>
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



export default Invoices;