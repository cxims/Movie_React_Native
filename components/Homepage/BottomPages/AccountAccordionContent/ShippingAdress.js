import * as React from 'react'
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native'
import { CheckBox } from 'react-native-elements'

export default ShippingAdressView = 
<ScrollView style={{height: 300}}>
    <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}}>
        <View style={{alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom:20, borderColor: 'black', borderWidth: 1, height: 50, width: 300}}><Text>Ajouter une nouvelle adresse de livraison</Text></View>
    </TouchableOpacity> 
    <View style={{flexDirection: "row",alignItems: "center"}}>
        <CheckBox
        title={'221B Baker Street \n 33000 Bordeaux \n France'}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={true}
        textStyle={{color: 'gray', fontSize: 12}}
        checkedColor='#FF6A8F'
        containerStyle={{width: 200,}}
        />
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 20}}>
            <Image source={require('../../../img/Icons/delete_sign.png')} style={{width: 40, height: 40}}/>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 10}}>
            <Image source={require('../../../img/Icons/edit.png')} style={{width: 40, height: 40}}/>
        </View>
    </View>
    <View style={{flexDirection: "row", alignItems: "center"}}>
        <CheckBox
        title={'221B Baker Street \n 33000 Bordeaux \n France'}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#FF6A8F'
        checked={true}
        textStyle={{color: 'gray', fontSize: 12}}
        containerStyle={{width: 200,}}
        />
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 20}}>
            <Image source={require('../../../img/Icons/delete_sign.png')} style={{width: 40, height: 40}}/>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 10}}>
            <Image source={require('../../../img/Icons/edit.png')} style={{width: 40, height: 40}}/>
        </View>
    </View>
    <View style={{flexDirection: "row",alignItems: "center"}}>
        <CheckBox
        title={'221B Baker Street \n 33000 Bordeaux \n France'}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#FF6A8F'
        checked={true}
        textStyle={{color: 'gray', fontSize: 12}}
        containerStyle={{width: 200,}}
        />
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 20}}>
            <Image source={require('../../../img/Icons/delete_sign.png')} style={{width: 40, height: 40}}/>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 10}}>
            <Image source={require('../../../img/Icons/edit.png')} style={{width: 40, height: 40}}/>
        </View>
    </View>
</ScrollView>