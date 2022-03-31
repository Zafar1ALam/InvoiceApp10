import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import ButtonActive from '../component/ButtonActive';
import RBSheet from "react-native-raw-bottom-sheet";
import Button1 from '../component/Button1';
import { RadioButton } from 'react-native-paper';
import STYLES from '../STYLES'
const InvoiceView = props => {
    const [statePressPlus, setStatePressPlus] = useState(1);
    const refRBSheet = useRef();
    const [checked, setChecked] = React.useState('first');
    const [stateFlatlist, setStateFlatList] = useState([
        {
            id: 1,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
            discount: '5%', price: 100,
            quantity: 1, total: 100
        },
        {
            id: 2,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
            discount: '5%', price: 100,
            quantity: 1, total: 100
        },
        {
            id: 3,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
            discount: '5%', price: 100,
            quantity: 1, total: 100
        },
        {
            id: 4,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
            discount: '5%', price: 100,
            quantity: 1, total: 100
        },

    ])
    return (
        <View style={STYLES.container}>
            <View style={{
                flex: 0.1, //backgroundColor: 'red',
                //justifyContent: 'flex-start'
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'baseline'
                }}>
                    <Text style={STYLES.fontSize31_000000_LouisGeorgeCafé_Regular}>
                        Invoices # 001</Text>
                    <ButtonActive />
                </View>
                <Text style={STYLES.fontSize15_000000_LouisGeorgeCafé_Regular}>Date: 01-01-1999</Text>
            </View>
            <View style={{
                flex: 0.15, //backgroundColor: 'green'
            }}>
                <View style={{
                    flex: 0.25,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    //   backgroundColor: 'green'
                }}>
                    <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                        From :</Text>
                    <Text style={STYLES.fontSize18_2979FF_Arial_Regular}>User Name Here</Text>
                </View>
                <View style={{
                    flex: 0.65,// backgroundColor: 'yellow',
                    justifyContent: 'space-evenly'
                }}>
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: '2%',
                        alignItems: 'center'
                    }}>

                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="13.188" height="13.188" viewBox="0 0 13.188 13.188">
  <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M12.812,9.32,9.927,8.083a.618.618,0,0,0-.721.178L7.928,9.822A9.548,9.548,0,0,1,3.364,5.258L4.925,3.98A.617.617,0,0,0,5.1,3.259L3.866.374A.622.622,0,0,0,3.158.016L.479.634a.618.618,0,0,0-.479.6A11.951,11.951,0,0,0,11.952,13.189a.618.618,0,0,0,.6-.479l.618-2.679a.626.626,0,0,0-.361-.711Z" transform="translate(0 0)" fill="#a6a6a6"/>
</svg>


`}
                        />

                        <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular,
                        { marginLeft: '5%' }]}>This is Address</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: '2%',
                        alignItems: 'center'
                    }}>

                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="13.188" height="13.188" viewBox="0 0 13.188 13.188">
  <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M12.812,9.32,9.927,8.083a.618.618,0,0,0-.721.178L7.928,9.822A9.548,9.548,0,0,1,3.364,5.258L4.925,3.98A.617.617,0,0,0,5.1,3.259L3.866.374A.622.622,0,0,0,3.158.016L.479.634a.618.618,0,0,0-.479.6A11.951,11.951,0,0,0,11.952,13.189a.618.618,0,0,0,.6-.479l.618-2.679a.626.626,0,0,0-.361-.711Z" transform="translate(0 0)" fill="#a6a6a6"/>
</svg>


`}
                        />

                        <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular,
                        { marginLeft: '5%' }]}>+92 300 8764218, +92 300 8764218</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: '2%',
                        alignItems: 'center'
                    }}>

                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.176" height="16.179" viewBox="0 0 16.176 16.179">
  <path id="Icon_awesome-globe" data-name="Icon awesome-globe" d="M10.976,5.521C10.5,2.608,9.388.563,8.09.563S5.676,2.608,5.2,5.521ZM4.958,8.652a20.446,20.446,0,0,0,.108,2.088H11.11a20.446,20.446,0,0,0,.108-2.088,20.446,20.446,0,0,0-.108-2.088H5.066A20.446,20.446,0,0,0,4.958,8.652ZM15.55,5.521A8.107,8.107,0,0,0,10.4.9a11.009,11.009,0,0,1,1.631,4.619ZM5.78.9A8.1,8.1,0,0,0,.63,5.521H4.152A10.965,10.965,0,0,1,5.78.9ZM15.9,6.564H12.157c.069.685.108,1.386.108,2.088s-.039,1.4-.108,2.088H15.9a8.02,8.02,0,0,0,.281-2.088A8.16,8.16,0,0,0,15.9,6.564ZM3.914,8.652c0-.7.039-1.4.108-2.088H.281a7.908,7.908,0,0,0,0,4.175H4.019C3.953,10.055,3.914,9.353,3.914,8.652ZM5.2,11.784c.473,2.913,1.589,4.958,2.887,4.958S10.5,14.7,10.976,11.784ZM10.4,16.4a8.114,8.114,0,0,0,5.154-4.619H12.03A11.009,11.009,0,0,1,10.4,16.4ZM.63,11.784A8.107,8.107,0,0,0,5.783,16.4a11.009,11.009,0,0,1-1.631-4.619H.63Z" transform="translate(0 -0.563)" fill="#a6a6a6"/>
