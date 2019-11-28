import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomepageContentWoman from './HomepageContentWoman'
import HomepageFooter from './HomepageFooter'

export default class HomepageWoman extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <HomepageContentWoman/>
            </View>
        )
    }
}