import * as React from 'react'
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput, Switch} from 'react-native'
import Accordion from './Accordion'
import Coordonnées from '../../../img/Icons/Coodonnées.png'
import Email from '../../../img/Icons/Email.png'
import Password from '../../../img/Icons/mot-de-passe.png'
import Livraison from '../../../img/Icons/Livraison.png'
import Facturation from '../../../img/Icons/adresse-facturation.png'
import Paiement from '../../../img/Icons/moyen-paiement.png'
import Alert from '../../../img/Icons/alerts.png'
import Actualité from '../../../img/Icons/actualites.png'
import CoordonnéesView from './AccountAccordionContent/Coordonnées'
import EmailView from './AccountAccordionContent/Email'
import PasswordView from './AccountAccordionContent/Password'
import { CheckBox } from 'react-native-elements'
import {} from '../../../img/Icons/delete_sign.png'

const shipping = 
<ScrollView style={{height: 300}}>
    <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}}>
        <View style={{alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom:20, borderColor: 'black', borderWidth: 1, height: 50, width: 300}}><Text>Ajouter une nouvelle adresse de livraison</Text></View>
    </TouchableOpacity> 
    <View style={{flexDirection: "row",alignItems: "center"}}>
        <CheckBox
        title={'221B Baker Street \n 33000 Bordeaux \n France'}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={true}
        textStyle={{color: 'gray', fontSize: 12}}
        checkedColor='#FF6A8F'
        containerStyle={{width: 200,}}
        />
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 20}}>
            <Image source={require('../../../img/Icons/delete_sign.png')} style={{width: 40, height: 40}}/>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 10}}>
            <Image source={require('../../../img/Icons/edit.png')} style={{width: 40, height: 40}}/>
        </View>
    </View>
    <View style={{flexDirection: "row", alignItems: "center"}}>
        <CheckBox
        title={'221B Baker Street \n 33000 Bordeaux \n France'}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#FF6A8F'
        checked={true}
        textStyle={{color: 'gray', fontSize: 12}}
        containerStyle={{width: 200,}}
        />
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 20}}>
            <Image source={require('../../../img/Icons/delete_sign.png')} style={{width: 40, height: 40}}/>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 10}}>
            <Image source={require('../../../img/Icons/edit.png')} style={{width: 40, height: 40}}/>
        </View>
    </View>
    <View style={{flexDirection: "row",alignItems: "center"}}>
        <CheckBox
        title={'221B Baker Street \n 33000 Bordeaux \n France'}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#FF6A8F'
        checked={true}
        textStyle={{color: 'gray', fontSize: 12}}
        containerStyle={{width: 200,}}
        />
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 20}}>
            <Image source={require('../../../img/Icons/delete_sign.png')} style={{width: 40, height: 40}}/>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 10}}>
            <Image source={require('../../../img/Icons/edit.png')} style={{width: 40, height: 40}}/>
        </View>
    </View>
</ScrollView>

const payment = 
<ScrollView style={{height: 300}}>
    <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}}>
        <View style={{alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom:20, borderColor: 'black', borderWidth: 1, height: 50, width: 300}}><Text>Ajouter un nouveau moyen de paiement</Text></View>
    </TouchableOpacity> 
    <View style={{flexDirection: "row",alignItems: "center"}}>
        <CheckBox
        title={'VISA \n **** **** **** **** **72 \n Expire le : 05/18'}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={true}
        textStyle={{color: 'gray', fontSize: 12}}
        checkedColor='#FF6A8F'
        containerStyle={{width: 200,}}
        />
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 20}}>
            <Image source={require('../../../img/Icons/delete_sign.png')} style={{width: 40, height: 40}}/>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 10}}>
            <Image source={require('../../../img/Icons/edit.png')} style={{width: 40, height: 40}}/>
        </View>
    </View>
    <View style={{flexDirection: "row", alignItems: "center"}}>
        <CheckBox
        title={'VISA \n **** **** **** **** **72 \n Expire le : 05/18'}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#FF6A8F'
        checked={true}
        textStyle={{color: 'gray', fontSize: 12}}
        containerStyle={{width: 200,}}
        />
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 20}}>
            <Image source={require('../../../img/Icons/delete_sign.png')} style={{width: 40, height: 40}}/>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 10}}>
            <Image source={require('../../../img/Icons/edit.png')} style={{width: 40, height: 40}}/>
        </View>
    </View>
    <View style={{flexDirection: "row",alignItems: "center"}}>
        <CheckBox
        title={'VISA \n **** **** **** **** **72 \n Expire le : 05/18'}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#FF6A8F'
        checked={true}
        textStyle={{color: 'gray', fontSize: 12}}
        containerStyle={{width: 200,}}
        />
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 20}}>
            <Image source={require('../../../img/Icons/delete_sign.png')} style={{width: 40, height: 40}}/>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black', marginLeft: 10}}>
            <Image source={require('../../../img/Icons/edit.png')} style={{width: 40, height: 40}}/>
        </View>
    </View>
