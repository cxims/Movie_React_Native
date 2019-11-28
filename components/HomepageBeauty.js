import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomepageContentBeauty from './HomepageContentBeauty'
import HomepageFooter from './HomepageFooter'

export default class HomepageBeauty extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <HomepageContentBeauty/>
            </View>
        )
    }
}