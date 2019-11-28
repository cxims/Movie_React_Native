import React from 'react';
import {View} from 'react-native';
import HomepageContentHightech from './HomepageContentHightech'
import HomepageFooter from './HomepageFooter'

export default class HomepageHightech extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <HomepageContentHightech/>
            </View>
        )
    }
}