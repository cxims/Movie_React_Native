import React from 'react';

import {ImageBackground, StatusBar, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';

export default class GrayBar extends React.Component {
    render() {
        return(
            <View style={styles.grayContent}></View>
        )
    }
}

const styles = StyleSheet.create({
    grayContent: {
        backgroundColor: '#f4f4f4',
        height: 30
    }
})