
import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import svgs from '../assets/svgs/Svgs'
import Svgs from '../assets/svgs/Svgs';

const TextInputPassword = props => {
    const [stateSecurePassword, setStateSecurePassqword]
        = useState(true);
    const [stateSecureTextEntry, setStateSecureTextEntry] = useState(true);
    return (
        <View style={style.textInput}>


            <TextInput placeholder={props.placeholder}
                style={[{ flex: 1, marginLeft: '2%', },
                STYLES.fontSize14_1A1A1A_Roboto_Regular_56]}
                secureTextEntry={stateSecureTextEntry}
                onChangeText={props.onChangeText}
            />
            {stateSecurePassword ?
                <TouchableOpacity onPress={() => {
                    setStateSecurePassqword(false)
                    setStateSecureTextEntry(false)
                }}>
                    <SvgXml xml={Svgs.phone} />
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => {
                    setStateSecurePassqword(true),
                        setStateSecureTextEntry(true)
                }}>
                    <SvgXml xml={Svgs.email} />
                </TouchableOpacity>
            }


        </View>
    );
};

// onPress={(state) =>
//     setStateSecurePassqword(state)}

export default TextInputPassword;


const style = StyleSheet.create({
    textInput: {
        height: 50,
        //backgroundColor: 'red',
        borderRadius: 26,
        borderColor: "#1A1A1A",
        backgroundColor: "rgba(255, 255, 255,0.30)",
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: '5%'
    },


});