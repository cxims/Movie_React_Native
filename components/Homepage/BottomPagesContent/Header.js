import * as React from "react";
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity} from 'react-native'

const DEVICE_WIDTH = Dimensions.get("window").width
const DEVICE_HEIGHT = Dimensions.get("window").height

export default class ShoppingBag extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}>
                    <Image source={require('../../../img/Signup/back.png')} style={{width: 32, height:32}} />
                </TouchableOpacity>
                <Text style={{fontSize: 23}}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        backgroundColor: '#fff',
        width: DEVICE_WIDTH,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#707070'
    },
    back: {
        position: "absolute",
        top: 22,
        left: 15,
    }
  });