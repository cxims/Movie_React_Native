import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomepageContent from '../Content/HomepageContent'

export default class Homepage extends React.Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <HomepageContent/>   
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

//like, logo, shopping_cart, user