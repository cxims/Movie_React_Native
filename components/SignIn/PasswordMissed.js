import React from 'react';

import {ImageBackground, Text, Button, View, StyleSheet, Image, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PasswordMissed extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.backLogo}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image 
                            source={require('../../img/Signup/back.png')}
                            style={{width: 28, height: 28}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.logoView}>
                        <Image 
                            source={require('../../img/Signup/logo.png')}
                            style={{width: 252, height: 62}}
                        />
                </View>
                <View style={styles.passwordMissed}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Mot de passe oublié</Text>
                    <View style={styles.desc}>
                        <Text>Entrez votre adresse email ci-dessous et nous vous</Text>
                        <Text>enverrons un nouveau mot de passe</Text>
                    </View>
                </View>
                <View style={styles.emailInputView}>
                <TextInput
                        value={"Entrez votre adresse email"}
                        style={{borderBottomColor: '#898989', height: 40, width: 350, borderBottomWidth: 1, color: "gray"}}
                    />
                </View>
                <View style={styles.sendView}>
                    <Button
                        title="Envoyez"
                        color="#fff"
                    />
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
        alignItems: 'center'
    },
    backLogo: {
        position: "absolute",
        top: 40,
        left: 10
    },
    logo: {
        flex:1,
        marginRight: 220,
        marginTop: 25,
    },
    logoView: {
        margin: 15,
        padding: 20,
        height: 60,
        flex:1
    },
    passwordMissed: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    desc: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailInputView: {
        flex: 1
    },
    sendView: {
        position: "absolute",
        bottom: 30,
        width: 230,
        height: 50,
        backgroundColor: '#ff6a8f',
        justifyContent: 'center',
        alignItems: 'center',
    }
});    