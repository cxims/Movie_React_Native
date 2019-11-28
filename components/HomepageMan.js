import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomepageContentMan from './HomepageContentMan'
import HomepageFooter from './HomepageFooter'

export default class HomepageMan extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <HomepageContentMan/>
            </View>
        )
    }
}