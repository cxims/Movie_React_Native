import React from 'react';

import {ImageBackground, StatusBar, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';

export default class BottomCategorieDescSpecial extends React.Component {
    render() {
        return(
            <View style={styles.descBottom}>
                <Text style={{fontSize: 15}}>Automne - Hiver 2017/2018</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    descBottom: {
        height: 35,
        width: 390,
        alignItems: 'center',
        justifyContent: 'center'
    }
})