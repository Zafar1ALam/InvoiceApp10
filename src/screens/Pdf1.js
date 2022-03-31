import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Pdf from 'react-native-pdf';

const Pdf1 = ({ route, navigation }) => {
    const { otherParam } = route.params;

    return (
        <View style={styles.container}>

            <Pdf
                source={{ uri: otherParam }}

                style={styles.pdf} />
        </View>
    );
};



export default Pdf1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
        height: 500
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});