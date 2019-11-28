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
        CategorieCase: <CategorieCase background={require('../img/Homepage/linge_maison.png')}  desc={'Linge de maison'} descT={'CHAMBRES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="La maison revête ses habits de lumières"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/art_table.png')} desc={'Art de la table'} descT={'CUISINE'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Des repas de famille à la déco magique"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/Decoration.png')} desc={'Décoration :\nCélébrez la saison'} descT={'DECORATION'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Ajoutez du style pour Noël"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/salle_de_bain.png')} desc={'Salle de bain :\nUn espace en toute élégance'} descT={'SALLE DE BAIN'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Pour encore plus de confort'/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/Gifts-for-all-maison.png')} descT={'IDEES CADEAUX'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Noël arrive !'/>
    },
]

export default class HomepageContentHome extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <ScrollView>     
                    <View style={styles.container}>
                        <HomepageHeader background={require('../img/Homepage/header-maison.png')} desc={"UN NOËL\nCOMPLETEMENT DECO"} descT={'NOËL'} descBottom={'Préparez votre plus belle table de Noël'}/>
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