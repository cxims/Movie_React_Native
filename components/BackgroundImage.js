import React from 'react';
import {StyleSheet, Image} from 'react-native'

export default class BackgroundImage extends React.Component {

    render() {
        return (
            <Image source={require('../img/home3.png')}
            style={styles.backgroundImage}/>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});