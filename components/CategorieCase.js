import React from 'react';

import {ImageBackground, StatusBar, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';

export default class CategorieCase extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ImageBackground source={this.props.background} style={styles.categorie}>
                        <View style={styles.descView}>
                            <Text style={styles.desc}>{this.props.desc}</Text>
                        </View>
                        <View style={styles.transparentView}>
                            <Text style={styles.descTransparentBar}>{this.props.descT}</Text>
                        </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    categorie: {
        flex:1,
        width: 390, 
        height: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    desc: {
        fontSize: 25,
        color: '#fff',
    },
    descView: {
        display: 'flex',
        flex:6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    transparentView: {
        flex:1,
        justifyContent: "center",
        width: 390,
        backgroundColor: 'black',
        alignItems: 'center',
        opacity: 0.7      
    },
    descTransparentBar: {
        fontSize: 14,
        color: '#fff',
        opacity:1
    }
})