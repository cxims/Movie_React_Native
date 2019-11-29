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
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/armani.png')}  descT={'COLLECTION'}/>,
        BottomCategorieDesc: <BottomCategorieDescSpecial/>,
    },
    {
        GrayTitleView: <GrayTitleView title='TENECY ENFANTS'/>,
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Kids.png')} desc={'Hiver haut en couleur'} descT={'LES DERNIERES TENDANCES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom="Préparez vos enfants pour l'hiver"/>,
    },
    {
        GrayTitleView: <GrayTitleView title='TENECY HOMME'/>,
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Montres.png')} desc={'Montres :\nle cadeau idéal'} descT={'ACCESSOIRES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Faites vous plaisir'/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Chaussures.png')} desc={'Chaussures :\nles incontournables'} descT={'CHAUSSURES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Le top des chaussures pour vous !'/>,
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/INSPIRATION.png')} desc={'Inspirez-vous'} descT={'INSPIRATION'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Inspirez-vous des dernières tendances'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/you-must.png')} desc={'You must\nhave accessories'} descT={'ACCESSOIRES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Les indispensables'/>
    },
    {
        GrayTitleView: <GrayTitleView title='BEAUTE'/>,
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/des-cadeaux.png')} desc={'Des cadeaux\n parfaits'} descT={'COSMETIQUES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='A offrir'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/osez.png')} desc={'Osez\nle regard Glamour !'} descT={'COSMETIQUES'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Pour les Beauty-addict'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Dior.png')} descT={'PACK'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Le tout-en-1 pour votre maquillage'/>
    },
    {
        GrayTitleView: <GrayTitleView title='MAISON'/>,
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Decoration-1.png')} desc={'Décoration'} descT={'CHAMBRE'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Décorez votre intérieur'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/Collection-fetes.png')} desc={'Collection spécial fêtes'} descT={'COLLECTION'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Il y en a pour tous les goûts'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/bougie.png')} desc={'Bougies et senteurs'} descT={'RELAXATION'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Pour les fins de journées'/>
    },
    {
        CategorieCase: <CategorieCase background={require('../../../img/Homepage/gifts-for-all-HP.png')} desc={''} descT={'IDEES CADEAUX'}/>,
        BottomCategorieDesc: <BottomCategorieDesc descBottom='Pour ravir vos proches'/>
    }
]

export default class HomepageContent extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <ScrollView>     
                    <View style={styles.container}>
                        <HomepageHeader background={require('../../../img/Homepage/bag_head.png')} desc={'Recupérez votre \ncommande en \n30 min'} descT={'LIVRAISON EXPRESS'} descBottom={'Faites vous livrer avec Brandcity'}/>
                        <StatusBar/>
                            {content.map((content) =>
                                <View style={{flex:1}}>
                                    {content.GrayTitleView === 'undefined' ? null : content.GrayTitleView}
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