</svg>

`}
                        />

                        <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular,
                        { marginLeft: '5%' }]}>www.web.com</Text>
                    </View>
                </View>
            </View>
            <View style={{
                flex: 0.15,// backgroundColor: 'blue' 
            }}>
                <View style={{
                    flex: 0.25,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    //  backgroundColor: 'green'
                }}>
                    <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                        Billed To :</Text>
                    <Text style={STYLES.fontSize18_2979FF_Arial_Regular}>
                        Customer Name Here</Text>
                </View>
                <View style={{
                    flex: 0.65,// backgroundColor: 'yellow',
                    justifyContent: 'space-evenly'
                }}>
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: '2%',
                        alignItems: 'center'
                    }}>

                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="13.188" height="13.188" viewBox="0 0 13.188 13.188">
  <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M12.812,9.32,9.927,8.083a.618.618,0,0,0-.721.178L7.928,9.822A9.548,9.548,0,0,1,3.364,5.258L4.925,3.98A.617.617,0,0,0,5.1,3.259L3.866.374A.622.622,0,0,0,3.158.016L.479.634a.618.618,0,0,0-.479.6A11.951,11.951,0,0,0,11.952,13.189a.618.618,0,0,0,.6-.479l.618-2.679a.626.626,0,0,0-.361-.711Z" transform="translate(0 0)" fill="#a6a6a6"/>
</svg>


`}
                        />

                        <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular,
                        { marginLeft: '5%' }]}>This is Address</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: '2%',
                        alignItems: 'center'
                    }}>

                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="13.188" height="13.188" viewBox="0 0 13.188 13.188">
  <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M12.812,9.32,9.927,8.083a.618.618,0,0,0-.721.178L7.928,9.822A9.548,9.548,0,0,1,3.364,5.258L4.925,3.98A.617.617,0,0,0,5.1,3.259L3.866.374A.622.622,0,0,0,3.158.016L.479.634a.618.618,0,0,0-.479.6A11.951,11.951,0,0,0,11.952,13.189a.618.618,0,0,0,.6-.479l.618-2.679a.626.626,0,0,0-.361-.711Z" transform="translate(0 0)" fill="#a6a6a6"/>
</svg>


