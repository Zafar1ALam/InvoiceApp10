
import React, { useState, useRef, useEffect } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView, Alert,
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import TextInput1 from '../component/TextInput1';
import Svgs from '../assets/svgs/Svgs'

import STYLES from '../STYLES'
import Button1 from '../component/Button1';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditCompanyInfo = ({ navigation }) => {
    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('userId')
                if (value !== null) {
                    setStateUserId(value)
                    // value previously stored
                }
            } catch (e) {
                // error reading value
            }

        }
        getData()
    }, [])
    const [stateUserId, setStateUserId] = useState();
    const [stateIsValidCompanyName, setStateIsValidCompanyName] = useState(true);
    const [stateIsValidCompanyLocation, setStateIsValidCompanyLocation] = useState(true);
    const [stateIsValidCompanyPhoneNo, setStateIsValidCompanyPhoneNo] = useState(true);
    const [stateIsValidCompanyWebite, setStateIsValidCompanyWebite] = useState(true);
    const [a, b] = useState();
    console.log(typeof (a))
    const [stateImage, setStateImage] = useState(null);


    const [stateData, setStataData] = useState({
        stateCompanyName: '',
        stateCompanyLocation: '',
        stateCompanyPhoneNo: '',
        stateCompanyWebite: '',
    }
    )


    const UserCompanyStoreDataAsyncStorage = async (value) => {
        console.log(value)
        console.log(value.Location)
        console.log(value.Name)
        console.log(value.Website)
        console.log(value.PhoneNumber)
        console.log(value._id)

        const firstPair = ["companyId", value._id]
        const secondPair = ["companyName", value.Name]
        const thirdPair = ["companyLocation", value.Location]
        const fourthPair = ["companyPhoneNo", value.PhoneNumber]
        const fifthPair = ["companyWebsite", value.Website]

        try {
            await AsyncStorage.multiSet([firstPair, secondPair, thirdPair, fourthPair, fifthPair])
        } catch (e) {
            Alert.alert(e)

        }

        console.log("Done.")



    }

    const addCompanyServer = () => {
        console.log(stateUserId)
        if (stateData.stateCompanyName.length == 0
        ) {
            setStateIsValidCompanyName(false)
        }

        if (stateData.stateCompanyLocation.length == 0
        ) {
            setStateIsValidCompanyLocation(false)


        }

        if (stateData.stateCompanyPhoneNo.length === 0
        ) {
            console.log('ddddd')
            setStateIsValidCompanyPhoneNo(false)
        }
        if (stateData.stateCompanyWebite.length == 0
        ) {
            setStateIsValidCompanyWebite(false)
        }
        console.log(`UserId: ${stateUserId},
            Name: ${stateData.stateCompanyName},
            Location: ${stateData.stateCompanyLocation},
            PhoneNumber: ${stateData.stateCompanyPhoneNo},
            Website: ${stateData.stateCompanyWebite}`)
        if (stateIsValidCompanyName === true && stateIsValidCompanyLocation === true
            && stateIsValidCompanyPhoneNo === true && stateIsValidCompanyWebite === true) {

            fetch('https://mtechub-invoiceapp-server.herokuapp.com/api/user/AddCompany', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    UserId: stateUserId,
                    Name: stateData.stateCompanyName,
                    Location: stateData.stateCompanyLocation,
                    PhoneNumber: stateData.stateCompanyPhoneNo,
                    Website: stateData.stateCompanyWebite
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.success) {
                        console.log(json)
                        console.log(json.Company._id)
                        UserCompanyStoreDataAsyncStorage(json.Company)
                        navigation.navigate("CreateInvoice")
                    }
                    else {
                        Alert.alert('plz insert valid data')
                    }
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
        } else {
            Alert.alert('plz enter data')
        }
    }
    const imageTakeFromGallery = () => {

        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImage(image.path)
        });
    }


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
                        alignItems: 'center',

                    }}>

                        <Text style={STYLES.fontSize33_FFFFFF_LouisGeorgeCafé_Bold}>Edit Company Info</Text>
                    </View>
                    <View style={{
                        flex: 0.55,
                        //backgroundColor: 'red',
                        backgroundColor: '#FFFFFF',
                        shadowColor: '#000000',
                        elevation: 5,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        paddingHorizontal: '5%',
                        // paddingTop: "5%",
                        justifyContent: 'space-evenly',
                        alignItems: 'center'

                    }}>

                        {stateImage === null ? <TouchableOpacity onPress={() => imageTakeFromGallery()}
                        >
                            <SvgXml
                                style={{ marginTop: '10%' }}
                                xml={` <svg xmlns="http://www.w3.org/2000/svg" width="69.347" height="69.347" viewBox="0 0 69.347 69.347">
                            <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M34.674.563A34.674,34.674,0,1,0,69.347,35.236,34.668,34.668,0,0,0,34.674.563Zm0,13.422a12.3,12.3,0,1,1-12.3,12.3A12.3,12.3,0,0,1,34.674,13.985Zm0,48.1a26.792,26.792,0,0,1-20.483-9.535,15.588,15.588,0,0,1,13.772-8.361,3.421,3.421,0,0,1,.993.154,18.512,18.512,0,0,0,5.718.965,18.441,18.441,0,0,0,5.718-.965,3.421,3.421,0,0,1,.993-.154,15.588,15.588,0,0,1,13.772,8.361A26.792,26.792,0,0,1,34.674,62.08Z" transform="translate(0 -0.563)" fill="#949494" />
                        </svg>`}
                            />
                        </TouchableOpacity> :


                            <Image style={{
                                height: 69, width: 69, borderRadius: 50,
                                marginTop: '10%'
                            }}
                                resizeMode='cover'
                                source={{ uri: stateImage }} />

                        }


                        <TextInput1 placeholder="Name" xml={Svgs.email}
                            onChangeText={(text) => {
                                setStateIsValidCompanyName(true)
                                setStataData({
                                    ...stateData,
                                    stateCompanyName: text,
                                })
                            }}

                        />
                        {stateIsValidCompanyName == false ?
                            <Text style={{ color: 'red' }}>Enter Name</Text> : null
                        }
                        <TextInput1 placeholder="Location" xml={Svgs.email}
                            onChangeText={(text) => {
                                setStateIsValidCompanyLocation(true)
                                setStataData({
                                    ...stateData,
                                    stateCompanyLocation: text,
                                })
                            }} />
                        {stateIsValidCompanyLocation == false ?
                            <Text style={{ color: 'red' }}>Enter Location</Text> : null
                        }
                        <TextInput1 placeholder="Phone No" xml={Svgs.email} keyboardType='numeric'
                            onChangeText={(text) => {
                                setStateIsValidCompanyPhoneNo(true)
                                setStataData({
                                    ...stateData,
                                    stateCompanyPhoneNo: text,
                                })
                            }}

                        />
                        {stateIsValidCompanyPhoneNo == false ?
                            <Text style={{ color: 'red' }}>Enter PhoneNo</Text> : null
                        }
                        <TextInput1 placeholder="Website" xml={Svgs.email}
                            onChangeText={(text) => {
                                setStateIsValidCompanyWebite(true)
                                setStataData({
                                    ...stateData,
                                    stateCompanyWebite: text,
                                })
                            }} />
                        {stateIsValidCompanyWebite == false ?
                            <Text style={{ color: 'red' }}>Enter Website</Text> : null
                        }



                    </View>

                    <View style={{
                        flex: 0.25, //ackgroundColor: 'green',
                        backgroundColor: '#FFFFFF',
                        justifyContent: 'flex-end',
                        shadowColor: '#000000',
                        elevation: 5,

                    }}>
                        <View style={{
                            marginBottom: '5%',
                            paddingHorizontal: '5%'
                        }}>
                            <Button1 text="Update" onPress={() => {
                                addCompanyServer()
                            }} />
                        </View>

                    </View>
                </View>






            </ImageBackground >

        </ScrollView>


    );
};



export default EditCompanyInfo;