</ScrollView>

const alert =
<ScrollView style={{height: 200}}>
    <Text style={{fontSize: 15, color: 'gray', marginTop: 5}}>Vous n’avez pas encore d’alertes ! Parcourez dès maintenant
    notre catalogue d’articles pour vous tenir au courant de la
    disponibilité de nos produits.</Text>
    <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}}>
        <View style={{alignItems: "center", justifyContent: "center", marginTop: 50, borderColor: 'black', borderWidth: 1, height: 50, width: 300}}><Text>Parcourir notre catalogue</Text></View>
    </TouchableOpacity> 
</ScrollView>

const actualité =
<ScrollView style={{height: 320}}>
    <Text style={{fontSize: 17, color: 'black', marginTop: 20}}>Annonce des ventes</Text>
    <View style={{flexDirection: "row",alignItems: "center"}}>
        <View style={{width: 270}}>
            <Text style={{fontSize: 15, color: 'gray', marginTop: 5}}>Je souhaite être informé des e-mail des nouvelles ventes.</Text>
        </View>
        <Switch style={{marginLeft: 20, color: '#FF6A8F'}}/>
    </View>
    <View style={{width: '100%', height: 1, backgroundColor:'gray', marginTop: 25}}></View>
    <Text style={{fontSize: 17, color: 'black', marginTop: 20}}>Annonce des ventes</Text>
    <View style={{flexDirection: "row",alignItems: "center"}}>
        <View style={{width: 270}}>
            <Text style={{fontSize: 15, color: 'gray', marginTop: 5}}>Je souhaite être informé des e-mail des nouvelles ventes.</Text>
        </View>
        <Switch style={{marginLeft: 20, color: '#FF6A8F'}}/>
    </View>
    <View style={{width: '100%', height: 1, backgroundColor:'gray', marginTop: 25}}></View>
    <Text style={{fontSize: 17, color: 'black', marginTop: 20}}>Annonce des ventes</Text>
    <View style={{flexDirection: "row",alignItems: "center"}}>
        <View style={{width: 270}}>
            <Text style={{fontSize: 15, color: 'gray', marginTop: 5}}>Je souhaite être informé des e-mail des nouvelles ventes.</Text>
        </View>
        <Switch style={{marginLeft: 20, color: '#FF6A8F'}}/>
    </View>
</ScrollView>


export default class AccountData extends React.Component {
    render() {
        return(
            <ScrollView style={{flex: 1}}>
                <View style={styles.smbar}></View>
                <Accordion title={'Coordonnées' } data={CoordonnéesView} logo={Coordonnées}/>
                <Accordion title={'Adresse e-mail' } data={EmailView} logo={Email}/>
                <Accordion title={'Modifier mdp' } data={PasswordView} logo={Password}/>
                <Accordion title={'Adresse livraison' } data={shipping} logo={Livraison}/>
                <Accordion title={'Adresse facturation' } data={shipping} logo={Facturation}/>
                <Accordion title={'Paiement' } data={payment} logo={Paiement}/>
                <Accordion title={'Alertes' } data={alert} logo={Alert}/>
                <Accordion title={'Actualités ' } data={actualité} logo={Actualité}/>
                <View style={{backgroundColor: '#F4F4F4', height: 550}}>
                    <View style={{marginLeft: 20, marginTop: 10}}>
                        <Text style={styles.bottomContent}>Aide</Text>
                        <Text style={styles.bottomContent}>A propos de nous</Text>
                        <Text style={styles.bottomContent}>Parrainage</Text>
                        <Text style={styles.bottomContent}>Termes et conditions</Text>
                        <Text style={styles.bottomContent}>Politique de confidentialité</Text>
                        <Text style={styles.bottomContent}>FAQ</Text>
                        <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}}>
                            <View style={{alignItems: "center", justifyContent: "center", marginTop: 50, borderColor: 'black', borderWidth: 1, height: 50, width: 200}}><Text>Se déconnecter</Text></View>
                        </TouchableOpacity> 
                    </View> 
                </View>
            </ScrollView> 
        )
    }
}

const styles = StyleSheet.create ({
    smbar: {
        height: 30,
        backgroundColor: "#F4F4F4"
    },
    checkboxText: {

    },
    checkboxContainer: {
        width: 50
    },
    bottomContent: {
        fontSize: 18,
        color: 'black',
        marginTop: 40
    }
})