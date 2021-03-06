import React, { useState, useRef, useEffect } from 'react';

import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity,

    ActivityIndicator,
    ScrollView, TextInput, StyleSheet, Alert
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import ButtonActive from '../component/ButtonActive';
import RBSheet from "react-native-raw-bottom-sheet";
import Button1 from '../component/Button1';
import { BottomNavigation, Checkbox } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import STYLES from '../STYLES'
import ButtonEdit from '../component/ButtonEdit';
import TextInput1 from '../component/TextInput1';
import Svgs from '../assets/svgs/Svgs'
import TextInputEdit from '../component/TextInputEdit';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNFetchBlob from 'rn-fetch-blob';
import TextArea1 from '../component/TextArea1';
import TextInputWithoutSvg from '../component/TextInputWithoutSvg';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pdf from 'react-native-pdf';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
const CreateInvoice = ({ navigation }) => {

    useEffect(() => {
        const getAllKeysAsyncStorage = async () => {
            let keys = []
            try {
                keys = await AsyncStorage.getAllKeys()
            } catch (e) {
                // read key error
            }

            console.log(keys)
            // example console.log result:
            // ['@MyApp_user', '@MyApp_key']
        }
        getAllKeysAsyncStorage()
        const getMultipleRecordAsyncStorage = async () => {

            let values
            try {
                values = await AsyncStorage.multiGet(["companyId", "companyName",
                    "companyLocation", "companyPhoneNo", "companyWebsite"

                ])
                setStateCompanyId(values[0][1])
                updateSetStateFromName(values[1][1])
                updateSetStateFromAddress(values[2][1])
                updateSetStateFromPhoneNo(values[3][1])
                updateSetStateFromWeb(values[4][1])
                console.log(values[0][1])
                console.log(values[1][1])
                console.log(values[2][1])
                console.log(values[3][1])
                console.log(values[4][1])
            } catch (e) {
                // read error
            }
            //console.log(values)

            // example console.log output:
            // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
        }
        getMultipleRecordAsyncStorage()




        setStateInvoiceNumber(Math.floor(10000000 + Math.random() * 90000000))

    }, [])


    const [checked, setChecked] = useState(false);
    const [showActivityIndicator, setStateActivityIndicator] = useState(false)

    const [stateImageEditFrom, setStateImageEditFrom] = useState(null);
    const [stateImageEditBilledTo, setStateImageEditBilledTo] = useState(null);

    const refRBSheetEditFrom = useRef();
    const refRBSheetEditBilledTo = useRef();
    const refRBSheetAdd = useRef();
    const refRBSheetTaxDiscount = useRef();
    const [stateDate, setStateDate] = useState('2-2-1999')
    const [stateServerDate, setStateServerDate] = useState()
    const [stateFromName, setStateFromName] = useState('')
    const [stateFromAddress, setStateFromAddress] = useState('')
    const [stateFromPhoneNo, setStateFromPhoneNo] = useState('')
    const [stateFromWeb, setStateFromWeb] = useState('')

    const [stateToName, setStateToName] = useState('')
    const [stateToAddress, setStateToAddress] = useState('')
    const [stateToPhoneNo, setStateToPhoneNo] = useState('')
    const [stateToWeb, setStateToWeb] = useState('')

    const [updateStateFromName, updateSetStateFromName] = useState('User Name Here')
    const [updateStateFromAddress, updateSetStateFromAddress] = useState('This is Address')
    const [updateStateFromPhoneNo, updateSetStateFromPhoneNo] = useState('+92 300 8764218')
    const [updateStateFromWeb, updateSetStateFromWeb] = useState('www.web.com')

    const [stateCompanyId, setStateCompanyId] = useState();
    const [stateInvoiceNumber, setStateInvoiceNumber] = useState();

    const [updateStateToName, updateSetStateToName] = useState('')
    const [updateStateToAddress, updateSetStateToAddress] = useState('')
    const [updateStateToPhoneNo, updateSetStateToPhoneNo] = useState('')
    const [updateStateToWeb, updateSetStateToWeb] = useState('')

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [stateSubTotal, setStateSubTotal] = useState(0);
    const [stateTaxEditing, setStateTaxEditing] = useState(false)

    const [stateTax, setStateTax] = useState('')

    const [stateDiscount, setStateDiscount] = useState('')
    const [updateStateTax, updateSetStateTax] = useState(0)

    const [updateStateDiscount, updateSetStateDiscount] = useState(0)
    const [stateTotal, setStateTotal] = useState(0);

    const [stateEditTax, setStateEditTax] = useState(false)
    const [stateEditDiscount, setStateEditDiscount] = useState(false)

    const [stateAddObject, setStateAddObject] = useState(
        {
            id: '',
            description: '',
            quantity: '',
            price: '',
            discount: '',
            total: ''
        })
    const [stateAddArrayObject, setStateAddArrayObject] = useState(
        [
            //  id: 1,
            // description: 'ff',
            // quantity: 1,
            // price: 0,
            // discount: '',
            // total: 100
        ])
    const [isValidStateServerDate, isValidSetStateServerDate] = useState(true)

    const [isValidStateToName, isValidSetStateToName] = useState(true)
    const [isValidStateToAddress, isValidSetStateToAddress] = useState(true)
    const [isValidStateToPhoneNo, isValidSetStateToPhoneNo] = useState(true)
    const [isValidStateToWebsite, isValidSetStateToWebsite] = useState(true)
    const [isValidStateDescription, isValidSetStateDescription] = useState(true)
    const [isValidStatePrice, isValidSetStatePrice] = useState(true)
    const [isValidStateQuantity, isValidSetStateQuantity] = useState(true)
    const [isValidStateDiscount, isValidSetStateDiscount] = useState(true)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        //    console.log(typeof (date))

        //  console.log(typeof (stringDate))
        var d = new Date();
        d = date
        console.log(d)
        //console.log(d)
        console.log(d.getDate() + "-" +
            (d.getMonth() + 1) + "-" +
            d.getFullYear())
        setStateDate(d.getDate() + "-" +
            (d.getMonth() + 1) + "-" +
            d.getFullYear())

        setStateServerDate(d)
        isValidSetStateServerDate(true)

        hideDatePicker();
    };



    const imageTakeFromGalleryEditFromCompany = () => {


        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImageEditFrom(image.path)
        });

    }

    const imageTakeFromGalleryEditBilledTo = () => {


        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImageEditBilledTo(image.path)
        });

    }


    const createPDF = async () => {
        console.log(`${stateDate} , ${updateStateFromName}, ${updateStateFromPhoneNo} ,${updateStateFromAddress},
        `)
        let options = {
            html: `<html
            <body >
            <div>
             <p style="font-size:24px;text-align:center;">
                    Create Invoice</p>
                <div 
              ">
                        <p style="font-size:24px;
                        float:left">Date: ${stateDate}</p>
                   
                    <p style="font-size:24px;
                    float:right">Invoice Number:  ${stateInvoiceNumber}</p>
                </div>
                <div >
                <p style="font-size:18px;clear:left;
                font-weight:bold;font-family:arial;
               
                ">From</p>

                </div>
                <div style="background-color:grey;" >
                <p style="font-size:14px;
                float:left;margin-right:10px;
                
                ">Name: </p>
                <p style="font-size:14px;
                float:left;
                ">${updateStateFromName}</p>

                </div>

                <div >
                <p style="font-size:14px;
                float:left;margin-right:10px;clear:left;
                ">Address: </p>
                <p style="font-size:14px;
                float:left;
                ">${updateStateFromAddress}</p>

                </div>














                <div>
                <p style="font-size:14px;
                float:left;margin-right:10px;clear:left;
                ">PhoneNumber: </p>
                <p style="font-size:14px;
                float:left;
                ">${updateStateFromPhoneNo}</p>

                </div>
                <div style="clear:left;clear:right;
                ">
                <p style="font-size:14px;
                float:left;margin-right:10px;clear:left;
                ">Website: </p>
                <p style="font-size:14px;
                float:left;
                ">${updateStateFromWeb}</p>

                </div>



                <div >
                <p style="font-size:18px;clear:left;
                font-weight:bold;font-family:arial;
                ">Billed To: </p>

                </div>
                <div 
                >
                <p style="font-size:14px;
                float:left;margin-right:10px
                ">Name: </p>
                <p style="font-size:14px;
                float:left;
                ">${updateStateToName}</p>

                </div>

                <div >
                <p style="font-size:14px;
                float:left;margin-right:10px;clear:left;
                ">Address: </p>
                <p style="font-size:14px;
                float:left;
                ">${updateStateToAddress}</p>

                </div>














                <div>
                <p style="font-size:14px;
                float:left;margin-right:10px;clear:left;
                ">PhoneNumber: </p>
                <p style="font-size:14px;
                float:left;
                ">${updateStateToPhoneNo}</p>

                </div>
                <div style="clear:left;clear:right;
                ">
                <p style="font-size:14px;
                float:left;margin-right:10px;clear:left;
                ">Website: </p>
                <p style="font-size:14px;
                float:left;
                ">${updateStateToWeb}</p>

                </div>
              
               
                  <div 
                 >
                        <p style="font-size:24px;clear:left;
                        float:left;
                        ">Subtotal</p>
                   
                    <p style="font-size:24px;
                   
                    float:right">${stateSubTotal}</p>
                </div>

                <div style="background-color:red;
                ">
                          <p style="font-size:24px;clear:left;
                          float:left">Discount</p>
                     
                      <p style="font-size:24px;
                      float:right">${stateDiscount}</p>
                </div>

                  <div style="background-color:red;
                  ">
                            <p style="font-size:24px;clear:left;
                            float:left">Tax</p>
                       
                        <p style="font-size:24px;
                        float:right">${stateTax}</p>
                  </div>

                   <div style="background-color:red;
                    ">
                              <p style="font-size:24px;clear:left;
                              float:left">Total</p>
                         
                          <p style="font-size:24px;
                          float:right">${stateTotal}</p>
                    </div>
               
                                
                </body>
                </html>
                `,
            fileName: 'test12',
            directory: 'Documents',


        };

        let file = await RNHTMLtoPDF.convert(options)
        var fromfile = (file.filePath);
        // console.log(file);
        //alert(file.filePath);
        console.log(fromfile)


        navigation.navigate("Pdf1", {

            otherParam: fromfile,
        });







    }

    const sendDataServer = () => {
        console.log(stateServerDate)
        if (stateServerDate === undefined) {
            isValidSetStateServerDate(false)
            console.log('fffffffffffffffffffff')
        }
        if (stateServerDate === undefined) {
            isValidSetStateServerDate(false)
            console.log('fffffffffffffffffffff')
        }
        if (stateServerDate === undefined) {
            isValidSetStateServerDate(false)
            console.log('fffffffffffffffffffff')
        }
        if (stateServerDate === undefined) {
            isValidSetStateServerDate(false)
            console.log('fffffffffffffffffffff')
        }
        if (stateServerDate === undefined) {
            isValidSetStateServerDate(false)

        }
        if (updateStateToName.length == 0 || updateStateToPhoneNo.length == 0 ||
            updateStateToWeb.length == 0 || updateStateToAddress.length == 0) {
            if (updateStateToName.length == 0) {
                isValidSetStateToName(false)
            }
            if (updateStateToAddress.length == 0) {
                isValidSetStateToAddress(false)
            }
            if (updateStateToPhoneNo.length == 0) {
                isValidSetStateToPhoneNo(false)
            }
            if (updateStateToWeb.length == 0) {
                isValidSetStateToWebsite(false)
            }
            Alert.alert("plz enter Billed To infotrmation")
        }
        //     console.log(`InvoiceNumber: ${stateInvoiceNumber},
        //       Date: ${stateServerDate},
        //       From:${stateCompanyId}
        //   ToName: ${updateStateToName},
        //       ToPhoneNumber: ${updateStateToPhoneNo},
        //       ToWebsite:${updateStateToWeb},
        //       Discount: ${stateDiscount},
        //       Tax: ${stateTax},
        //       SubTotal: ${stateSubTotal},
        //       Total: ${stateTotal},
        //       Item:${stateAddArrayObject})`)
        if (stateServerDate != undefined && updateStateToName.length != 0 && updateStateToPhoneNo.length != 0 &&
            updateStateToWeb.length != 0 && updateStateToAddress.length != 0) {
            setStateActivityIndicator(true)
            console.log(typeof (stateServerDate))
            fetch('https://mtechub-invoiceapp-server.herokuapp.com/api/Invoice/Add', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({



                    InvoiceNumber: stateInvoiceNumber,
                    Date: stateServerDate,
                    From: stateCompanyId,
                    ToName: updateStateToName,
                    ToPhoneNumber: updateStateToPhoneNo,
                    ToWebsite: updateStateToWeb,
                    Discount: updateStateDiscount,
                    Tax: updateStateTax,
                    SubTotal: stateSubTotal,
                    Total: stateTotal,
                    Item: stateAddArrayObject
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStateActivityIndicator(false)
                    console.log(json)
                    // console.log(json.Record._id)
                    // storeData(json.Record._id)
                    // if (json.success) {
                    //     navigation.navigate("Login")
                    // }

                    // else {
                    //     Alert.alert('plz insert valid data')
                    // }
                })
                .catch((error) => {

                    console.error(error);
                });


        }
    }
    return (
        <View style={{
            // height: 'auto',
            backgroundColor: '#FFFFFF',
            paddingVertical: '2%',
            paddingHorizontal: '5%',
            //backgroundColor: 'red'
            //width: 'auto'
        }} >


            {!showActivityIndicator ?
                <View >



                    <View style={{
                        // backgroundColor: 'blue',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1,
                        borderBottomColor: '#E2E9FF',
                        marginBottom: '2%',
                        alignItems: "center",
                        // height: 80
                    }}>

                        <FlatList
                            // scrollEnabled={false}
                            // showsVerticalScrollIndicator={false}
                            data={stateAddArrayObject}

                            ListHeaderComponent={() => (
                                <View>
                                    <Text style={[STYLES.fontSize24_000000_LouisGeorgeCaf??_Regular,
                                    { alignSelf: 'center', marginBottom: '2%' }]}>
                                        Create Invoice</Text>
                                    <View style={{
                                        // backgroundColor: 'green',
                                        flexDirection: 'row', justifyContent: 'space-between',
                                        marginBottom: '2%',
                                    }}>
                                        <View>
                                            <TouchableOpacity
                                                onPress={showDatePicker}
                                            >
                                                <Text style={STYLES.fontSize15_000000_LouisGeorgeCaf??_Regular
                                                }>Date: {stateDate}</Text>
                                            </TouchableOpacity>
                                            {isValidStateServerDate == false ?
                                                <Text style={{ color: 'red' }}>Add Date</Text> :
                                                null}
                                        </View>

                                        <Text style={STYLES.fontSize15_000000_LouisGeorgeCaf??_Regular
                                        }>Invoice Number:  {stateInvoiceNumber}</Text>
                                    </View>
                                    <View style={{
                                        //backgroundColor: 'green',
                                        paddingHorizontal: '1%'
                                    }}>
                                        <View style={{
                                            //    backgroundColor: 'yellow',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginBottom: '3%'
                                        }}>
                                            <Text style={STYLES.fontSize18_000000_Arial_Bold}>From :</Text>
                                            <ButtonEdit onPress={() => refRBSheetEditFrom.current.open()} />
                                        </View>
                                        <View style={{
                                            //backgroundColor: 'blue', 
                                            justifyContent: 'space-between', paddingHorizontal: '1%',
                                            // height: 'auto'
                                        }}>
                                            <View style={{ flexDirection: 'row', marginBottom: '1%' }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.887" height="17.887" viewBox="0 0 17.887 17.887">
                  <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M8.943,10.061A5.031,5.031,0,1,0,3.913,5.031,5.032,5.032,0,0,0,8.943,10.061Zm4.472,1.118H11.49a6.081,6.081,0,0,1-5.094,0H4.472A4.471,4.471,0,0,0,0,15.651v.559a1.677,1.677,0,0,0,1.677,1.677H16.21a1.677,1.677,0,0,0,1.677-1.677v-.559A4.471,4.471,0,0,0,13.415,11.179Z" fill="#a6a6a6"/>
                </svg>
                `} />
                                                <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                    , { marginLeft: '5%' }]}>{updateStateFromName}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', marginBottom: '1%' }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.887" height="17.887" viewBox="0 0 17.887 17.887">
                  <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M8.943,10.061A5.031,5.031,0,1,0,3.913,5.031,5.032,5.032,0,0,0,8.943,10.061Zm4.472,1.118H11.49a6.081,6.081,0,0,1-5.094,0H4.472A4.471,4.471,0,0,0,0,15.651v.559a1.677,1.677,0,0,0,1.677,1.677H16.21a1.677,1.677,0,0,0,1.677-1.677v-.559A4.471,4.471,0,0,0,13.415,11.179Z" fill="#a6a6a6"/>
                </svg>
                `} />
                                                <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                    , { marginLeft: '5%', }]}>{updateStateFromAddress}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', marginBottom: '1%' }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="13.188" height="13.188" viewBox="0 0 13.188 13.188">
                  <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M12.812,9.32,9.927,8.083a.618.618,0,0,0-.721.178L7.928,9.822A9.548,9.548,0,0,1,3.364,5.258L4.925,3.98A.617.617,0,0,0,5.1,3.259L3.866.374A.622.622,0,0,0,3.158.016L.479.634a.618.618,0,0,0-.479.6A11.951,11.951,0,0,0,11.952,13.189a.618.618,0,0,0,.6-.479l.618-2.679a.626.626,0,0,0-.361-.711Z" transform="translate(0 0)" fill="#a6a6a6"/>
                </svg>
                
                `} />
                                                <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                    , { marginLeft: '5%', }]}>{updateStateFromPhoneNo}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', marginBottom: '4%' }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.176" height="16.179" viewBox="0 0 16.176 16.179">
                  <path id="Icon_awesome-globe" data-name="Icon awesome-globe" d="M10.976,5.521C10.5,2.608,9.388.563,8.09.563S5.676,2.608,5.2,5.521ZM4.958,8.652a20.446,20.446,0,0,0,.108,2.088H11.11a20.446,20.446,0,0,0,.108-2.088,20.446,20.446,0,0,0-.108-2.088H5.066A20.446,20.446,0,0,0,4.958,8.652ZM15.55,5.521A8.107,8.107,0,0,0,10.4.9a11.009,11.009,0,0,1,1.631,4.619ZM5.78.9A8.1,8.1,0,0,0,.63,5.521H4.152A10.965,10.965,0,0,1,5.78.9ZM15.9,6.564H12.157c.069.685.108,1.386.108,2.088s-.039,1.4-.108,2.088H15.9a8.02,8.02,0,0,0,.281-2.088A8.16,8.16,0,0,0,15.9,6.564ZM3.914,8.652c0-.7.039-1.4.108-2.088H.281a7.908,7.908,0,0,0,0,4.175H4.019C3.953,10.055,3.914,9.353,3.914,8.652ZM5.2,11.784c.473,2.913,1.589,4.958,2.887,4.958S10.5,14.7,10.976,11.784ZM10.4,16.4a8.114,8.114,0,0,0,5.154-4.619H12.03A11.009,11.009,0,0,1,10.4,16.4ZM.63,11.784A8.107,8.107,0,0,0,5.783,16.4a11.009,11.009,0,0,1-1.631-4.619H.63Z" transform="translate(0 -0.563)" fill="#a6a6a6"/>
                </svg>
                
                `} />
                                                <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                    , { marginLeft: '5%', }]}>{updateStateFromWeb}</Text>
                                            </View>

                                        </View>
                                    </View>
                                    <View style={{
                                        // backgroundColor: 'pink',
                                        paddingHorizontal: '1%'
                                    }}>




                                        <View style={{
                                            //backgroundColor: 'yellow',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginBottom: '4%'
                                        }}>
                                            <Text style={STYLES.fontSize18_000000_Arial_Bold}>Billed To :</Text>
                                            <ButtonEdit onPress={() => { refRBSheetEditBilledTo.current.open() }} />
                                        </View>
                                        <View style={{
                                            //backgroundColor: 'blue', 
                                            justifyContent: 'space-between', paddingHorizontal: '1%'
                                        }}>
                                            <View style={{ flexDirection: 'row', marginBottom: '1%' }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.887" height="17.887" viewBox="0 0 17.887 17.887">
                  <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M8.943,10.061A5.031,5.031,0,1,0,3.913,5.031,5.032,5.032,0,0,0,8.943,10.061Zm4.472,1.118H11.49a6.081,6.081,0,0,1-5.094,0H4.472A4.471,4.471,0,0,0,0,15.651v.559a1.677,1.677,0,0,0,1.677,1.677H16.21a1.677,1.677,0,0,0,1.677-1.677v-.559A4.471,4.471,0,0,0,13.415,11.179Z" fill="#a6a6a6"/>
                </svg>
                `} />

                                                {updateStateToName.length == 0 ?
                                                    <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                        , { marginLeft: '5%' }]}>user name here</Text> :
                                                    <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                        , { marginLeft: '5%' }]}>{updateStateToName}</Text>}

                                            </View>

                                            <View style={{ flexDirection: 'row', marginBottom: '1%' }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.887" height="17.887" viewBox="0 0 17.887 17.887">
                  <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M8.943,10.061A5.031,5.031,0,1,0,3.913,5.031,5.032,5.032,0,0,0,8.943,10.061Zm4.472,1.118H11.49a6.081,6.081,0,0,1-5.094,0H4.472A4.471,4.471,0,0,0,0,15.651v.559a1.677,1.677,0,0,0,1.677,1.677H16.21a1.677,1.677,0,0,0,1.677-1.677v-.559A4.471,4.471,0,0,0,13.415,11.179Z" fill="#a6a6a6"/>
                </svg>
                `} />
                                                {updateStateToAddress.length == 0 ?
                                                    <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                        , { marginLeft: '5%' }]}>Address here</Text> :
                                                    <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                        , { marginLeft: '5%' }]}>{updateStateToAddress}</Text>
                                                }

                                            </View>

                                            <View style={{ flexDirection: 'row', marginBottom: '1%' }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="13.188" height="13.188" viewBox="0 0 13.188 13.188">
                  <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M12.812,9.32,9.927,8.083a.618.618,0,0,0-.721.178L7.928,9.822A9.548,9.548,0,0,1,3.364,5.258L4.925,3.98A.617.617,0,0,0,5.1,3.259L3.866.374A.622.622,0,0,0,3.158.016L.479.634a.618.618,0,0,0-.479.6A11.951,11.951,0,0,0,11.952,13.189a.618.618,0,0,0,.6-.479l.618-2.679a.626.626,0,0,0-.361-.711Z" transform="translate(0 0)" fill="#a6a6a6"/>
                </svg>
                
                `} />
                                                {updateStateToPhoneNo.length == 0 ?
                                                    <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                        , { marginLeft: '5%' }]}> +92 300 8764218</Text> :
                                                    <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                        , { marginLeft: '5%' }]}>{updateStateToPhoneNo}</Text>}

                                            </View>

                                            <View style={{ flexDirection: 'row', marginBottom: '1%' }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.176" height="16.179" viewBox="0 0 16.176 16.179">
                  <path id="Icon_awesome-globe" data-name="Icon awesome-globe" d="M10.976,5.521C10.5,2.608,9.388.563,8.09.563S5.676,2.608,5.2,5.521ZM4.958,8.652a20.446,20.446,0,0,0,.108,2.088H11.11a20.446,20.446,0,0,0,.108-2.088,20.446,20.446,0,0,0-.108-2.088H5.066A20.446,20.446,0,0,0,4.958,8.652ZM15.55,5.521A8.107,8.107,0,0,0,10.4.9a11.009,11.009,0,0,1,1.631,4.619ZM5.78.9A8.1,8.1,0,0,0,.63,5.521H4.152A10.965,10.965,0,0,1,5.78.9ZM15.9,6.564H12.157c.069.685.108,1.386.108,2.088s-.039,1.4-.108,2.088H15.9a8.02,8.02,0,0,0,.281-2.088A8.16,8.16,0,0,0,15.9,6.564ZM3.914,8.652c0-.7.039-1.4.108-2.088H.281a7.908,7.908,0,0,0,0,4.175H4.019C3.953,10.055,3.914,9.353,3.914,8.652ZM5.2,11.784c.473,2.913,1.589,4.958,2.887,4.958S10.5,14.7,10.976,11.784ZM10.4,16.4a8.114,8.114,0,0,0,5.154-4.619H12.03A11.009,11.009,0,0,1,10.4,16.4ZM.63,11.784A8.107,8.107,0,0,0,5.783,16.4a11.009,11.009,0,0,1-1.631-4.619H.63Z" transform="translate(0 -0.563)" fill="#a6a6a6"/>
                </svg>
                
                `} />
                                                {updateStateToWeb.length == 0 ?
                                                    <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                        , { marginLeft: '5%', marginBottom: '4%' }]}>www.google.com</Text> :
                                                    <Text style={[STYLES.fontSize14_000000_LouisGeorgeCaf??_Regular
                                                        , { marginLeft: '5%', marginBottom: '4%' }]}>{updateStateToWeb}</Text>
                                                }
                                            </View>

                                        </View>
                                    </View>

                                    <View style={{
                                        //backgroundColor: 'red',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View style={{
                                            width: '40%', //backgroundColor: 'green',
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={[STYLES.fontSize18_000000_Arial_Bold,
                                            ]}>

                                                Description</Text>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            width: '17%', //backgroundColor: 'green'
                                        }}>
                                            <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                                                Price</Text>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            width: '24%',// backgroundColor: 'red'
                                        }}>
                                            <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                                                Quantity</Text>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            width: '17%',// backgroundColor: 'green'
                                        }}>
                                            <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                                                Total</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                            ListFooterComponent={() => (
                                <View>
                                    <View style={{
                                        // backgroundColor: 'orange',
                                        justifyContent: 'space-between',
                                        marginBottom: '5%'
                                    }}>


                                        <TouchableOpacity
                                            onPress={() => {
                                                refRBSheetAdd.current.open()
                                                // setStateSubTotal(0)
                                                // updateSetStateDiscount(0)
                                                // updateSetStateTax(0)
                                                // setStateTotal(0)
                                            }}
                                            style={{
                                                borderRadius: 33,
                                                borderColor: '#707070',
                                                backgroundColor: '#ffffff',
                                                borderStyle: 'dashed',
                                                marginHorizontal: '15%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderWidth: 1,
                                                height: 50,
                                                marginTop: '3%',
                                                marginBottom: '5%'

                                            }}>
                                            <Text style={STYLES.fontSize25_939393_Arial_Bold}>Add +</Text>
                                        </TouchableOpacity>

                                        <View style={{ marginBottom: '5%', flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity
                                                onPress={() => { refRBSheetTaxDiscount.current.open() }}
                                                style={{
                                                    marginRight: '5%',
                                                    borderRadius: 26,
                                                    backgroundColor: "#2979FF",
                                                    //paddingVertical: "6%",
                                                    paddingHorizontal: '3%',
                                                    paddingVertical: '3%',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                <Text style={STYLES.fontSize17_FFFFFF_LouisGeorgeCaf??_Bold}>Edit</Text>
                                            </TouchableOpacity>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={STYLES.fontSize18_000000_Arial_Bold}>Subtotal</Text>
                                                    <Text style={[STYLES.fontSize18_000000_Arial_Regular,
                                                    ]}>{parseFloat(stateSubTotal).toFixed(2)} Rs</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={STYLES.fontSize18_000000_Arial_Bold}>Discount</Text>



                                                    <Text


                                                        style={[STYLES.fontSize18_000000_Arial_Regular,
                                                        ]}>{updateStateDiscount}%</Text>



                                                </View>


                                                <View style={{
                                                    flexDirection: 'row', justifyContent: 'space-between',
                                                    //backgroundColor: 'red',
                                                    alignItems: 'center',
                                                    paddingVertical: '0%'
                                                }}>
                                                    <Text style={STYLES.fontSize18_000000_Arial_Bold}>Tax</Text>

                                                    <Text

                                                        style={[STYLES.fontSize18_000000_Arial_Regular,
                                                        ]}>{updateStateTax}%</Text>

                                                </View>

                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={STYLES.fontSize18_000000_Arial_Bold}>Total</Text>
                                                    <Text style={STYLES.fontSize18_000000_Arial_Regular}>{parseFloat(stateTotal).toFixed(2)} RS</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row', alignItems: 'center',
                                            justifyContent: 'space-between', marginBottom: '3%'
                                        }}>
                                            <View style={{ width: '70%' }}>
                                                <Button1 text="Preview"
                                                    onPress={() => {
                                                        createPDF()
                                                    }}
                                                />
                                            </View>
                                            <TouchableOpacity onPress={() => {
                                                sendDataServer()
                                            }}
                                            >
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="18.21" height="15.172" viewBox="0 0 18.21 15.172">
  <path id="Icon_ionic-ios-share-alt" data-name="Icon ionic-ios-share-alt" d="M22.551,13.122l-6.69-6.259A.342.342,0,0,0,15.6,6.75c-.209.009-.474.156-.474.379v3.139a.2.2,0,0,1-.171.194C8.3,11.482,5.5,16.46,4.505,21.628c-.038.2.237.394.365.232a12.092,12.092,0,0,1,10.052-5.092.235.235,0,0,1,.2.228v3.082a.407.407,0,0,0,.687.251l6.737-6.368a.524.524,0,0,0,.166-.4A.635.635,0,0,0,22.551,13.122Z" transform="translate(-4.502 -6.749)" fill="#176eff"/>
</svg>

`} /></TouchableOpacity>
                                            <TouchableOpacity style={{ marginRight: '3%' }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.626" height="13.301" viewBox="0 0 16.626 13.301">
  <path id="Icon_material-email" data-name="Icon material-email" d="M17.964,6H4.663A1.66,1.66,0,0,0,3.008,7.663L3,17.638A1.668,1.668,0,0,0,4.663,19.3h13.3a1.668,1.668,0,0,0,1.663-1.663V7.663A1.668,1.668,0,0,0,17.964,6Zm0,3.325-6.651,4.157L4.663,9.325V7.663l6.651,4.157,6.651-4.157Z" transform="translate(-3 -6)" fill="#176eff"/>
</svg>
`} /></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                            renderItem={({ item }) => {
                                console.log(item)
                                // console.log(item.description)
                                // console.log(item.price)
                                // console.log(item.quantity)
                                // console.log(item.discount)
                                return (
                                    <View style={{
                                        // backgroundColor: '#FFFFFF',
                                        height: 80,// justifyContent: "center",
                                        borderBottomWidth: 1,
                                        borderColor: '#E2E9FF',
                                        flexDirection: 'row',
                                        // paddingVertical: '4%',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                        // backgroundColor: 'red'
                                        //alignItems: 'center'
                                    }} >
                                        <View style={{
                                            width: '40%', //backgroundColor: 'green',
                                            justifyContent: 'center'
                                        }}>
                                            <Text
                                                numberOfLines={2}
                                                style={STYLES.fontSize15_000000_Arial_Regular}>{item.description}</Text>

                                            {item == null ? none :
                                                <Text style={STYLES.fontSize15_000000_Arial_Regular_48}>

                                                    discount ({item.discount}%)

                                                </Text>
                                            }

                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            width: '17%', //backgroundColor: 'green'
                                        }}>
                                            <Text style={STYLES.fontSize18_000000_Arial_Regular}>{item.price}</Text>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            width: '24%', //backgroundColor: 'red'
                                        }}>
                                            <Text style={STYLES.fontSize18_000000_Arial_Regular}>{item.quantity}</Text>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            width: '17%', //backgroundColor: 'green'
                                        }}>
                                            <Text style={STYLES.fontSize18_000000_Arial_Regular}>{item.total}</Text>

                                        </View>
                                    </View>
                                )
                            }}
                            keyExtractor={(item) => item.id}


                        />
                    </View>



                    {/* //Edit from*/}

                    <RBSheet
                        // closeOnDragDown={true}
                        dragFromTopOnly={true}
                        height={500}
                        animationType="slide"
                        ref={refRBSheetEditFrom}


                        // closeOnPressBack={false}
                        customStyles={{
                            container: {
                                //borderRadius: 40,
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40,
                                paddingVertical: "5%"
                            },

                        }}

                    >
                        <View style={{
                            // justifyContent: 'space-evenly',
                            flex: 1,
                            paddingHorizontal: '5%'
                        }}>
                            <View style={{
                                flex: 0.30,// backgroundColor: 'red',
                                justifyContent: 'space-between',
                                // marginBottom: '5%'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Text style={STYLES.fontSize22_2979FF_Arial_Bold}>Edit From (Company)</Text>

                                    <TouchableOpacity onPress={() => refRBSheetEditFrom.current.close()}>
                                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                                        />
                                    </TouchableOpacity>
                                </View>
                                {stateImageEditFrom === null ?

                                    <TouchableOpacity onPress={() => imageTakeFromGalleryEditFromCompany()}>
                                        <SvgXml
                                            style={{ alignSelf: 'center' }}
                                            xml={`<svg xmlns="http://www.w3.org/2000/svg" width="69.347" height="69.347" viewBox="0 0 69.347 69.347">
  <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M34.674.563A34.674,34.674,0,1,0,69.347,35.236,34.668,34.668,0,0,0,34.674.563Zm0,13.422a12.3,12.3,0,1,1-12.3,12.3A12.3,12.3,0,0,1,34.674,13.985Zm0,48.1a26.792,26.792,0,0,1-20.483-9.535,15.588,15.588,0,0,1,13.772-8.361,3.421,3.421,0,0,1,.993.154,18.512,18.512,0,0,0,5.718.965,18.441,18.441,0,0,0,5.718-.965,3.421,3.421,0,0,1,.993-.154,15.588,15.588,0,0,1,13.772,8.361A26.792,26.792,0,0,1,34.674,62.08Z" transform="translate(0 -0.563)" fill="#949494"/>
</svg>
`} />
                                    </TouchableOpacity> :
                                    <TouchableOpacity onPress={() => imageTakeFromGalleryEditFromCompany()}>
                                        <Image source={{ uri: stateImageEditFrom }}
                                            resizeMode='cover' style={{
                                                borderRadius: 50,
                                                alignSelf: 'center', height: 69, width: 69
                                            }} />
                                    </TouchableOpacity>

                                }

                            </View>
                            <View style={{
                                flex: 0.55, //backgroundColor: 'green',
                                paddingHorizontal: '5%',
                                justifyContent: 'space-evenly'
                            }}>

                                <TextInputEdit placeholder="Name" xml={Svgs.phone}
                                    onChangeText={(text) => setStateFromName(text)}

                                />
                                <TextInputEdit placeholder="Location" xml={Svgs.phone}
                                    onChangeText={(text) => setStateFromAddress(text)} />

                                <TextInputEdit placeholder="Phone No"
                                    keyboardType="numeric"
                                    xml={Svgs.phone}
                                    onChangeText={(text) => setStateFromPhoneNo(text)} />
                                <TextInputEdit placeholder="Website" xml={Svgs.globe}
                                    onChangeText={(text) => setStateFromWeb(text)} />



                            </View>

                            <View style={{
                                paddingHorizontal: '12%',
                                justifyContent: 'flex-end',
                                flex: 0.15, //backgroundColor: 'red'
                            }}>
                                <Button1 onPress={() => {
                                    updateSetStateFromWeb(stateFromWeb)
                                    updateSetStateFromName(stateFromName)
                                    updateSetStateFromAddress(stateFromAddress)
                                    updateSetStateFromPhoneNo(stateFromPhoneNo)
                                    refRBSheetEditFrom.current.close()
                                }}
                                    text="Update"

                                //  onPress={() => refRBSheetEditFrom.current.open()}
                                />
                            </View>
                        </View>
                    </RBSheet>

                    {/* //Edit to */}
                    <RBSheet
                        // closeOnDragDown={true}
                        dragFromTopOnly={true}
                        height={550}
                        animationType="slide"
                        ref={refRBSheetEditBilledTo}


                        // closeOnPressBack={false}
                        customStyles={{
                            container: {
                                //borderRadius: 40,
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40,
                                paddingVertical: "5%"
                            },

                        }}

                    >
                        <View style={{
                            // justifyContent: 'space-evenly',
                            flex: 1,
                            paddingHorizontal: '5%'
                        }}>
                            <View style={{
                                flex: 0.25,// backgroundColor: 'red',
                                justifyContent: 'space-between',
                                // marginBottom: '5%'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Text style={STYLES.fontSize22_2979FF_Arial_Bold}>Billed To</Text>

                                    <TouchableOpacity onPress={() => refRBSheetEditBilledTo.current.close()}>
                                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                                        />
                                    </TouchableOpacity>
                                </View>

                                {stateImageEditBilledTo === null ?

                                    <TouchableOpacity onPress={() => imageTakeFromGalleryEditBilledTo()}>
                                        <SvgXml
                                            style={{ alignSelf: 'center' }}
                                            xml={`<svg xmlns="http://www.w3.org/2000/svg" width="69.347" height="69.347" viewBox="0 0 69.347 69.347">
<path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M34.674.563A34.674,34.674,0,1,0,69.347,35.236,34.668,34.668,0,0,0,34.674.563Zm0,13.422a12.3,12.3,0,1,1-12.3,12.3A12.3,12.3,0,0,1,34.674,13.985Zm0,48.1a26.792,26.792,0,0,1-20.483-9.535,15.588,15.588,0,0,1,13.772-8.361,3.421,3.421,0,0,1,.993.154,18.512,18.512,0,0,0,5.718.965,18.441,18.441,0,0,0,5.718-.965,3.421,3.421,0,0,1,.993-.154,15.588,15.588,0,0,1,13.772,8.361A26.792,26.792,0,0,1,34.674,62.08Z" transform="translate(0 -0.563)" fill="#949494"/>
</svg>
`} />
                                    </TouchableOpacity> :
                                    <TouchableOpacity onPress={() => imageTakeFromGalleryEditBilledTo()}>
                                        <Image source={{ uri: stateImageEditBilledTo }}
                                            resizeMode='cover' style={{
                                                borderRadius: 50,
                                                alignSelf: 'center', height: 69, width: 69
                                            }} />
                                    </TouchableOpacity>

                                }
                            </View>
                            <View style={{
                                flex: 0.60, //backgroundColor: 'green',
                                paddingHorizontal: '5%',
                                justifyContent: 'space-evenly'
                            }}>

                                <TextInputEdit placeholder="Name" xml={Svgs.phone}
                                    onChangeText={(text) => {
                                        isValidSetStateToName(true)
                                        setStateToName(text)
                                    }}
                                />
                                {isValidStateToName == false ?
                                    <Text style={{ color: 'red' }}>Enter Name</Text>
                                    : null}
                                <TextInputEdit placeholder="Location" xml={Svgs.phone}
                                    onChangeText={(text) => {
                                        isValidSetStateToAddress(true)
                                        setStateToAddress(text)
                                    }} />
                                {isValidStateToAddress == false ?
                                    <Text style={{ color: 'red' }}>Enter Address</Text>
                                    : null}
                                <TextInputEdit placeholder="Phone No" xml={Svgs.phone}
                                    keyboardType="numeric"
                                    onChangeText={(text) => {
                                        isValidSetStateToPhoneNo(true)
                                        setStateToPhoneNo(text)
                                    }} />
                                {isValidStateToPhoneNo == false ?
                                    <Text style={{ color: 'red' }}>Enter PhoneNo</Text>
                                    : null}
                                <TextInputEdit placeholder="Website" xml={Svgs.globe}
                                    onChangeText={(text) => {
                                        isValidSetStateToWebsite(true)
                                        setStateToWeb(text)
                                    }} />
                                {isValidStateToWebsite == false ?
                                    <Text style={{ color: 'red' }}>Enter website</Text>
                                    : null}
                                <View style={{
                                    // backgroundColor: '#2979FF',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    //marginBottom: '5%'
                                    // backgroundColor: 'red',
                                    //  height: 100
                                }}>
                                    <Checkbox color='#2979FF'
                                        status={checked ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(!checked);
                                        }}
                                    />


                                    <Text style={STYLES.fontSize16_979797_Arial_Regular}>Create Customer</Text>
                                </View>
                            </View>

                            <View style={{
                                paddingHorizontal: '12%',
                                justifyContent: 'flex-end',
                                flex: 0.15, //backgroundColor: 'red'
                            }}>
                                <Button1 onPress={() => {
                                    updateSetStateToWeb(stateToWeb)
                                    updateSetStateToName(stateToName)
                                    updateSetStateToAddress(stateToAddress)
                                    updateSetStateToPhoneNo(stateToPhoneNo)
                                    refRBSheetEditBilledTo.current.close();

                                }}
                                    text="Update"


                                />
                            </View>
                        </View>
                    </RBSheet>

                    {/* Add */}
                    <RBSheet
                        // closeOnDragDown={true}
                        dragFromTopOnly={true}
                        height={400}
                        animationType="slide"
                        ref={refRBSheetAdd}


                        // closeOnPressBack={false}
                        customStyles={{
                            container: {
                                //borderRadius: 40,
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40,
                                paddingVertical: "5%"
                            },

                        }}

                    >
                        <View style={{
                            // justifyContent: 'space-evenly',
                            flex: 1,
                            paddingHorizontal: '5%'
                        }}>

                            <View style={{
                                flex: 0.10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                //  backgroundColor: 'red',
                                alignItems: 'center'
                            }}>
                                <Text style={STYLES.fontSize22_2979FF_Arial_Bold}>Add Item</Text>

                                <TouchableOpacity onPress={() => refRBSheetAdd.current.close()}>
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                                    />
                                </TouchableOpacity>
                            </View>



                            <View style={{
                                flex: 0.75,// backgroundColor: 'green',
                                paddingHorizontal: '5%',
                                justifyContent: 'space-evenly'
                            }}>
                                <TextArea1 onChangeText={(text) => {
                                    isValidSetStateDescription(true)
                                    setStateAddObject(
                                        {
                                            ...stateAddObject,
                                            description: text
                                        }
                                    )
                                }}
                                    placeholder="Description"
                                    numberOfLines={3} />
                                {isValidStateDescription == false ?
                                    <Text style={{ color: 'red' }}>Enter Description</Text> : null
                                }

                                <View style={{
                                    flexDirection: 'row',
                                    paddingHorizontal: '5%',
                                    // flex: 0.3,
                                    // width: '100%',
                                    //  backgroundColor: 'red',
                                    justifyContent: 'space-between'


                                }}>
                                    <View style={{ flex: 0.4 }}>
                                        <TextInputWithoutSvg
                                            placeholder="Price"
                                            keyboardType='numeric'

                                            onChangeText={(text) => {
                                                isValidSetStatePrice(true)
                                                var id = Math.floor(10000000 + Math.random() * 90000000)
                                                setStateAddObject(
                                                    {
                                                        ...stateAddObject,
                                                        id,
                                                        price: text
                                                    }

                                                )

                                            }}
                                        />
                                        {isValidStatePrice == false ?
                                            <Text style={{ color: 'red' }}>Enter Price</Text> : null
                                        }
                                    </View>
                                    <View style={{ flex: 0.45 }}>
                                        <TextInputWithoutSvg
                                            placeholder="Quantity"
                                            keyboardType='numeric'
                                            onChangeText={(text) => {
                                                isValidSetStateQuantity(true)
                                                setStateAddObject(
                                                    {
                                                        ...stateAddObject,
                                                        quantity: text
                                                    }
                                                )

                                            }} />
                                        {isValidStateQuantity == false ?
                                            <Text style={{ color: 'red' }}>Enter Quantity</Text> : null
                                        }
                                    </View>
                                </View>
                                <TextInputWithoutSvg
                                    keyboardType='numeric'
                                    placeholder="Discount (%)"
                                    // keyboardType=''
                                    onChangeText={(text) => {
                                        isValidSetStateDiscount(true)
                                        let myArray = text.split("%")

                                        var { quantity, price } = { ...stateAddObject }

                                        console.log(quantity + "quantity")
                                        console.log(price + "price")


                                        const total = (price * quantity) - ((price * quantity * myArray[0]) / 100)
                                        console.log(total + stateSubTotal)



                                        console.log(stateSubTotal + "stateSubTotal")
                                        console.log(total + "Total")






                                        setStateAddObject(
                                            {
                                                ...stateAddObject,
                                                discount: myArray[0],
                                                total: total,
                                            })







                                    }} />
                                {isValidStateDiscount == false ?
                                    <Text style={{ color: 'red' }}>Enter Discount</Text> : null
                                }
                            </View>

                            <View style={{
                                paddingHorizontal: '12%',
                                justifyContent: 'flex-end',
                                flex: 0.15, //backgroundColor: 'red'
                            }}>
                                <Button1 onPress={
                                    () => {

                                        if (stateAddObject.description.length == 0) {
                                            isValidSetStateDescription(
                                                false
                                            )


                                        }
                                        if (stateAddObject.price.length == 0) {
                                            isValidSetStatePrice(
                                                false
                                            )
                                            console.log(isValidStateDescription)

                                        }
                                        if (stateAddObject.quantity.length == 0) {
                                            isValidSetStateQuantity(
                                                false
                                            )
                                        }
                                        if (stateAddObject.discount.length == 0) {
                                            isValidSetStateDiscount(
                                                false
                                            )
                                        }

                                        if (stateAddObject.description.length != 0 &&
                                            stateAddObject.price.length != 0 &&
                                            stateAddObject.quantity.length != 0 &&
                                            stateAddObject.discount.length != 0) {
                                            setStateSubTotal(stateAddObject.total + stateSubTotal)
                                            setStateTotal(stateAddObject.total + stateSubTotal)
                                            setStateAddArrayObject([...stateAddArrayObject, stateAddObject])

                                            //setStateSubTotal(total + stateSubTotal)
                                            // setStateTotal(total + stateSubTotal)


                                            //  console.log({ ...stateAddObject })
                                            console.log('ffffffffffff')
                                            refRBSheetAdd.current.close()
                                            // )
                                        }
                                    }
                                }
                                    text="ADD"

                                //  onPress={() => refRBSheetEditFrom.current.open()}
                                />
                            </View>
                        </View>
                    </RBSheet>

                    {/* TaxDiscount */}

                    <RBSheet
                        // closeOnDragDown={true}
                        dragFromTopOnly={true}
                        height={300}
                        animationType="slide"
                        ref={refRBSheetTaxDiscount}


                        // closeOnPressBack={false}
                        customStyles={{
                            container: {
                                //borderRadius: 40,
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40,
                                paddingVertical: "5%"
                            },

                        }}

                    >
                        <View style={{
                            // justifyContent: 'space-evenly',
                            flex: 1,
                            paddingHorizontal: '5%'
                        }}>
                            <View style={{
                                flex: 0.15,// backgroundColor: 'red',
                                justifyContent: 'space-between',
                                // marginBottom: '5%'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Text style={STYLES.fontSize22_2979FF_Arial_Bold}>Edit Tax and Discount</Text>

                                    <TouchableOpacity onPress={() => refRBSheetTaxDiscount.current.close()}>
                                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                                        />
                                    </TouchableOpacity>
                                </View>


                            </View>
                            <View style={{
                                flex: 0.60, //backgroundColor: 'green',
                                paddingHorizontal: '5%',
                                justifyContent: 'space-evenly'
                            }}>



                                <TextInputWithoutSvg placeholder="Discount (optional)"
                                    keyboardType="numeric"
                                    xml={Svgs.phone}
                                    onChangeText={(text) => setStateDiscount(text)} />
                                <TextInputWithoutSvg placeholder="Tax (optional)"
                                    keyboardType="numeric"
                                    onChangeText={(text) => setStateTax(text)} />



                            </View>

                            <View style={{
                                paddingHorizontal: '12%',
                                justifyContent: 'flex-end',
                                flex: 0.25, //backgroundColor: 'red'
                            }}>
                                <Button1 onPress={() => {



                                    console.log('qwerty')

                                    { stateDiscount.length != 0 ? updateSetStateDiscount(stateDiscount) : null }
                                    { stateTax.length != 0 ? updateSetStateTax(stateTax) : null }



                                    console.log(stateSubTotal)
                                    console.log(stateDiscount)
                                    console.log(stateTax)
                                    {
                                        (stateDiscount.length == 0 && stateTax.length != 0) || (stateDiscount == 0 && stateTax.length != 0) ?
                                            setStateTotal(stateSubTotal + (stateSubTotal * stateTax / 100))


                                            :
                                            null
                                    }

                                    {
                                        (stateDiscount.length != 0 && stateTax.length == 0) || (stateTax == 0 && stateDiscount.length != 0) ?
                                            setStateTotal(stateSubTotal - (stateSubTotal * stateDiscount / 100))
                                            :
                                            null
                                    }
                                    {
                                        stateDiscount.length != 0 && stateTax.length != 0 && stateTax != 0 && stateDiscount != 0 ?
                                            setStateTotal(((stateSubTotal - (stateSubTotal * stateDiscount / 100)) + (stateSubTotal + (stateSubTotal * stateTax / 100))) / 2)
                                            :
                                            null
                                    }
                                    console.log(((stateSubTotal - (stateSubTotal * stateDiscount / 100))
                                        + (stateSubTotal + (stateSubTotal * stateTax / 100))) / 2)

                                    refRBSheetTaxDiscount.current.close()
                                    setStateTax(0)
                                    setStateDiscount(0)

                                }




                                }
                                    text="Update"

                                //  onPress={() => refRBSheetEditFrom.current.open()}
                                />
                            </View>
                        </View>
                    </RBSheet>



                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                :
                <View style={{
                    flex: 1,

                    backgroundColor: 'green',
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}>
                    <View style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%'
                        , flex: 1
                    }}>
                        <ActivityIndicator></ActivityIndicator>
                    </View>
                </View>


            }
        </View>
    );
};



export default CreateInvoice;

