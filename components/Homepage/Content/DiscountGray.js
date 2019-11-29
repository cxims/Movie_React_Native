import React from 'react';

import {ImageBackground, StatusBar, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';

export default class DiscountDesc extends React.Component {
    render() {
        return(
            <View style={styles.descBottom2}>
                <Text style={{fontSize: 15}}>Jusqu'à -75%</Text>
                <Text style={{fontSize: 13, color: 'gray'}}>il reste 2 jours</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    descBottom2: {
        height: 70,
        width: 390,
        alignItems: 'center',
        justifyContent: 'center'
    }
})