import * as React from "react";
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import Header from '../BottomPagesContent/Header'
import {TextInput } from "react-native-gesture-handler";

const DEVICE_WIDTH = Dimensions.get("window").width
const DEVICE_HEIGHT = Dimensions.get("window").height

export default class Wishlist extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="position">
                <Header title="Ma wishlist"/>
                <View style={styles.content}>
                    <View style={{flex: 1, alignItems: "center", justifyContent:"center", marginTop: 20}}>
                        <Text style={{fontSize: 30}}>Votre wishlist est vide</Text>
                        <View style={{flex: 0.05}}/>
                        <Text style={{fontSize: 15}}>Parcourez nos nouveautés et commencez dès</Text>
                        <Text style={{fontSize: 15}}>maintenant à la remplir !</Text>
                        <View style={{flex: 0.08}}/>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: '#fff'}}>Découvrir les nouveautés</Text>
                        </TouchableOpacity>
                        <View style={{flex: 0.08}}/>
                        <View style={{flex: 1}}>
                            <ImageBackground source={require('../../../img/Homepage/Lookbook.png')} style={styles.backgroundImg}>
                                <Text style={{color: '#fff', fontSize: 30}}>Collection</Text>
                                <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>LOOK BOOK</Text>
                                <View style={{flex: 0.08}}/>
                                <TouchableOpacity style={styles.button2}>
                                    <Text style={{color: '#fff'}}>Découvrir</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        <View style={{flex:1, marginTop: 15}}>
                            <Text style={{color: '#898989', fontSize: 10, paddingRight: 80}}>Profitez de nombreuses offres et promotions !</Text>
                            <View style={{flex: 0.4, flexDirection: "row", justifyContent: "space-between"}}>
                                <TextInput placeholder={"Votre adresse mail..." + '                  '} style={{borderBottomWidth: 1, borderBottomColor: '#898989'}}/>
                                <TouchableOpacity style={styles.button3}>
                                    <Text style={{color: 'black'}}>S'inscrire</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={{position: "absolute", bottom: 80, color: '#898989'}}>Suivez-nous sur :</Text>
                    <View style={{position: "absolute", width: 250, bottom: 30, flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <TouchableOpacity>
                            <Image source={require('../../../img/Icons/facebook.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../img/Icons/Twitter.png')}/>                
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../img/Icons/pinterest.png')}/>      
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../img/Icons/youtube.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../img/Icons/V.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    content: {
        flex: 8,
        backgroundColor: '#F4F4F4',
        width: DEVICE_WIDTH,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ff6a8f',
        width: 200,
        height: 50
    },
    button2: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ff6a8f',
        width: 120,
        height: 50
    },
    button3: {
        marginTop: 30,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 120,
        height: 50,
        borderBottomColor: 'black',
        borderWidth: 1
    },
    backgroundImg: {
        width: DEVICE_WIDTH, 
        height: 210,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
  });