import * as React from "react";
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity} from 'react-native'
import Header from '../BottomPagesContent/Header'

const DEVICE_WIDTH = Dimensions.get("window").width
const DEVICE_HEIGHT = Dimensions.get("window").height

export default class ShoppingBag extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header title='Mon panier'/>
                <View style={styles.content}>
                    <View style={{flex: 1, alignItems: "center", justifyContent:"center", }}>
                        <Text style={{fontSize: 30}}>Votre panier est vide</Text>
                        <View style={{flex: 0.05}}/>
                        <Text style={{fontSize: 15}}>Parcourez nos collections et commencez dès</Text>
                        <Text style={{fontSize: 15}}>maintenant à faire vos achats</Text>
                        <View style={{flex: 0.08}}/>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: '#fff'}}>Commencer mes achats</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
    }
  });