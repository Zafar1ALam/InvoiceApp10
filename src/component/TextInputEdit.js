import React from 'react';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import svgs from '../assets/svgs/Svgs'
const TextInputEdit = props => {
    return (
        <View style={style.textInput}>


            <TextInput placeholder={props.placeholder}
                style={[{ marginLeft: '2%', flex: 1 },
                STYLES.fontSize14_1A1A1A_Roboto_Regular_56]}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
            />
            <SvgXml xml={props.xml} />
        </View>
    );
};


export default TextInputEdit;


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