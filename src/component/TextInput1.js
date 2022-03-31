import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import svgs from '../assets/svgs/Svgs'
const TextInput1 = props => {

    return (
        <View style={style.textInput}>


            <TextInput placeholder={props.placeholder}
                style={[{ flex: 1, marginLeft: '2%', },
                STYLES.fontSize14_1A1A1A_Roboto_Regular_56]}

                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
            />
            <TouchableOpacity>
                <SvgXml xml={props.xml} />
            </TouchableOpacity>
        </View>
    );
};

// onPress={(state) =>
//     setStateSecurePassqword(state)}

export default TextInput1;


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