`}
                        />

                        <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular,
                        { marginLeft: '5%' }]}>+92 300 8764218, +92 300 8764218</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: '2%',
                        alignItems: 'center'
                    }}>

                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.176" height="16.179" viewBox="0 0 16.176 16.179">
  <path id="Icon_awesome-globe" data-name="Icon awesome-globe" d="M10.976,5.521C10.5,2.608,9.388.563,8.09.563S5.676,2.608,5.2,5.521ZM4.958,8.652a20.446,20.446,0,0,0,.108,2.088H11.11a20.446,20.446,0,0,0,.108-2.088,20.446,20.446,0,0,0-.108-2.088H5.066A20.446,20.446,0,0,0,4.958,8.652ZM15.55,5.521A8.107,8.107,0,0,0,10.4.9a11.009,11.009,0,0,1,1.631,4.619ZM5.78.9A8.1,8.1,0,0,0,.63,5.521H4.152A10.965,10.965,0,0,1,5.78.9ZM15.9,6.564H12.157c.069.685.108,1.386.108,2.088s-.039,1.4-.108,2.088H15.9a8.02,8.02,0,0,0,.281-2.088A8.16,8.16,0,0,0,15.9,6.564ZM3.914,8.652c0-.7.039-1.4.108-2.088H.281a7.908,7.908,0,0,0,0,4.175H4.019C3.953,10.055,3.914,9.353,3.914,8.652ZM5.2,11.784c.473,2.913,1.589,4.958,2.887,4.958S10.5,14.7,10.976,11.784ZM10.4,16.4a8.114,8.114,0,0,0,5.154-4.619H12.03A11.009,11.009,0,0,1,10.4,16.4ZM.63,11.784A8.107,8.107,0,0,0,5.783,16.4a11.009,11.009,0,0,1-1.631-4.619H.63Z" transform="translate(0 -0.563)" fill="#a6a6a6"/>
</svg>

`}
                        />

                        <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular,
                        { marginLeft: '5%' }]}>www.web.com</Text>
                    </View>
                </View>

            </View>

            <View style={{
                flex: 0.35,// backgroundColor: 'orange'
            }}>
                <View style={{
                    flex: 0.1, //backgroundColor: 'red', 
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: '40%', //backgroundColor: 'green',
                        justifyContent: 'center'
                    }}>
                        <Text style={[STYLES.fontSize18_000000_Arial_Bold,
                        ]}>

                            Description</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        width: '17%', //backgroundColor: 'green'
                    }}>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                            Price</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        width: '24%',// backgroundColor: 'red'
                    }}>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                            Quantity</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        width: '17%',// backgroundColor: 'green'
                    }}>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                            Total</Text>
                    </View>

                </View>

                <View style={{
                    flex: 0.9, //backgroundColor: 'green'
                }}>
                    <FlatList
                        data={stateFlatlist}
                        renderItem={({ item }) => {
                            console.log(item.id)
                            console.log(item.date)
                            return (
                                <View style={{
                                    // backgroundColor: '#FFFFFF',
                                    height: 80,// justifyContent: "center",
                                    borderBottomWidth: 1,
                                    borderColor: '#E2E9FF',
                                    flexDirection: 'row',
                                    // paddingVertical: '4%',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                    // backgroundColor: 'red'
                                    //alignItems: 'center'
                                }} >
                                    <View style={{
                                        width: '40%', //backgroundColor: 'green',
                                        justifyContent: 'center'
                                    }}>
                                        <Text
                                            numberOfLines={2}
                                            style={STYLES.fontSize15_000000_Arial_Regular}>{item.description}</Text>
                                        <Text style={STYLES.fontSize15_000000_Arial_Regular_48}>discount ({item.discount})</Text>

                                    </View>
                                    <View style={{
                                        alignItems: 'center',
                                        width: '17%', //backgroundColor: 'green'
                                    }}>
                                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>{item.price}</Text>
                                    </View>
                                    <View style={{
                                        alignItems: 'center',
                                        width: '24%', //backgroundColor: 'red'
                                    }}>
                                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>{item.quantity}</Text>
                                    </View>
                                    <View style={{
                                        alignItems: 'center',
                                        width: '17%', //backgroundColor: 'green'
                                    }}>
                                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>{item.total}</Text>

                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id}


                    />

                </View>
            </View>
            <View style={{
                flex: 0.25,// backgroundColor: 'pink',
                justifyContent: 'space-between'
            }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>Discount</Text>
                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>5%</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>Tax</Text>
                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>4%</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>Subtotal</Text>
                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>300 Rs</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>Total</Text>
                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>240 RS</Text>
                    </View>
                </View>


                {statePressPlus == 1 ?
                    <TouchableOpacity
                        onPress={() => { setStatePressPlus(0) }}
                        style={{
                            position: 'absolute',
                            bottom: "45%",
                            right: '1%',
                            backgroundColor: '#176EFF',
                            height: 70,
                            width: 70,
                            borderRadius: 150,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Image source={require('../assets/images/plus.png')}
                            resizeMode='contain' style={{
                                flex: 1,// width: '50%',
                                //backgroundColor: 'red'
                                // height: '50%'
                            }} />
                    </TouchableOpacity> : null}

                <View style={{
                    paddingHorizontal: '12%',
                    paddingBottom: '3%'
                }}>
                    <Button1
                        text="Change Status"

                        onPress={() => refRBSheet.current.open()
                        } />
                </View>

            </View>


            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={320}
                animationType="slide"
                ref={refRBSheet}


                // closeOnPressBack={false}
                customStyles={{
                    container: {
                        //borderRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,

                    },

                }}

            >
                <View style={{
                    justifyContent: 'space-evenly', flex: 1,
                    paddingHorizontal: '5%'
                }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={STYLES.fontSize22_2979FF_Arial_Bold}>Update Invoice Status </Text>

                        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        //backgroundColor: 'red'
                    }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <Text style={[STYLES.fontSize16_000000_Arial_Regular,
                        { marginLeft: '5%' }]}>
                            Active</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={[STYLES.fontSize16_000000_Arial_Regular,
                        { marginLeft: '5%' }]}>
                            Pending </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                        <RadioButton
                            value="third"
                            status={checked === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('third')}
                        />
                        <Text style={[STYLES.fontSize16_000000_Arial_Regular,
                        { marginLeft: '5%' }]}>Completed </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: '12%',

                    }}>
                        <Button1
                            text="Update"

                            onPress={() => refRBSheet.current.open()
                            } />
                    </View>
                </View>
            </RBSheet>










            {statePressPlus == 0 ?
                <View style={STYLES.darkContainer}>
                    <View style={{

                        height: '40%',
                        justifyContent: 'space-evenly',
                        right: '8%', bottom: '1%',
                        //backgroundColor: 'red',
                        alignItems: 'center',
                        position: 'absolute'
                    }}>
                        <TouchableOpacity >
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
<g id="Group_308" data-name="Group 308" transform="translate(-364 -709)">
<g id="Group_272" data-name="Group 272" transform="translate(1 -7)">
<g id="Group_253" data-name="Group 253" transform="translate(24 -45.09)">
<circle id="Ellipse_99" data-name="Ellipse 99" cx="20" cy="20" r="20" transform="translate(339 761.09)" fill="#fff"/>
</g>
<g id="Group_307" data-name="Group 307">
<path id="Icon_material-email" data-name="Icon material-email" d="M17.964,6H4.663A1.66,1.66,0,0,0,3.008,7.663L3,17.638A1.668,1.668,0,0,0,4.663,19.3h13.3a1.668,1.668,0,0,0,1.663-1.663V7.663A1.668,1.668,0,0,0,17.964,6Zm0,3.325-6.651,4.157L4.663,9.325V7.663l6.651,4.157,6.651-4.157Z" transform="translate(371.687 723.35)" fill="#176eff"/>
</g>
</g>
</g>
</svg>
`} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
<g id="Group_271" data-name="Group 271" transform="translate(-363 -658)">
<g id="Group_254" data-name="Group 254" transform="translate(24 -103.09)">
<circle id="Ellipse_99" data-name="Ellipse 99" cx="20" cy="20" r="20" transform="translate(339 761.09)" fill="#fff"/>
</g>
<g id="Group_306" data-name="Group 306">
<path id="Icon_ionic-ios-share-alt" data-name="Icon ionic-ios-share-alt" d="M22.551,13.122l-6.69-6.259A.342.342,0,0,0,15.6,6.75c-.209.009-.474.156-.474.379v3.139a.2.2,0,0,1-.171.194C8.3,11.482,5.5,16.46,4.505,21.628c-.038.2.237.394.365.232a12.092,12.092,0,0,1,10.052-5.092.235.235,0,0,1,.2.228v3.082a.407.407,0,0,0,.687.251l6.737-6.368a.524.524,0,0,0,.166-.4A.635.635,0,0,0,22.551,13.122Z" transform="translate(369.498 663.25)" fill="#176eff"/>
</g>
</g>
</svg>


`} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setStatePressPlus(1)
                        }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58">
<g id="Group_304" data-name="Group 304" transform="translate(-355 -823)">
<g id="Group_252" data-name="Group 252" transform="translate(16 62)">
<circle id="Ellipse_99" data-name="Ellipse 99" cx="29" cy="29" r="29" transform="translate(339 761)" fill="#176eff"/>
<g id="Group_305" data-name="Group 305">
<g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(364.407 775.743) rotate(30)">
<path id="Path_2983" data-name="Path 2983" d="M18,7.5V28.526" transform="translate(-7.487 -7.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
<path id="Path_2984" data-name="Path 2984" d="M7.5,18H28.526" transform="translate(-7.5 -7.487)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
</g>
</g>
</g>
</g>
</svg>
`} />
                        </TouchableOpacity>

                    </View>

                </View> : null}





        </View>
    );
};



export default InvoiceView;