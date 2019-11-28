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
        CategorieCase: <CategorieCase background={require('../img/Homepage/Manteaux.png')}  desc={'Manteaux :\nPour enrober votre look'} descT={'HIVER'}/>,
        BottomCategorieDesc: <BottomCategorieDescSpecial descBottom="La pièce maitresse de la saison "/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/costumes.png')} desc={'Costumes\net chemises'} descT={'LES DERNIERES TENDANCES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Votre look gentlemen "/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/Jackets.png')} desc={'Jackets :\nselon votre goût'} descT={'CHAUSSURES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Faites vous plaisir"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/SACS-homme.png')} desc={'Sacs :\nles indispensables'} descT={'SACS'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Pour le travail, les weekends et autres'/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/pour-impressioner.png')} desc={'Pour impressioner\n lors de vos soirées'} descT={'TENDANCE'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Automne / Hiver'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/ACCESSOIRES-homme.png')} desc={'Accessoires\ncomplétez votre style'} descT={'ACCESSOIRES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Montres luxueuses'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/chemises.png')} desc={'Chemises :\nTout en sobriété'} descT={'COLLECTION'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Nous vous recommandons'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/gift-for-all-homme.png')} descT={'IDEES CADEAUX'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Pour ravir vos proches'/>
    },
]

export default class HomepageContentMan extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <ScrollView>     
                    <View style={styles.container}>
                        <HomepageHeader background={require('../img/Homepage/header-homme.png')} desc={"NOS TENUES\n D'OCCASIONS"} descT={'EVENEMENT'} descBottom={'A découvrir par tendances, et plus...'}/>
                        <StatusBar hidden={true}/>
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