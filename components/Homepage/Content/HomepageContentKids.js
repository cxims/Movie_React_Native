import React from 'react';

import {ImageBackground, StatusBar, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';
import CategorieCase from './CategorieCase'
import BottomCategorieDesc from './BottomCategorieDesc'
import BottomCategorieDescSpecial from './BottomCategorieDescSpecial'
import DiscountGray from './DiscountGray'
import GrayBar from './GrayBar'
import GrayTitleView from './GrayTitleView'
import { ScrollView } from 'react-native-gesture-handler';
import HomepageHeader from './HomepageHeader'

const discountGray = <DiscountGray/>

let content = [
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/ENFANT-garcon.png')}  desc={"Pour garçons :\nElles l'adoreront"} descT={'ENFANT'}/>,
        BottomCategorieDesc: <BottomCategorieDescSpecial/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/ENFANT-filles.png')} desc={'Pour filles :\nAccentuez son côté féminin'} descT={'ENFANT'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Faites vous plaisir pour l'hiver"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Bebes-garçons.png')} desc={'Bébés garçons'} descT={'VÊTEMENTS ET ACCESSOIRES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Les bottes qu'il vous faut !"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Bebes-garçons-1.png')} desc={'Bébés filles'} descT={'VÊTEMENTS ET ACCESSOIRES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Faites vous plaisir'/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/gifts-for-all-enfants.png')}  descT={'IDEES CADEAUX'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Le top sacs à main pour vous'/>
    },
]

export default class HomepageContentKids extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <ScrollView>     
                    <View style={styles.container}>
                        <HomepageHeader background={require('../../../img/Homepage/header-enfants.png')} desc={'DERNIERES\nTENDANCES'} descT={'DECOUVERTE'} descBottom={'Collection Automne/Hiver'}/>

                            {content.map((content) =>
                                <View style={{flex:1}}>
                                    {content.CategorieCase}
                                    {content.BottomCategorieDesc}
                                    {discountGray}
                                </View> 
                            )}
                    </View>
                </ScrollView>
            </View>  
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})