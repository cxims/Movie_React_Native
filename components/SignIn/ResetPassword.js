import React from 'react';

import {ImageBackground, Text, Button, View, StyleSheet, Image, TextInput} from 'react-native';
import { bold } from 'ansi-colors';

export default class ResetPassword extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.backLogo}>
                        <Image 
                            source={require('../../img/Signup/back.png')}
                            style={{width: 28, height: 28}}
                        />
                    </View>
                    <View style={styles.logo}>
                        <Image 
                            source={require('../../img/Signup/logo.png')}
                            style={{width: 200, height: 50}}
                        />
                    </View>
                </View>
                <View style={styles.passwordMissed}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Réinitialiser mon mot de passe</Text>
                    <View style={styles.desc}>
                        <Text>Entrez votre nouveau mot de passe ci-dessous pour le</Text>
                        <Text>réinitialiser.</Text>
                    </View>
                </View>
                <View style={styles.emailInputView}>
                <TextInput
                        value={"Entrez votre nouveau mot de passe"}
                        style={{borderBottomColor: '#898989', height: 40, width: 390, borderBottomWidth: 1, color: "gray"}}
                        
                    />
                </View>
                <View style={styles.sendView}>
                    <Button
                        title="Envoyez"
                        color="#ff6a8f"
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
    header: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    backLogo: {
        flex:1,
        marginLeft: 20,
        marginTop: 35,
    },
    logo: {
        flex:1,
        marginRight: 220,
        marginTop: 25,
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
        flex: 1,
        width: 230,
    }
});    