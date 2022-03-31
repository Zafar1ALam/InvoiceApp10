import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, Modal, Alert,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import STYLES from '../STYLES'
import { SvgXml } from 'react-native-svg';
import svgs from '../assets/svgs/Svgs'
import TextInput1 from '../component/TextInput1';

import Button1 from '../component/Button1';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import STYLES1 from '../STYLES';
import Svgs from '../assets/svgs/Svgs';
import TextInputPassword from '../component/TextInputPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = ({ navigation }) => {


    const [stateIsValidUserName, setStateIsValidUserName] = useState(true);
    const [stateIsValidEmailAddress, setStateIsValidEmailAddress] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);


    const [stateData, setStataData] = useState({
        userName: '',
        emailAddress: '',
        password: '',
    }
    )

    const [stateImage, setStateImage] = useState(null);
    const refRBSheet = useRef();


    const storeData = async (value) => {
        console.log(value + "AAAAAAAAAAAAAAAAAAA")
        try {
            // console.log('storedata')
            await AsyncStorage.setItem('userId', value)
        } catch (e) {
            Alert.alert("Date does not store in asyncstorage")
        }



    }


    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            console.log('true')
            return true;

        }
        else {
            console.log('falsse')
            return false;
        }
    }

    const imageTakeFromCamera = () => {
        refRBSheet.current.close()
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setStateImage(image.path)
            console.log(image.path);
            console.log(image);


        });
    }

    const imageTakeFromGallery = () => {
        refRBSheet.current.close()
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

    const sendDate = () => {
        if (stateData.userName.length == 0
        ) {
            setStateIsValidUserName(false)
        }

        if (stateData.emailAddress.length == 0
        ) {
            setStateIsValidEmailAddress(false)


        }

        if (stateData.password.length == 0
        ) {
            setStateIsValidPassword(false)
        }


        console.log(`{
            userName: ${stateData.userName},
            Email: ${stateData.emailAddress},
            Password: ${stateData.password},
            image:${stateImage}
          }`)

        if (stateIsValidUserName === true && stateIsValidEmailAddress === true
            && stateIsValidPassword === true && handleValidEmail(stateData.emailAddress)) {

            fetch('https://mtechub-invoiceapp-server.herokuapp.com/api/user/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: stateData.userName,
                    Email: stateData.emailAddress,
                    Password: stateData.password,
                    image: stateImage
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.success) {
                        console.log(json)
                        console.log(json.Record._id)
                        storeData(json.Record._id)
                        navigation.navigate("EditCompanyInfo")
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
                        flex: 0.20, paddingHorizontal: '6%',
                        alignItems: 'center', flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}>


                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="88" height="88" viewBox="0 0 88 88">
  <defs>
    <clipPath id="clip-path">
      <circle id="Ellipse_98" data-name="Ellipse 98" cx="44" cy="44" r="44" transform="translate(128 377)" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
  </defs>
  <g id="Mask_Group_15" data-name="Mask Group 15" transform="translate(-128 -377)" clip-path="url(#clip-path)">
    <image id="Image_16" data-name="Image 16" width="88" height="88" transform="translate(128 377)" xlink:href="data:image/png;base64,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"/>
  </g>
</svg>

`} />

                        <Text style={STYLES.fontSize45_FFFFFF_LouisGeorgeCafé_Bold}>Welcome</Text>
                    </View>
                    <View style={{
                        flex: 0.80,
                        backgroundColor: '#FFFFFF', shadowColor: '#000000',
                        elevation: 5
                        , borderTopLeftRadius: 30, borderTopRightRadius: 30,

                    }}>
                        <View style={{
                            flex: 0.65, paddingHorizontal: '10%',
                            justifyContent: 'space-evenly', alignItems: 'center'
                        }}>

                            <Text style={STYLES.fontSize31_2979FF_LouisGeorgeCafé_Bold}>Create an Account</Text>

                            {stateImage === null ? <TouchableOpacity onPress={() => refRBSheet.current.open()}
                            >
                                <SvgXml xml={` <svg xmlns="http://www.w3.org/2000/svg" width="69.347" height="69.347" viewBox="0 0 69.347 69.347">
                            <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M34.674.563A34.674,34.674,0,1,0,69.347,35.236,34.668,34.668,0,0,0,34.674.563Zm0,13.422a12.3,12.3,0,1,1-12.3,12.3A12.3,12.3,0,0,1,34.674,13.985Zm0,48.1a26.792,26.792,0,0,1-20.483-9.535,15.588,15.588,0,0,1,13.772-8.361,3.421,3.421,0,0,1,.993.154,18.512,18.512,0,0,0,5.718.965,18.441,18.441,0,0,0,5.718-.965,3.421,3.421,0,0,1,.993-.154,15.588,15.588,0,0,1,13.772,8.361A26.792,26.792,0,0,1,34.674,62.08Z" transform="translate(0 -0.563)" fill="#949494" />
                        </svg>`}
                                />
                            </TouchableOpacity> :


                                <Image style={{ height: 69, width: 69, borderRadius: 50, }}
                                    resizeMode='cover'
                                    source={{ uri: stateImage }} />

                            }


                            <TextInput1 placeholder="Username"
                                xml={Svgs.email}
                                onChangeText={(text) => {
                                    setStateIsValidUserName(true)
                                    setStataData({
                                        ...stateData,
                                        userName: text,
                                    })

                                    // setValidation({
                                    //     ...validation,
                                    //     isValidName: true

                                    // })
                                }
                                } />
                            {console.log(stateData)}
                            {stateIsValidUserName == false ?
                                <Text style={{ color: 'red' }}>Enter UserName</Text> : null
                            }
                            <TextInput1 placeholder="Email Address"
                                xml={Svgs.email}

                                onChangeText={(text) => {
                                    setStateIsValidEmailAddress(true)
                                    setStataData({
                                        ...stateData,
                                        emailAddress: text,
                                    })
                                }} />
                            {stateIsValidEmailAddress == false ?
                                <Text style={{ color: 'red' }}> Valid Email</Text> : null
                            }
                            <TextInputPassword placeholder="Password"
                                xml={

                                    Svgs.email}
                                PasswordPassword
                                onChangeText={(text) => {
                                    setStateIsValidPassword(true)
                                    setStataData({
                                        ...stateData,
                                        password: text,
                                    })
                                }}

                            />
                            {stateIsValidPassword == false ?
                                <Text style={{ color: 'red' }}>Valid Password</Text> : null
                            }


                        </View>
                        <View style={{ flex: 0.10 }}></View>
                        <View style={{
                            paddingHorizontal: "10%", flex: 0.25,
                            justifyContent: 'space-evenly',


                        }}>
                            <View style={{ marginBottom: '5%' }}>

                                <Button1
                                    text="SIGNUP"
                                    onPress={() => { sendDate() }

                                    }
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={STYLES.fontSize12_1A1A1A_Roboto_Regular}>
                                    Have an account </Text>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate("Login") }}>
                                    <Text style={STYLES.fontSize12_2979FF_Roboto_Regular}>
                                        Login Now</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginBottom: '4%', justifyContent: 'center'
                            }}>
                                <Text style={STYLES.fontSize12_1A1A1A_Roboto_Regular}>
                                    By signing up, you are agree with our  </Text>
                                <TouchableOpacity>
                                    <Text
                                        style={[STYLES.fontSize12_2979FF_Roboto_Regular,
                                        { textDecorationLine: 'underline', }]}>
                                        Terms & Condition</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                </View>



                <RBSheet
                    closeOnDragDown={false}
                    height={260}
                    animationType="slide"
                    ref={refRBSheet}
                    closeOnDragDown={true}


                >
                    <View style={{
                        justifyContent: 'space-evenly', flex: 1,
                        paddingHorizontal: '5%'
                    }}>
                        <Text style={STYLES.fontSize31_7A7A7A_LouisGeorgeCafé_Bold}>Add Photo! </Text>
                        <TouchableOpacity onPress={() => { imageTakeFromCamera() }}>
                            <Text style={STYLES.fontSize20_7A7A7A_Roboto_Regular_60}>
                                Take Photo Camera </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { imageTakeFromGallery() }}>
                            <Text style={STYLES.fontSize20_7A7A7A_Roboto_Regular_60}>
                                Take Photo Gallery </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                            <Text style={STYLES.fontSize20_7A7A7A_Roboto_Regular_60}>Cancel </Text>
                        </TouchableOpacity>
                    </View>
                </RBSheet>




            </ImageBackground >


        </ScrollView >
    );



};



export default SignUp;