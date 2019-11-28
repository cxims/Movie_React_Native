import React from 'react';

import {ImageBackground, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Register extends React.Component {
    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.backLogo}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image 
                                    source={require('../img/Signup/back.png')}
                                    style={{width: 28, height: 28}}
                                />
                            </TouchableOpacity>
                        </View>
                    <View style={styles.logoView}>
                            <Image 
                                source={require('../img/Signup/logo.png')}
                                style={{width: 252, height: 62}}
                            />
                    </View>
                    <View style={styles.loginFacebook}>
                        <Image 
                            source={require('../img/Icons/fb.jpg')}
                            style={{width: 30, height: 30}}
                        />
                        <Button
                            title="Connectez-vous avec Facebook"
                            color="#fff"
                        />
                    </View>
                    <View style={styles.textInput2}>
                        <TextInput
                            placeholder={"Nom"}
                            style={{borderBottomColor: '#898989', height: 40, width: 168, borderBottomWidth: 1, color: "gray"}}
                        />
                        <TextInput
                            placeholder={"Prénom"}
                            style={{borderBottomColor: '#898989', height: 40, width: 168, borderBottomWidth: 1, color: "gray", marginLeft: 10}}
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder={"Adresse email"}
                            style={{borderBottomColor: '#898989', height: 40, width: 350, borderBottomWidth: 1, color: "gray"}}
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder={"Téléphone"}
                            style={{borderBottomColor: '#898989', height: 40, width: 350, borderBottomWidth: 1, color: "gray"}}
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder={"Mot de passe"}
                            style={{borderBottomColor: '#898989', height: 40, width: 350, borderBottomWidth: 1, color: "gray"}}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder={"Confirmer mot de passe"}
                            style={{borderBottomColor: '#898989', height: 40, width: 350, borderBottomWidth: 1, color: "gray"}}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.textInput2}>
                        <TextInput
                            placeholder={"Jour"}
                            style={{borderBottomColor: '#898989', height: 40, width: 104, borderBottomWidth: 1, color: "gray"}}
                        />
                        <TextInput
                            placeholder={"Mois"}
                            style={{borderBottomColor: '#898989', height: 40, width: 104, borderBottomWidth: 1, color: "gray", marginLeft: 20}}
                        />
                        <TextInput
                            placeholder={"Année"}
                            style={{borderBottomColor: '#898989', height: 40, width: 104, borderBottomWidth: 1, color: "gray", marginLeft: 20}}
                        />
                    </View>
                    <View style={styles.registerButton}>
                        <Button
                            title="S'enregistrer"
                            color='#fff'
                            onPress={() => this.props.navigation.navigate('SexeChoice')}
                        />
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
        alignItems: 'center',
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
        padding: 20,
        flex:1
    },
    loginFacebook: {
        backgroundColor: '#3b5998',
        flex:1,
        width: 340,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    textInput: {
        flex: 1,
        height: 70
    },
    registerButton: {
        flex: 1,
        backgroundColor: '#ff6a8f',
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput2: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 70,
        marginTop: 10
    }
})