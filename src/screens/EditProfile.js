
import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import TextInput1 from '../component/TextInput1';
import Svgs from '../assets/svgs/Svgs'

import STYLES from '../STYLES'
import Button1 from '../component/Button1';
import ImagePicker from 'react-native-image-crop-picker';


const EditProfile = ({ navigation }) => {

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
                        marginLeft: '10%'
                    }}>

                        <Text style={STYLES.fontSize45_FFFFFF_LouisGeorgeCafé_Bold}>Edit Profile</Text>
                    </View>
                    <View style={{
                        flex: 0.45,
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
                            <SvgXml xml={` <svg xmlns="http://www.w3.org/2000/svg" width="69.347" height="69.347" viewBox="0 0 69.347 69.347">
                            <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M34.674.563A34.674,34.674,0,1,0,69.347,35.236,34.668,34.668,0,0,0,34.674.563Zm0,13.422a12.3,12.3,0,1,1-12.3,12.3A12.3,12.3,0,0,1,34.674,13.985Zm0,48.1a26.792,26.792,0,0,1-20.483-9.535,15.588,15.588,0,0,1,13.772-8.361,3.421,3.421,0,0,1,.993.154,18.512,18.512,0,0,0,5.718.965,18.441,18.441,0,0,0,5.718-.965,3.421,3.421,0,0,1,.993-.154,15.588,15.588,0,0,1,13.772,8.361A26.792,26.792,0,0,1,34.674,62.08Z" transform="translate(0 -0.563)" fill="#949494" />
                        </svg>`}
                            />
                        </TouchableOpacity> :


                            <Image style={{ height: 69, width: 69, borderRadius: 50, }}
                                resizeMode='cover'
                                source={{ uri: stateImage }} />

                        }


                        <TextInput1 placeholder="Username" xml={Svgs.email} />
                        <TextInput1 placeholder="Email Address" xml={Svgs.email} />
                        <TextInput1 placeholder="Password" xml={Svgs.email} />



                    </View>

                    <View style={{
                        flex: 0.35, //ackgroundColor: 'green',
                        backgroundColor: '#FFFFFF',
                        justifyContent: 'flex-end',
                        shadowColor: '#000000',
                        elevation: 5,

                    }}>
                        <View style={{
                            marginBottom: '5%',
                            paddingHorizontal: '5%'
                        }}>
                            <Button1 text="Update" />
                        </View>

                    </View>
                </View>






            </ImageBackground >

        </ScrollView>


    );
};



export default EditProfile;