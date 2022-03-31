import { StyleSheet, Dimensions } from "react-native";

const STYLES1 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        //backgroundColor: 'red',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingHorizontal: '5%',
        paddingTop: '5%',

    },
    darkContainer: {

        flex: 1,
        backgroundColor: 'rgba(29,29,29,0.26)',
        //backgroundColor: 'red',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // paddingHorizontal: '5%',
        borderColor: '#707070',
        borderWidth: 1,

        position: 'absolute'



    },//
    backgroundImageContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    fontSize45_FFFFFF_LouisGeorgeCafé_Bold: {
        fontSize: 45,
        color: "#FFFFFF",
        //fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },
    fontSize44_176EFF_LouisGeorgeCafé_Bold: {
        fontSize: 44,
        color: "#176EFF",
        //  fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },
    fontSize40_FFFFFF_LouisGeorgeCafé_Regular: {
        fontSize: 40,
        color: "#FFFFFF",
        fontFamily: 'Louis George Cafe',
        //  Louis George Café_ REGULAR
        fontWeight: '100'
    },

    fontSize40_2D2D2D_LouisGeorgeCafé_Regular: {
        fontSize: 40,
        color: "#2D2D2D",
        fontFamily: 'Louis George Cafe',
        fontWeight: '100'
        //  Louis George Café_ REGULAR
    },

    fontSize33_FFFFFF_LouisGeorgeCafé_Bold: {
        fontSize: 33,
        color: "#FFFFFF",
        // fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },//
    fontSize31_7A7A7A_LouisGeorgeCafé_Bold: {
        fontSize: 31,
        color: "#7A7A7A",
        // fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },
    fontSize31_2979FF_LouisGeorgeCafé_Bold: {
        fontSize: 31,
        color: "#2979FF",
        // fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },
    fontSize31_000000_LouisGeorgeCafé_Regular: {
        fontSize: 31,
        color: "#000000",
        fontFamily: 'Louis George Cafe',
        fontWeight: '100'
        //  Louis George Café_ Bold Regular
    },
    fontSize25_939393_Arial_Bold: {
        fontSize: 25,
        color: "#939393",
        fontFamily: 'Arial',
        fontWeight: 'bold'
        //  Arial Bold
    },
    fontSize24_000000_LouisGeorgeCafé_Regular: {
        fontSize: 24,
        color: "#000000",
        fontFamily: 'Louis George Cafe ',
        fontWeight: '100',
        //  Louis George Café_ Regular
    },
    fontSize22_FFFFFF_Arial_Bold: {
        fontSize: 22,
        color: "#FFFFFF",
        fontFamily: 'Arial',
        fontWeight: 'bold'
        //  Arial Bold
    },//
    fontSize22_2979FF_Arial_Bold: {
        fontSize: 22,
        color: "#2979FF",
        fontFamily: 'Arial',
        fontWeight: 'bold'
        //  Arial Bold
    },//
    fontSize21_000000_Arial_Bold: {
        fontSize: 21,
        color: "#000000",
        // fontWeight: 'bold',
        fontFamily: 'Arial',
        fontWeight: 'bold'
        //  Arial Bold
    },///

    fontSize20_000000_LouisGeorgeCafé_Regular: {
        fontSize: 20,
        color: "#000000",
        fontFamily: 'Louis George Cafe ',
        fontWeight: '100'
        //  Louis George Café_ Regular
    },
    fontSize20_7A7A7A_Roboto_Regular_60: {
        fontSize: 20,
        color: "rgba(29, 34, 38,0.60)",
        fontFamily: 'Roboto',
        fontWeight: '100'
        // Roboto_Regular
    },
    fontSize18_000000_Arial_Bold: {
        fontSize: 18,
        color: "#000000",
        fontFamily: 'Arial',
        fontWeight: 'bold'
        //  Arial Bold
    },
    fontSize18_2979FF_Arial_Regular: {
        fontSize: 18,
        color: "#2979FF",
        fontFamily: 'Arial',
        fontWeight: '100'
        //  Arial Regular
    },
    fontSize18_000000_Arial_Regular: {
        fontSize: 18,
        color: "#000000",
        fontFamily: 'Arial',
        fontWeight: '100'
        //  Arial Regular
    },
    fontSize17_000000_LouisGeorgeCafé_Regular: {
        fontSize: 17,
        color: "#000000",
        fontFamily: 'Louis George Cafe',
        fontWeight: '100'
        //  Louis George Café
    },
    fontSize17_FFFFFF_LouisGeorgeCafé_Bold: {
        fontSize: 17,
        color: "#FFFFFF",
        // fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },
    fontSize17_2979FF_LouisGeorgeCafé_Bold: {
        fontSize: 17,
        color: "#2979FF",
        // fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },//
    fontSize16_000000_LouisGeorgeCafé_Bold: {
        fontSize: 16,
        color: "#000000",
        // fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },

    fontSize16_FFFFFF_Roboto_Medium: {
        fontSize: 16,
        color: "#FFFFFF",
        fontFamily: 'Roboto-Medium'
        //  ROBOTO_MEDIUM

    },
    fontSize16_000000_Arial_Regular: {
        fontSize: 16,
        color: "#000000",
        fontFamily: 'Arial',
        fontWeight: '100'
        //  Arial Regular
    },
    fontSize16_979797_Arial_Regular: {
        fontSize: 16,
        color: "#979797",
        fontFamily: 'Arial',
        fontWeight: '100'
        //  Arial Regular
    },
    fontSize15_000000_LouisGeorgeCafé_Regular: {
        fontSize: 15,
        color: "#000000",
        fontFamily: 'Louis George Cafe'
        ,
        fontWeight: '100'
        //  Louis George Café
    },
    fontSize15_000000_Arial_Regular: {
        fontSize: 15,
        color: "#000000",
        fontFamily: 'Arial',
        fontWeight: '100'
        // Arial Regular
    },
    fontSize15_000000_Arial_Regular_48: {
        fontSize: 15,
        color: "rgba(0, 0, 0,0.48)",
        fontFamily: 'Arial',
        fontWeight: '100'
        // Arial Regular
    },//
    fontSize15_176EFF_Roboto_Regular: {
        fontSize: 15,
        color: "#176EFF",
        fontFamily: 'Roboto',
        fontWeight: '100'
        // Roboto_Regular
    },
    fontSize14_FFFFFF_LouisGeorgeCafé_Bold: {
        fontSize: 20,
        color: "#FFFFFF",
        //fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },
    fontSize14_2979FF_Arial_Bold: {
        fontSize: 14,
        color: "#2979FF",
        fontWeight: 'bold',
        fontFamily: 'Arial'
        //  Arial Bold
    },//
    fontSize14_1A1A1A_Roboto_Regular_56: {
        fontSize: 14,
        color: "rgba(26, 26, 26,0.56)",
        fontFamily: 'Roboto-Regular'
        // Roboto_Regular
    },
    fontSize14_2979FF_LouisGeorgeCafé_Bold: {
        fontSize: 14,
        color: "#2979FF",
        // fontFamily: 'Louis George Cafe Bold'
        fontFamily: 'Louis George Cafe',
        fontWeight: 'bold'
        //  Louis George Café_ Bold
    },
    fontSize14_2979FF_LouisGeorgeCafé_Regular: {
        fontSize: 14,
        color: "#2979FF",
        fontFamily: 'Louis George Cafe Regular',
        fontWeight: '100'

        //  Louis George Café_ Regular
    },//
    fontSize14_000000_LouisGeorgeCafé_Regular: {
        fontSize: 14,
        color: "#000000",
        fontFamily: 'Louis George Cafe ',
        fontWeight: '100'
        //  Louis George Café_ Regular
    },
    fontSize14_000000_LouisGeorgeCafé_Regular_50: {
        fontSize: 14,
        color: "rgba(0, 0, 0,0.50)",
        fontFamily: 'Louis George Cafe ',
        fontWeight: '100'
        //  Louis George Café_ Bold
    },

    fontSize14_FFFFFF_LouisGeorgeCafé_Regular_50: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.50)',
        // color: '#FFFFFF',
        fontFamily: 'Louis George Cafe',
        fontWeight: '100'
        //  Louis George Café_ Regular
    },
    fontSize14_FFFFFF_LouisGeorgeCafé_Regular: {
        fontSize: 14,

        color: '#FFFFFF',
        fontFamily: 'Louis George Cafe',
        fontWeight: '100'
        //  Louis George Café_ Regular
    },
    fontSize13_2979FF_LouisGeorgeCafé_Regular: {
        fontSize: 13,
        color: "#2979FF",
        fontFamily: 'Louis George Cafe',
        fontWeight: '100'
        //  Louis George Café_ Regular
    },
    fontSize13_FFFFFF_LouisGeorgeCafé_Regular: {
        fontSize: 13,
        color: "#FFFFFF",
        fontFamily: 'Louis George Cafe',
        fontWeight: '100'
        //  Louis George Café_ Regular
    },
    fontSize12_1A1A1A_Roboto_Regular: {
        fontSize: 12,
        color: "#1A1A1A",
        fontFamily: 'Roboto',
        fontWeight: '100'
        // Roboto_Regular
    },
    //#2979FF

    fontSize12_2979FF_Roboto_Regular: {
        fontSize: 12,
        color: "#2979FF",
        fontFamily: 'Roboto',
        fontWeight: '100'
        // Roboto_Regular
    },
    fontSize11_2979FF_LouisGeorgeCafé_Regular: {
        fontSize: 11,
        color: "#2979FF",
        fontFamily: 'Louis George Cafe',
        fontWeight: '100'
        //  Louis George Café_ Regular
    },

})
export default STYLES1