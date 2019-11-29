import React from 'react';

import {ImageBackground, StatusBar, View, StyleSheet} from 'react-native';
import CategorieCase from './CategorieCase'
import BottomCategorieDesc from './BottomCategorieDesc'
import DiscountGray from './DiscountGray'
import { ScrollView } from 'react-native-gesture-handler';
import HomepageHeader from './HomepageHeader'

const discountGray = <DiscountGray/>

let content = [
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/TÉLÉVISION.png')} descT={'TÉLÉVISION'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Redéfinissez les codes de la TV'/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/frame.png')} desc={'The frame'} descT={'LES DERNIERES TENDANCES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Conçu pour votre intérieur"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/ELECTROMÉNAGER.png')} desc={'Samsung\nFamily Hub'} descT={'ELECTROMÉNAGER'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Votre nouveau terrain de jeu"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/TECHNOLOGIE.png')} desc={'Le smartphone\npensé pour vous !'} descT={"TECHNOLOGIE"}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Un écran avec la meilleure résolution"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/louez_changez.png')} desc={'Louez, chanez\nen toute liberté'} descT={'UP2YOU'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='La 1ère offre de location longue durée'/>
    },
]

export default class HomepageContentHightech extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <ScrollView>     
                    <View style={styles.container}>
                        <HomepageHeader background={require('../../../img/Homepage/header-hightech.png')} desc={'LES DERNIERS\nSMARTPHONE'} descT={'TELEPHONE'} descBottom={'Mettez vous à la page'}/>

                            {content.map((content, key) =>
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