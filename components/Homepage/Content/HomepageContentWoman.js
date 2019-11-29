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
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Collection2.png')}  desc={'Laissez-vous\nréchauffer par notre sélection'} descT={'COLLECTION'}/>,
        BottomCategorieDesc: <BottomCategorieDescSpecial/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Obsession.png')} desc={'Obsession'} descT={'LES DERNIERES TENDANCES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Faites vous plaisir pour l'hiver"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/en_saison.png')} desc={'En saison'} descT={'CHAUSSURES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Les bottes qu'il vous faut !"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/CHAUSSURES2.png')} desc={'Chaussures :\nvos meilleures amies'} descT={'CHAUSSURES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Faites vous plaisir'/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/SACS.png')} desc={'Sacs :\nwhat makes you unique'} descT={'SACS'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Le top sacs à main pour vous'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Bijoux.png')} desc={'Bijoux'} descT={'BIJOUX'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Une magnifique sélection'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/ACCESSOIRES-femme.png')} desc={'Accessoires\nun style identifiable'} descT={'ACCESSOIRES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='A offrir'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Lookbook.png')} desc={'Lookbook'} descT={'COLLECTION'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Nous vous recommandons'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/gift-for-all-femme.png')} descT={'IDEES CADEAUX'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Pour ravir vos proches'/>
    }
]

export default class HomepageContentWoman extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <ScrollView>     
                    <View style={styles.container}>
                        <HomepageHeader background={require('../../../img/Homepage/header-femme.png')} desc={'LES TENUS FESTIVES\nLES PLUS DESIRABLES'} descT={'HIVER'} descBottom={'Raffinement pour tous les styles'}/>

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