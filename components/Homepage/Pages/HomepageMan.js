import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomepageContentMan from '../Content/HomepageContentMan'

export default class HomepageMan extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <HomepageContentMan/>
            </View>
        )
    }
}