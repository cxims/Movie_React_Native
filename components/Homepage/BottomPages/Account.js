import * as React from "react";
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar} from 'react-native'
import HeaderAccount from '../BottomPagesContent/HeaderAccount'
import AccountNavigator from '../Routers/routerAccount'
import {createAppContainer} from 'react-navigation'

const AccountTop = createAppContainer(AccountNavigator)  

const DEVICE_WIDTH = Dimensions.get("window").width
const DEVICE_HEIGHT = Dimensions.get("window").height

export default class Account extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <HeaderAccount title="Mon compte"/>
            <AccountTop/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 8,
        backgroundColor: '#F4F4F4',
        width: DEVICE_WIDTH,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
})