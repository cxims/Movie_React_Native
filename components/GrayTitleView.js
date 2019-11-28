import React from 'react';

import {ImageBackground, StatusBar, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';

export default class GrayTitleView extends React.Component {
    render() {
        return(
            <View style={styles.grayContent2}>
                <Text style={{fontSize: 18}}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    grayContent2: {
        backgroundColor: '#f4f4f4',
        width: 390,
        height: 75,
        justifyContent: "center",
        alignItems: 'center'
    }
})