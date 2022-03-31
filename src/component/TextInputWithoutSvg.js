import React from 'react';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import svgs from '../assets/svgs/Svgs'
const TextInputWithoutSvg = props => {
    return (
        <View style={[style.textInput, props.style]}>


            <TextInput
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                placeholder={props.placeholder}
                style={[{ flex: 1, marginLeft: '2%' },
                STYLES.fontSize14_1A1A1A_Roboto_Regular_56,]}

            />

        </View>
    );
};


export default TextInputWithoutSvg;


const style = StyleSheet.create({
    textInput: {
        // alignSelf: 'stretch',
        height: 50,
        //backgroundColor: 'red',
        borderRadius: 26,
        borderColor: "#1A1A1A",
        backgroundColor: "rgba(255, 255, 255,0.17)",
        borderWidth: 1,
        // width: '100%',


        paddingHorizontal: '5%'
    },


});