
import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList, ActivityIndicator,
    Image, Dimensions, TouchableOpacity
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import ButtonActive from '../component/ButtonActive';
import ButtonAll from '../component/ButtonAll';
import ButtonClosed from '../component/ButtonClosed';
import ButtonEdit from '../component/ButtonEdit';
import ButtonOverDue from '../component/ButtonOverDue';
import ButtonPending from '../component/ButtonPending';
import RBSheet from "react-native-raw-bottom-sheet";
import STYLES from '../STYLES'
import ImagePicker from 'react-native-image-crop-picker';
import TextInputEdit from '../component/TextInputEdit';
import Svgs from '../assets/svgs/Svgs';
import Button1 from '../component/Button1';
const CustomerNameHere = props => {

    const [statePressPlus, setStatePressPlus] = useState(1);

    const refRBSheetEditCustomer = useRef();
    const [stateImage, setStateImage] = useState(null);
    const [stateInvoicesFlatList, setStateInvoicesFlatlist] =
        useState([
            {
                image: "001", id: 1, no: "001", date: "21/06/2020", price: 300,
                status: 'active'
            },
            { image: "001", id: 3, no: "002", date: "22/06/2020", price: 300, status: 'act' },
            { image: "001", id: 4, no: "003", date: "21/06/2020", price: 400, status: 'active' },
            { image: "001", id: 5, no: "004", date: "22/06/2020", price: 400, status: 'ac' },
            { image: "001", id: 6, no: "005", date: "21/06/2020", price: 500, status: 'active' },
            { image: "001", id: 7, no: "006", date: "22/06/2020", price: 500, status: 'active' },
            { image: "001", id: 8, no: "007", date: "22/06/2020", price: 600, status: 'ac' },
            { image: "001", id: 9, no: "008", date: "21/06/2020", price: 600, status: 'active' },
            { image: "001", id: 10, no: "009", date: "22/06/2020", price: 700, status: 'active' },
        ]);


    const imageTakeFromGallery = () => {

        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImage(image.path)
        });
    }
    return (



        <View

            style={STYLES.container}
        >
            {/* style={STYLES.container} */}
            <View style={{
                flex: 0.07, //backgroundColor: 'red',
                justifyContent: 'space-between',
            }}>
                <Text style={STYLES.fontSize31_000000_LouisGeorgeCafé_Regular}>
                    Customer Name Here</Text>

            </View>
            <View style={{
                flex: 0.15, //backgroundColor: 'green',
                justifyContent: 'space-evenly'
            }}>


                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center', //backgroundColor: 'pink'
                }}>
                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.887" height="17.887" viewBox="0 0 17.887 17.887">
  <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M8.943,10.061A5.031,5.031,0,1,0,3.913,5.031,5.032,5.032,0,0,0,8.943,10.061Zm4.472,1.118H11.49a6.081,6.081,0,0,1-5.094,0H4.472A4.471,4.471,0,0,0,0,15.651v.559a1.677,1.677,0,0,0,1.677,1.677H16.21a1.677,1.677,0,0,0,1.677-1.677v-.559A4.471,4.471,0,0,0,13.415,11.179Z" fill="#a6a6a6"/>
