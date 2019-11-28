import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomepageContentKids from './HomepageContentKids'
import HomepageFooter from './HomepageFooter'

export default class HomepageKids extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <HomepageContentKids/>
            </View>
        )
    }
}