import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import TextInputEdit from '../component/TextInputEdit';
import Svgs from '../assets/svgs/Svgs';
import STYLES from '../STYLES';
import Button1 from '../component/Button1';
import ImagePicker from 'react-native-image-crop-picker';
const CustomerAdd = props => {

    const [stateIsValidName, setStateIsValidName] = useState(true);
    const [stateIsValidLocation, setStateIsValidLocation] = useState(true);
    const [stateIsValidPhoneNo, setStateIsValidPhoneNo] = useState(true);
    const [stateIsValidWebsite, setStateIsValidWebsite] = useState(true);


    const [stateData, setStataData] = useState({
        customerName: '',
        customerLocation: '',
        customerPhoneNo: '',
        customerWebsite: '',
    }
    )
    const [stateImage, setStateImage] = useState(null);


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

    const addCustomerServer = () => {
        console.log('f')
        if (stateData.customerName.length == 0
        ) {
            setStateIsValidName(false)
        }

        if (stateData.customerLocation.length == 0
        ) {
            setStateIsValidLocation(false)


        }

        if (stateData.customerPhoneNo.length == 0
        ) {
            setStateIsValidPhoneNo(false)
        }
        if (stateData.customerWebsite.length == 0
        ) {
            setStateIsValidWebsite(false)
        }

    }

    return (
        <ScrollView>
            <ImageBackground
                resizeMode="cover"
                style={[STYLES.backgroundImageContainer,
                ]} source={require('../assets/images/Splash.png')}>


                <View style={{
                    // justifyContent: 'space-evenly',
                    flex: 1,

                }}>
                    <View style={{
                        flex: 0.25,// backgroundColor: 'red',
                        alignItems: 'center', justifyContent: 'center'
                        // marginBottom: '5%'
                    }}>

                        <Text style={STYLES.fontSize33_FFFFFF_LouisGeorgeCafé_Bold}>
                            Add Customer</Text>






                    </View>
                    <View style={{
                        shadowColor: '#000000',
                        elevation: 5
                        , borderTopLeftRadius: 30, borderTopRightRadius: 30,
                        flex: 0.60, backgroundColor: '#FFFFFF',
                        paddingHorizontal: '5%',
                        justifyContent: 'space-evenly'
                    }}>
                        {stateImage === null ?

                            <TouchableOpacity onPress={() => imageTakeFromGallery()}>
                                <SvgXml
                                    style={{ alignSelf: 'center' }}
                                    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="69.347" height="69.347" viewBox="0 0 69.347 69.347">
<path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M34.674.563A34.674,34.674,0,1,0,69.347,35.236,34.668,34.668,0,0,0,34.674.563Zm0,13.422a12.3,12.3,0,1,1-12.3,12.3A12.3,12.3,0,0,1,34.674,13.985Zm0,48.1a26.792,26.792,0,0,1-20.483-9.535,15.588,15.588,0,0,1,13.772-8.361,3.421,3.421,0,0,1,.993.154,18.512,18.512,0,0,0,5.718.965,18.441,18.441,0,0,0,5.718-.965,3.421,3.421,0,0,1,.993-.154,15.588,15.588,0,0,1,13.772,8.361A26.792,26.792,0,0,1,34.674,62.08Z" transform="translate(0 -0.563)" fill="#949494"/>
</svg>
`} />
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => imageTakeFromGallery()}>
                                <Image source={{ uri: stateImage }}
                                    resizeMode='cover' style={{
                                        borderRadius: 50,
                                        alignSelf: 'center',
                                        height: 69,
                                        width: 69
                                    }} />
                            </TouchableOpacity>

                        }

                        <TextInputEdit placeholder="Name" xml={Svgs.phone}
                            onChangeText={(text) => {
                                setStateIsValidName(true)
                                setStataData({
                                    ...stateData,
                                    customerName: text,
                                })
                            }} />
                        {stateIsValidName == false ?
                            <Text style={{ color: 'red' }}>Enter Customer Name</Text> : null
                        }
                        <TextInputEdit placeholder="Location" xml={Svgs.phone}

                            onChangeText={(text) => {
                                setStateIsValidLocation(true)
                                setStataData({
                                    ...stateData,
                                    customerLocation: text,
                                })
                            }} />
                        {stateIsValidLocation == false ?
                            <Text style={{ color: 'red' }}>Enter Location</Text> : null
                        }
                        <TextInputEdit placeholder="Phone No"
                            keyboardType="numeric"
                            xml={Svgs.phone}

                            onChangeText={(text) => {
                                setStateIsValidPhoneNo(true)
                                setStataData({
                                    ...stateData,
                                    customerPhoneNo: text,
                                })
                            }} />
                        {stateIsValidPhoneNo == false ?
                            <Text style={{ color: 'red' }}>Enter PhoneNo</Text> : null
                        }
                        <TextInputEdit placeholder="Website" xml={Svgs.globe}

                            onChangeText={(text) => {
                                setStateIsValidWebsite(true)
                                setStataData({
                                    ...stateData,
                                    customerWebsite: text,
                                })
                            }} />
                        {stateIsValidWebsite == false ?
                            <Text style={{ color: 'red' }}>Enter Website</Text> : null
                        }


                    </View>

                    <View style={{
                        shadowColor: '#000000',
                        elevation: 5,
                        paddingHorizontal: '12%',
                        backgroundColor: '#FFFFFF',
                        justifyContent: 'flex-end',
                        flex: 0.15, //backgroundColor: 'red'
                    }}>
                        <View style={{ marginBottom: '5%' }}>
                            <Button1 onPress={() => {
                                addCustomerServer()
                            }}
                                text="ADD"
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground >
        </ScrollView>
    );
};



export default CustomerAdd;