</svg>
`} />
                    <Text style={[STYLES.fontSize17_000000_LouisGeorgeCafé_Regular
                        , { marginLeft: '5%' }]}>This is Adress</Text>
                </View>
                <View style={{
                    width: "17%", position: 'absolute',
                    right: '1%',
                    top: '0%'
                }}>
                    <ButtonEdit onPress={() => refRBSheetEditCustomer.current.open()} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',// backgroundColor: 'blue'
                }}>
                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="13.188" height="13.188" viewBox="0 0 13.188 13.188">
  <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M12.812,9.32,9.927,8.083a.618.618,0,0,0-.721.178L7.928,9.822A9.548,9.548,0,0,1,3.364,5.258L4.925,3.98A.617.617,0,0,0,5.1,3.259L3.866.374A.622.622,0,0,0,3.158.016L.479.634a.618.618,0,0,0-.479.6A11.951,11.951,0,0,0,11.952,13.189a.618.618,0,0,0,.6-.479l.618-2.679a.626.626,0,0,0-.361-.711Z" transform="translate(0 0)" fill="#a6a6a6"/>
</svg>

`} />
                    <Text style={[STYLES.fontSize17_000000_LouisGeorgeCafé_Regular
                        , { marginLeft: '5%' }]}>+92 300 8764218, +92 300 8764218</Text>
                </View>

                <View style={{
                    flexDirection: 'row', //backgroundColor: 'pink',
                    alignItems: 'center'
                }}>
                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.176" height="16.179" viewBox="0 0 16.176 16.179">
  <path id="Icon_awesome-globe" data-name="Icon awesome-globe" d="M10.976,5.521C10.5,2.608,9.388.563,8.09.563S5.676,2.608,5.2,5.521ZM4.958,8.652a20.446,20.446,0,0,0,.108,2.088H11.11a20.446,20.446,0,0,0,.108-2.088,20.446,20.446,0,0,0-.108-2.088H5.066A20.446,20.446,0,0,0,4.958,8.652ZM15.55,5.521A8.107,8.107,0,0,0,10.4.9a11.009,11.009,0,0,1,1.631,4.619ZM5.78.9A8.1,8.1,0,0,0,.63,5.521H4.152A10.965,10.965,0,0,1,5.78.9ZM15.9,6.564H12.157c.069.685.108,1.386.108,2.088s-.039,1.4-.108,2.088H15.9a8.02,8.02,0,0,0,.281-2.088A8.16,8.16,0,0,0,15.9,6.564ZM3.914,8.652c0-.7.039-1.4.108-2.088H.281a7.908,7.908,0,0,0,0,4.175H4.019C3.953,10.055,3.914,9.353,3.914,8.652ZM5.2,11.784c.473,2.913,1.589,4.958,2.887,4.958S10.5,14.7,10.976,11.784ZM10.4,16.4a8.114,8.114,0,0,0,5.154-4.619H12.03A11.009,11.009,0,0,1,10.4,16.4ZM.63,11.784A8.107,8.107,0,0,0,5.783,16.4a11.009,11.009,0,0,1-1.631-4.619H.63Z" transform="translate(0 -0.563)" fill="#a6a6a6"/>
</svg>

