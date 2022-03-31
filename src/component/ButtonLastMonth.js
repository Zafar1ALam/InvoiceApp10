import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES'
const ButtonLastMonth = props => {
    return (
        <TouchableOpacity
            style={{
                //paddingVertical: '1%',
                paddingHorizontal: '2%',
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                height: 25,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#2979FF",


            }}>
            <Text style={STYLES.fontSize11_2979FF_LouisGeorgeCafé_Regular}>
                Last Month</Text>
        </TouchableOpacity>
    );
};



export default ButtonLastMonth;



