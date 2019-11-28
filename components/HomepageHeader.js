import React from 'react';

import {View} from 'react-native';
import CategorieCase from './CategorieCase'
import BottomCategorieDesc from './BottomCategorieDesc'
import GrayBar from './GrayBar'

export default class HomepageHeader extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <CategorieCase background={this.props.background} desc={this.props.desc} descT={this.props.descT}/>
                <BottomCategorieDesc descBottom={this.props.descBottom}/>
                <GrayBar/>
            </View>
        )
    }
}