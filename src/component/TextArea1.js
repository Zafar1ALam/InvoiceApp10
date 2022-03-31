import React from 'react';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native'
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import svgs from '../assets/svgs/Svgs'
const TextArea1 = props => {
    return (
        <View style={style.textInput}>


            <TextInput
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                style={[{ flex: 1, marginLeft: '2%', textAlignVertical: 'top' },
                STYLES.fontSize14_1A1A1A_Roboto_Regular_56]}
                numberOfLines={props.numberOfLines}
                multiline={true}
            />

        </View>
    );
};




export default TextArea1;

const style = StyleSheet.create({
    textInput: {
        //height: 50,
        //backgroundColor: 'red',
        borderRadius: 26,
        borderColor: "#1A1A1A",
        backgroundColor: "rgba(255, 255, 255,0.17)",
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: '5%'
    },


});