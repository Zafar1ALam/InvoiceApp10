import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES'
const ButtonEdit = props => {
    return (
        <>
            <TouchableOpacity onPress={props.onPress}
                style={{
                    //paddingVertical: '1%',
                    paddingHorizontal: '4%',
                    justifyContent: "center",
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    height: 25,
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: "#2979FF",


                }}>
                <Text style={STYLES.fontSize14_2979FF_LouisGeorgeCafé_Regular}>
                    Edit</Text>
            </TouchableOpacity>
        </>
    );
};



export default ButtonEdit;