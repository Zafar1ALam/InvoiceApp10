import React, { useEffect, useState } from 'react';
import {
    View, Text, ImageBackground,
    Image, Dimensions
} from 'react-native'
import STYLES from '../STYLES'
import { SvgXml } from 'react-native-svg';
const Splash = ({ navigation }) => {
    const [stateIsVisible, setStateIsVisible] = useState(true)
    useEffect(() => {
        {
            if (!stateIsVisible) {
                navigation.navigate("SignUp")
            }
            else {
                setTimeout(() => {
                    setStateIsVisible(false)
                }
                    , 5000);
            }
        }

    }, [stateIsVisible])


    return (
        // <View style={STYLES.container}>

        <ImageBackground
            resizeMode="cover"
            style={[STYLES.backgroundImageContainer,
            ]} source={require('../assets/images/Splash.png')}>

            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 0.6,// backgroundColor: 'red',
                    justifyContent: 'flex-end', alignItems: 'center',

                }}>
                    <View style={{
                        flex: 0.4, width: '100%',
                        alignItems: 'center',// backgroundColor: 'green'
                    }}>
                        {/* <Image source={require('../assets/images/bglogo.png')}
                            style={{
                                flex: 1,
                                resizeMode: 'contain',
                                //  backgroundColor: 'green'
                            }} /> */}
                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="173" height="173" viewBox="0 0 173 173">
  <defs>
    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 173 173">
      <image width="173" height="173" xlink:href="data:image/png;base64,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"/>
    </pattern>
  </defs>
  <rect id="Image_15" data-name="Image 15" width="173" height="173" rx="100" fill="url(#pattern)"/>
</svg>
`} />
                    </View>
                </View>
                <View style={{
                    flex: 0.4,
                    justifyContent: 'flex-end', alignItems: 'center'
                }}>
                    <Text style={[STYLES.fontSize16_FFFFFF_Roboto_Medium,
                    { marginBottom: '5%' }]}>
                        By M TECHUB PVT LTD. </Text>
                </View>
            </View>




        </ImageBackground>



    );
};



export default Splash;