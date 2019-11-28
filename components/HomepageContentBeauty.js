import React from 'react';

import {StatusBar, View, StyleSheet} from 'react-native';
import CategorieCase from './CategorieCase'
import BottomCategorieDesc from './BottomCategorieDesc'
import DiscountGray from './DiscountGray'
import { ScrollView } from 'react-native-gesture-handler';
import HomepageHeader from './HomepageHeader'

const discountGray = <DiscountGray/>

let content = [
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/Maquillage.png')}  desc={'Maquillage'} descT={'COLLECTION'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Révelez votre beauté'/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/marques.png')} descT={'MARQUES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Tous les produits Chanel pour vous"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/soins_cheveux.png')} desc={'Soins cheveux :\nApportez-leur le meilleur'} descT={'SHAMPOINGS'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Et vos cheveux seront plus soyeux"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/soins_corps.png')} desc={'Soins du corps :\nLe meilleur pour votre peau'} descT={"CORPS"}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Préparez votre peau pour affronter l'hiver"/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/Parfums.png')} desc={'Parfums'} descT={'FLAGRANCE'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Offrez-vous un voyage sensoriel'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/MAQUILLAGE2.png')} desc={'Maquillage :\nOffrez un visage des plus intense'} descT={'MAQUILLAGE'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Pour un look toujours plus glamour'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../img/Homepage/gifts-for-all-maquillage.png')} descT={'IDEES CADEAUX'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='La meilleure couleur de vernis'/>
    },
]

export default class HomepageContentBeauty extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <ScrollView>     
                    <View style={styles.container}>
                        <HomepageHeader background={require('../img/Homepage/header-beaute.png')} desc={'LOOKS DE FÊTE\nSoyez la reine de votre soirée'} descT={'HIVER'} descBottom={'Produits de beauté pour tous les goûts'}/>
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