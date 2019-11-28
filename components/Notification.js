import React from 'react'

import {ImageBackground, Text, Button, View, StyleSheet, Image, TextInput} from 'react-native';

export default class Notification extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={require('../img/Signup/logo.png')}
                        style={{width: 252, height: 62}}
                    />
                </View>
                <View style={styles.desc}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Activer les notifications</Text>
                </View>
                <View style={styles.image}>
                    <Image
                        source={require('../img/Signup/rectangle.png')}
                        style={{width: 400, height: 550}}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Activer les notifications'
                        color="#ff6a8f"
                    />
                </View>
                <View style={{flex:1}}>
                    <Text style={{color: '#898989'}}>Ignorer</Text>
                </View>
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
    logo: {
        flex: 1,
        marginTop: 25,
    },
    desc: {
        flex: 1,
        marginTop: 10
    },
    image: {
        flex: 6
    },
    button: {
        flex:1
    }
})