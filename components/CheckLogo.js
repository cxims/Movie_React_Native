import React from 'react';

import {Image} from 'react-native'

export default class CheckLogo extends React.Component {
    render () {
        return (
            <Image
                source={require('../img/Signup/check.png')}
                style={{marginLeft: 25, marginBottom: 8, width: 20, height: 20}}
            />
        )
    }

}