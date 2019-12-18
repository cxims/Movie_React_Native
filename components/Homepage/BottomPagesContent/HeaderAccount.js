import * as React from "react";
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity} from 'react-native'

const DEVICE_WIDTH = Dimensions.get("window").width
const DEVICE_HEIGHT = Dimensions.get("window").height

export default class HeaderAccount extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}>
                    <Image source={require('../../../img/Signup/back.png')} style={{width: 32, height:32}} />
                </TouchableOpacity>
                <Text style={{fontSize: 23, marginBottom: 10}}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: 50,
        backgroundColor: '#fff',
        width: DEVICE_WIDTH,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#707070'
    },
    back: {
        position: "absolute",
        top: 5,
        left: 15,
    }
  });