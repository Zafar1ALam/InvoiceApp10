import React from 'react';
import {
    View, Text, ImageBackground,
    Image, Dimensions, TouchableOpacity
} from 'react-native'
import STYLES from '../STYLES'

const Button1 = props => {
    return (
        <TouchableOpacity style={{
            borderRadius: 26,
            backgroundColor: "#2979FF",
            //paddingVertical: "6%",
            height: 55,
            alignItems: 'center',
            justifyContent: 'center'
        }}
            onPress={props.onPress}>
            <Text style={STYLES.fontSize17_FFFFFF_LouisGeorgeCafé_Bold}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};



export default Button1;