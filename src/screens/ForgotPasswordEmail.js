import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, KeyboardAvoidingView, ImageBackground, ScrollView, Text, TextInput, View } from 'react-native';
import STYLES from '../STYLES'
import ButtonActive from '../component/ButtonActive';
import Button1 from '../component/Button1';
import { NavigationContainer } from '@react-navigation/native';

const ForgotPasswordEmail = ({ navigation }) => {

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

    const sendEmail = () => {
        if (!handleValidEmail(stateEmailAddress)) {
            setStateIsValidEmailAddress(false)
        } else
            if (stateEmailAddress.length == 0
            ) {
                setStateIsValidEmailAddress(false)


            }
        if (stateIsValidEmailAddress == true && stateEmailAddress.length != 0 && handleValidEmail(stateEmailAddress)
        ) {

            navigation.navigate("VerificationCode")

        }
        // 
    }
    const [stateIsValidEmailAddress, setStateIsValidEmailAddress] = useState(true);
    const [stateEmailAddress, setStateEmailAddress] = useState('');
    return (
        <ScrollView>

            <ImageBackground
                resizeMode="cover"
                style={[STYLES.backgroundImageContainer,
                ]} source={require('../assets/images/Splash.png')}>

                <View style={{
                    // backgroundColor: 'red',
                    flex: 0.2, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={[{ textAlign: 'center', marginTop: '8%' },
                    STYLES.fontSize14_FFFFFF_LouisGeorgeCafé_Bold]} >
                        Enter your email or phone number to {"\n"}
                        recover your account
                    </Text>
                </View>

                <View style={{
                    backgroundColor: '#FFFFFF', shadowColor: '#000000',
                    elevation: 5
                    , borderTopLeftRadius: 30, borderTopRightRadius: 30,
                    // backgroundColor: 'green',
                    flex: 0.6, paddingHorizontal: '4%'

                }}>
                    <Text style={[STYLES.fontSize18_000000_Arial_Bold,
                    { marginTop: '10%' }]}>
                        Email or Phone
                    </Text>
                    <TextInput onChangeText={(text) => {
                        setStateIsValidEmailAddress(true)
                        setStateEmailAddress(text)
                    }}
                        autoFocus={true}
                        style={[{
                            marginTop: '5%',
                            borderRadius: 26,
                            borderColor: "#1A1A1A",
                            borderWidth: 1,
                            paddingLeft: '5%'

                        }, STYLES.fontSize14_1A1A1A_Roboto_Regular_56]} />
                    {stateIsValidEmailAddress == false ?
                        <Text style={{ color: 'red' }}> Valid Email</Text> : null
                    }
                </View>

                <View style={{
                    shadowColor: '#000000',
                    elevation: 5, backgroundColor: '#FFFFFF',
                    flex: 0.2, //backgroundColor: 'pink',
                    justifyContent: 'flex-end', paddingBottom: '5%',
                    paddingHorizontal: '5%'
                }}>
                    <Button1 text="Send Code" onPress={() => {
                        sendEmail()
                    }} />
                </View>

            </ImageBackground>
        </ScrollView>


    );
};



export default ForgotPasswordEmail;