import React from 'react';

import {ImageBackground, StatusBar, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';

export default class BottomCategorieDesc extends React.Component {
    render() {
        return (
            <View style={styles.descBottom}>
                <Text style={{fontSize: 20}}>{this.props.descBottom}</Text>
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