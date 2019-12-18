import * as React from 'react'
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import AccordionOrder from './AccordionOrder'
import { bold } from 'ansi-colors'

const DEVICE_WIDTH = Dimensions.get("window").width
const DEVICE_HEIGHT = Dimensions.get("window").height

const clickAndCollect = 
<ScrollView style={{height: 820}}>
    <View style={{height: 1, width: DEVICE_WIDTH, backgroundColor: 'gray'}}></View>
    <View style={{flexDirection: 'row'}}>
        <Image source={require('../../../img/Clothes/gucci.png')} style={{width: 100, height: 100}}/>
        <View style={{flexDirection: 'column', marginLeft: 5, marginTop: 15, width: 140}}>
            <Text style={{color: '#FF6A8F', fontSize: 20, fontWeight: 'bold'}}>€87.29</Text>
            <Text style={{color: 'gray', fontSize: 12, marginTop: 10}}>Veste en cuir brodée
                    gris clair - argenté / c...
                    Taille onesize
            </Text>
        </View>
    </View>
    <View style={{height: 1, width: DEVICE_WIDTH, backgroundColor: 'gray'}}></View>
    <View style={{flexDirection: 'row'}}>
        <Image source={require('../../../img/Clothes/14produit.jpg')} style={{width: 100, height: 100}}/>
        <View style={{flexDirection: 'column', marginLeft: 5, marginTop: 15, width: 140}}>
            <Text style={{color: '#FF6A8F', fontSize: 20, fontWeight: 'bold'}}>€10.87</Text>
            <Text style={{color: 'gray', fontSize: 12, marginTop: 10}}>Veste en cuir brodée
                    gris clair - argenté / c...
                    Taille onesize
            </Text>
        </View>
    </View>
    <View style={{height: 1, width: DEVICE_WIDTH, backgroundColor: 'gray'}}></View>
    <View style={{flexDirection: "row", }}>
        <Image source={require('../../../img/Icons/shop.png')} style={{marginTop: 20}}/>
        <Text style={{fontSize: 18, color: 'black', marginTop: 21, marginLeft: 15}}>Récupérer votre commande</Text>
    </View>
    <Text style={{marginTop: 25, fontWeight: 'bold'}}>Code de récupération à présenter</Text>
    <View style={{height: 1, width: DEVICE_WIDTH, backgroundColor: 'gray', marginTop: 20}}></View>
    <View style={{alignItems: "center", justifyContent: "center", height: 80}}>
        <Text style={{fontSize: 25, color: '#FF6A8F', fontWeight: 'bold'}}>ABC112345</Text>
    </View>
    <View style={{height: 1, width: DEVICE_WIDTH, backgroundColor: 'gray'}}></View>
    <View style={{justifyContent: "center", height: 60}}>
        <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>Coordonnées de votre boutique</Text>
    </View>
    <View style={{height: 1, width: DEVICE_WIDTH, backgroundColor: 'gray'}}></View>
    <View style={{flexDirection: "row", height: 170}}>
        <View style={{flexDirection: "column", width: 30}}>
            <Image source={require('../../../img/Icons/adress.png')} style={{marginTop: 45}}/>
            <Image source={require('../../../img/Icons/tel.png')} style={{marginTop: 55}}/>
        </View>
        <View style={{flexDirection: "column", marginLeft: 5}}>
            <Text style={{color: 'black', fontWeight: "bold", marginTop: 15}}>Magasin numéro 2</Text>
            <View style={{marginTop: 12}}>
                <Text style={{color: "#898989"}}>221B Baker Street</Text>
                <Text style={{color: "#898989"}}>33000 France</Text>
                <Text style={{color: "#898989"}}>Bordeaux</Text>
            </View>
            <Text style={{color: "#898989", marginTop: 30}}>+33 6 44 12 30 56</Text>
        </View>
    </View>
    <View style={{height: 1, width: DEVICE_WIDTH, backgroundColor: 'gray'}}></View>
    <View style={{flexDirection: "column"}}>
        <View style={{flexDirection: "row", marginTop: 25}}>
            <View style={{flex: 1,flexDirection: "row"}}>
                <Text style={{fontSize: 15, color: '#898989'}}>Sous total</Text>
            </View>
            <View style={{flex: 1,flexDirection: "row-reverse"}}>
                <Text style={{fontSize: 15, color: '#898989'}}>58,00 €</Text>
            </View>
        </View>
        <View style={{flexDirection: "row", marginTop: 20}}>
            <View style={{flex: 1,flexDirection: "row"}}>
                <Text style={{fontSize: 15, color: '#898989'}}>Livraison</Text>
            </View>
            <View style={{flex: 1,flexDirection: "row-reverse"}}>
                <Text style={{fontSize: 15, color: '#898989'}}>13,00 €</Text>
            </View>
        </View>
        <View style={{flexDirection: "row", marginTop: 20}}>
            <View style={{flex: 1,flexDirection: "row"}}>
                <Text style={{fontSize: 15, color: '#898989'}}>Réduction</Text>
            </View>
            <View style={{flex: 1,flexDirection: "row-reverse"}}>
                <Text style={{fontSize: 15, color: '#898989'}}>- 2,00 €</Text>
            </View>
        </View>
        <View style={{flexDirection: "row", marginTop: 20}}>
            <View style={{flex: 1,flexDirection: "row"}}>
                <Text style={{fontSize: 15, color: 'black'}}>Total</Text>
            </View>
            <View style={{flex: 1,flexDirection: "row-reverse"}}>
                <Text style={{fontSize: 15, color: '# FF6A8F'}}>69,00 €</Text>
            </View>
        </View>
    </View>
</ScrollView>

export default class AccountOrder extends React.Component {
    render() {
        return(
            <View>
                <View style={styles.smbar}></View>
                <ScrollView>
                    <Image source={require('../../../img/Clothes/1produit.jpg')} style={{width: DEVICE_WIDTH, height: 120}}/>
                    <AccordionOrder title='Commande n°0000214343' date='03/01/2018' name='Jane Doe' statut='En cours' data={clickAndCollect}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    smbar: {
        height: 30,
        backgroundColor: "#F4F4F4"
    } 
})