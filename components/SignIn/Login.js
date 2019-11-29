import React from 'react';

import {ImageBackground, Text, Button, View, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends React.Component {

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logoView}>
                        <Image
                            source={require('../../img/Signup/logo.png')}
                            style={styles.logo}
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={{fontSize: 25}}>Se connecter</Text>
                    </View>  
                    <View style={styles.loginFacebookView}>
                        <Image 
                            source={require('../../img/Icons/fb.jpg')}
                            style={{width: 30, height: 30}}
                        />
                        <Button
                            title="Connectez-vous avec Facebook"
                            color="#fff"
                        />
                    </View>
                    <View style={styles.ouView}>
                        <Text style={{fontSize: 20}}>Ou</Text>
                    </View>
                    <View style={styles.usernameView}>
                        <TextInput
                            placeholder={"Entrez votre adresse mail"}
                            style={{borderBottomColor: '#ff6a8f', height: 40, width: 340, borderBottomWidth: 1}}
                        />
                    </View>
                    <View style={styles.passwordView}>
                        <TextInput
                            placeholder="Mot de passe"
                            style={{borderBottomColor: '#898989', height: 40, width: 340, borderBottomWidth: 1}}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.loginView}>
                        <Button
                            title="Se connecter"
                            color="#fff"
                            onPress={() => this.props.navigation.navigate('HomepageIndex')}
                        />
                    </View>
                    <View style={styles.passwordMissedView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PasswordMissed')}>
                            <Text style={{color: '#898989'}}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.newClientView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={{textDecorationLine: 'underline', color: '#898989'}}>Nouveau client ?</Text>
                        </TouchableOpacity>
                    </View>   
                </View>
            </ScrollView>
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
    logoView: {
        marginTop: 25,
        padding: 20,
        flex:1
    },
    textView: {
        //  backgroundColor: 'green',
        flex:1,
        paddingBottom: 30
    },
    loginFacebookView: {
        backgroundColor: '#3b5998',
        flex:1,
        width: 340,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    ouView: {
        // backgroundColor: 'green',
        flex:1,
        height: 50,
        marginTop: 10
    },
    usernameView: {
        // backgroundColor: 'red',
        flex:1
    },
    passwordView: {
        // backgroundColor: 'green',
        flex:1,
        margin: 20,
        height: 65
    },
    loginView: {
        // backgroundColor: 'yellow',
        flex:1,
        width: 180,
        height: 40,
        backgroundColor: "#ff6a8f"
    },
    passwordMissedView: {
        flex:1,
        marginTop: 25,
        height: 100
    },
    newClientView: {
        flex:1,
        marginTop: 9
    },
    logo: {
        width: 252,
        height: 62
    }
})