`} />
                    <Text style={[STYLES.fontSize17_000000_LouisGeorgeCafé_Regular
                        , { marginLeft: '5%' }]}>www.web.com</Text>
                </View>

            </View>
            <View style={{
                flex: 0.10, //backgroundColor: 'orange',
                justifyContent: 'space-between'
            }}>
                <Text style={STYLES.fontSize21_000000_Arial_Bold}>
                    Invoices</Text>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: '2%',
                    justifyContent: 'space-evenly'
                }}>
                    <ButtonAll />
                    <ButtonActive />
                    <ButtonPending />
                    <ButtonOverDue />
                    <ButtonClosed />
                </View>

            </View>
            <View style={{
                flex: 0.68, //backgroundColor: 'yellow'
            }}>

                <FlatList
                    data={stateInvoicesFlatList}
                    renderItem={({ item }) => {

                        return (
                            <View style={{
                                // backgroundColor: '#FFFFFF',
                                height: 80,// justifyContent: "center",
                                borderBottomWidth: 1,
                                borderColor: '#E2E9FF',
                                flexDirection: 'row',
                                paddingVertical: '4%',
                                // backgroundColor: 'red'
                                //alignItems: 'center'
                            }} >
                                <View style={{
                                    flex: 0.2,
                                    //  backgroundColor: 'green' 
                                }}>
                                    <Image source={require('../assets/images/humanbeing.png')}
                                        resizeMode='contain' style={{
                                            flex: 0.9,
                                            borderRadius: 20,
                                            width: '100%'
                                        }} />
                                </View>
                                <View style={{
                                    justifyContent: 'space-evenly',
                                    flex: 0.8,
                                    paddingLeft: "5%"
                                }}>
                                    <Text style={STYLES.fontSize16_000000_LouisGeorgeCafé_Bold} >
                                        Invoice No # {item.no}</Text>
                                    <Text style={STYLES.fontSize14_000000_LouisGeorgeCafé_Regular_50}>
                                        {item.date}</Text>
                                </View>
                                <View style={{
                                    justifyContent: 'space-between',
                                    // backgroundColor: 'red'
                                }}>
                                    {item.status == 'active' ? <ButtonActive /> :
                                        <ButtonOverDue />
                                    }
                                    <Text style={STYLES.fontSize16_000000_LouisGeorgeCafé_Bold} >
                                        RS. {item.price}</Text>
                                </View>


                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id}


                />
                {statePressPlus == 1 ?
                    <TouchableOpacity style={{
                        position: 'absolute',
                        bottom: "5%",
                        right: '5%',
                        backgroundColor: '#176EFF',
                        height: 70,
                        width: 70,
                        borderRadius: 150,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={() => {
                        setStatePressPlus(0)
                    }}>
                        <Image source={require('../assets/images/plus.png')}
                            resizeMode='contain' style={{
                                flex: 1,// width: '50%',
                                //backgroundColor: 'red'
                                // height: '50%'
                            }} />
                    </TouchableOpacity> : null}


            </View>
            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={470}
                animationType="slide"
                ref={refRBSheetEditCustomer}


                // closeOnPressBack={false}
                customStyles={{
                    container: {
                        //borderRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        paddingVertical: "5%"
                    },

                }}

            >
                <View style={{
                    // justifyContent: 'space-evenly',
                    flex: 1,
                    paddingHorizontal: '5%'
                }}>
                    <View style={{
                        flex: 0.25,// backgroundColor: 'red',
                        justifyContent: 'space-between',
                        // marginBottom: '5%'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={STYLES.fontSize22_2979FF_Arial_Bold}>
                                Edit Customer</Text>

                            <TouchableOpacity onPress={() => refRBSheetEditCustomer.current.close()}>
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                                />
                            </TouchableOpacity>
                        </View>
                        {stateImage === null ?

                            <TouchableOpacity onPress={() => imageTakeFromGallery()}>
                                <SvgXml
                                    style={{ alignSelf: 'center' }}
                                    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="69.347" height="69.347" viewBox="0 0 69.347 69.347">
  <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M34.674.563A34.674,34.674,0,1,0,69.347,35.236,34.668,34.668,0,0,0,34.674.563Zm0,13.422a12.3,12.3,0,1,1-12.3,12.3A12.3,12.3,0,0,1,34.674,13.985Zm0,48.1a26.792,26.792,0,0,1-20.483-9.535,15.588,15.588,0,0,1,13.772-8.361,3.421,3.421,0,0,1,.993.154,18.512,18.512,0,0,0,5.718.965,18.441,18.441,0,0,0,5.718-.965,3.421,3.421,0,0,1,.993-.154,15.588,15.588,0,0,1,13.772,8.361A26.792,26.792,0,0,1,34.674,62.08Z" transform="translate(0 -0.563)" fill="#949494"/>
</svg>
`} />
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => imageTakeFromGallery()}>
                                <Image source={{ uri: stateImage }}
                                    resizeMode='cover' style={{
                                        borderRadius: 50,
                                        alignSelf: 'center',
                                        height: 69,
                                        width: 69
                                    }} />
                            </TouchableOpacity>

                        }

                    </View>
                    <View style={{
                        flex: 0.60, //backgroundColor: 'green',
                        paddingHorizontal: '5%',
                        justifyContent: 'space-evenly'
                    }}>

                        <TextInputEdit placeholder="Name" xml={Svgs.phone} />
                        <TextInputEdit placeholder="Location" xml={Svgs.phone} />
                        <TextInputEdit placeholder="Phone No"
                            keyboardType="numeric"
                            xml={Svgs.phone} />
                        <TextInputEdit placeholder="Website" xml={Svgs.globe} />



                    </View>

                    <View style={{
                        paddingHorizontal: '12%',
                        justifyContent: 'flex-end',
                        flex: 0.15, //backgroundColor: 'red'
                    }}>
                        <Button1
                            text="Update"

                        //  onPress={() => refRBSheetEditFrom.current.open()}
                        />
                    </View>
                </View>
            </RBSheet>

            {statePressPlus == 0 ?
                <View style={STYLES.darkContainer}>
                    <View style={{
                        height: '40%', justifyContent: 'space-evenly',
                        right: '8%', bottom: '1%', //backgroundColor: 'red',
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


export default CustomerNameHere;