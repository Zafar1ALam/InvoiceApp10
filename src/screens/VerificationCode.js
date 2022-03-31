import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions, ImageBackground,
    StyleSheet,
    ScrollView, Text, TextInput, View
} from 'react-native';
import STYLES from '../STYLES'
import ButtonActive from '../component/ButtonActive';
import Button1 from '../component/Button1';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const VerificationCode = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={STYLES.container}>

            <View style={{
                flex: 0.6, //backgroundColor: 'red',
                alignItems: 'center',
                marginTop: '10%'
            }}>


                <Text style={STYLES.fontSize14_000000_LouisGeorgeCafé_Regular}>Enter the 4-digit code to your
                    Email or Number</Text>


                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}

                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        value == '' ?

                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                {console.log('a')}
                                {console.log(symbol + "44")}
                                {console.log(isFocused)}
                                {symbol || (isFocused ? <Cursor /> : null)}

                            </Text>
                            : <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                {console.log(symbol + "33")}
                                {console.log(isFocused)}
                                {symbol || (isFocused ? <Cursor /> : null)}

                            </Text>

                    )}
                />
            </View>
            <View style={{
                flex: 0.4, justifyContent: 'flex-end',
                marginHorizontal: '4%', paddingBottom: '5%'
            }}>
                <Button1 text="Submit" />
            </View>
        </View>
    );
};



export default VerificationCode;

const styles = StyleSheet.create({
    codeFieldRoot: { width: '62%', alignSelf: 'center' },
    cell: {
        width: 45,

        height: 50,
        lineHeight: 48,
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#00000030',
        textAlign: 'center',
        marginTop: '6%',
        //backgroundColor:'orange'
    },
    focusCell: {
        borderColor: '#000',
    },
});

const CELL_COUNT = 4;