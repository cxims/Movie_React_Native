import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {createAppContainer} from 'react-navigation'
import HomepageNavigator from './router'
import HomepageFooter from './HomepageFooter'
import {LinearGradient} from 'expo-linear-gradient'

const HomepageIndex = createAppContainer(HomepageNavigator)  

export default class App extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <HomepageIndex/>
                <HomepageFooter/>
            </View>
        )
    }
}
