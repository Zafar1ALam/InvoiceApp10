import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES'
const ButtonActive = props => {
    return (
        <TouchableOpacity
            style={{
                //paddingVertical: '1%',
                paddingHorizontal: '2%',
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: '#2979FF',
                height: 25,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#2979FF",

            }}>
            <Text style={STYLES.fontSize14_FFFFFF_LouisGeorgeCafé_Regular}>
                Active</Text>
        </TouchableOpacity>
    );
};



export default ButtonActive;