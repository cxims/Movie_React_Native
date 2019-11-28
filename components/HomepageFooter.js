import React from 'react';

import {ImageBackground, StatusBar, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';

export default class HomepageFooter extends React.Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.contentFooter}>
                    <Image source={require('../img/Icons/Logo.png')} style={{width: 25, height: 25}}/>
                    <Text style={{fontSize: 10}}>ACCUEIL</Text>
                </View> 
                <View style={styles.contentFooter}>
                    <Image source={require('../img/Icons/shopping_cart.png')} style={{width: 25, height: 25}}/>
                    <Text style={{fontSize: 10}}>MON PANIER</Text>
                </View>
                <View style={styles.contentFooter}>
                    <Image source={require('../img/Icons/like.png')} style={{width: 25, height: 25}}/>
                    <Text style={{fontSize: 10}}>MA WISHLIST</Text>
                </View>
                <View style={styles.contentFooter}>
                    <Image source={require('../img/Icons/user.png')} style={{width: 25, height: 25}}/>
                    <Text style={{fontSize: 10}}>MON COMPTE</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
       
        height: 60,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        borderTopEndRadius: 4,
        borderTopWidth: 1
    },
    contentFooter: {
        flexDirection: 'column',
        alignItems: 'center'
    }
})