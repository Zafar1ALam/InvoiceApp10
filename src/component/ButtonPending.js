import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES'
const ButtonPending = props => {
    return (
        <TouchableOpacity
            style={{
                //paddingVertical: '1%',
                paddingHorizontal: '2%',
                justifyContent: "center",
                alignItems: 'center',

                height: 25,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#2979FF",
                backgroundColor: '#FFFFFF',

            }}>
            <Text style={STYLES.fontSize11_2979FF_LouisGeorgeCafé_Regular}>
                Pending</Text>
        </TouchableOpacity>
    );
};

ButtonPending.propTypes = {

};

export default ButtonPending;