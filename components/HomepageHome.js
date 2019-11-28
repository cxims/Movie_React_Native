import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomepageContentHome from './HomepageContentHome'
import HomepageFooter from './HomepageFooter'

export default class HomepageHome extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <HomepageContentHome/>
            </View>
        )
    }
}