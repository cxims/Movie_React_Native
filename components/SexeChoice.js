import React from 'react';
import CheckLogo from './CheckLogo'

import {ImageBackground, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';

export default class SexeChoice extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            opacityWoman: 1,
            opacityMan: 1,
            checkLogoMan: null,
            checkLogoWoman: null,
            checkMan: false,
            checkWoman: false   
        }
    }

    clickOnMan = () => {
        this.setState({
            opacityWoman: 0.2,
            opacityMan: 1,
            checkMan: true,
            checkWoman: false,
            checkLogoMan: <CheckLogo/>,
            checkLogoWoman: null
        })
    }

    clickOnWoman = () => {
        this.setState({
            opacityWoman: 1,
            opacityMan: 0.2,
            checkWoman: true,
            checkMan: false,
            checkLogoWoman: <CheckLogo/>,
            checkLogoMan: null
        })
    }

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
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Je suis</Text>
                </View>
                <View style={styles.sexe}>
                    <TouchableOpacity onPress={() => this.clickOnMan()}>
                        <ImageBackground
                            source={require('../img/Signup/Homme.png')}
                            style={{width: 165, height: 420, opacity: this.state.opacityMan}}
                        >
                            <View style={styles.textView}>
                                {this.state.checkLogoMan}
                                <Text style={styles.textSexe}>Homme</Text>
                            </View>   
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.clickOnWoman()}>
                        <ImageBackground
                            source={require('../img/Signup/Femme.png')}
                            style={{width: 165, height: 420, marginLeft: 10, opacity: this.state.opacityWoman}}
                        >
                            <View style={styles.textView}>
                                {this.state.checkLogoWoman}
                                <Text style={styles.textSexe}>Femme</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <Button
                        title="Suivant"
                        color="#fff"
                        onPress={() => this.props.navigation.navigate('Notification')}
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
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        marginTop: 25
    },
    desc: {
        flex: 1,
        marginTop: 10,
    },
    sexe: {
        flex: 6,
        flexDirection: 'row'
    },
    button: {
        position: "absolute",
        bottom: 10,
        width: 200,
        height: 40,
        backgroundColor: "#ff6a84",
        justifyContent: "center",
        alignItems: "center"
    },
    textSexe: {
        color: '#ffffff',
        fontSize: 21
    },
    textView: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 16,
        marginLeft: 50
    }
})