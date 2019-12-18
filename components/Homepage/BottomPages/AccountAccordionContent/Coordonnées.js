import * as React from 'react'
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native'

export default CoordonnéesView  =
            <View style={{height: 550}}>
                <Text style={{fontSize: 10, color: 'gray'}}>Civilité</Text>
                <TextInput style={{width: 340, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40}} placeholder='Monsieur'/>
                <Text style={{fontSize: 10, color: 'gray', marginTop: 35}}>Nom</Text>
                <TextInput style={{width: 340, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40}} placeholder='Martin'/>
                <Text style={{fontSize: 10, color: 'gray', marginTop: 35}}>Prénom</Text>
                <TextInput style={{width: 340, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40}} placeholder='Alexandre'/>
                <Text style={{fontSize: 10, color: 'gray', marginTop: 35}}>Numéro de téléphone</Text>
                <TextInput style={{width: 340, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40}} placeholder='0606955224'/>
                <Text style={{fontSize: 10, color: 'gray', marginTop: 35}}>Date de naissance</Text>
                <View style={{flexDirection: "row"}}>
                    <View style={{flexDirection: "column"}}>
                        <Text style={{fontSize: 8, color:'gray', marginTop: 15}}>Jour</Text>
                        <TextInput style={{width: 100, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40}} placeholder='29'/>
                    </View> 
                    <View style={{flexDirection: "column", marginLeft: 20}}>
                        <Text style={{fontSize: 8, color:'gray', marginTop: 15}}>Mois</Text>
                        <TextInput style={{width: 100, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40}} placeholder='Mai'/>
                    </View>
                    <View style={{flexDirection: "column", marginLeft: 20}}>
                        <Text style={{fontSize: 8, color:'gray', marginTop: 15}}>Année</Text>
                        <TextInput style={{width: 100, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40}} placeholder='1993'/>
                    </View>
                </View>
                <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}}>
                    <View style={{alignItems: "center", justifyContent: "center", marginTop: 50, borderColor: 'black', borderWidth: 1, height: 40, width: 200}}><Text>Enregistrer</Text></View>
                </TouchableOpacity> 
            </View>            
