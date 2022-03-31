import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES'

const ButtonSeeAll = props => {
    return (
        <TouchableOpacity
            style={{
                paddingVertical: '1%',
                paddingHorizontal: '2%',
                justifyContent: "center",
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 15,
                height: 25,
                borderColor: "#2979FF",
                backgroundColor: '#FFFFFF'
            }}>
            <Text style={STYLES.fontSize13_2979FF_LouisGeorgeCafé_Regular}>
                See All</Text>
        </TouchableOpacity>
    );
};


export default ButtonSeeAll;