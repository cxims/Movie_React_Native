import * as React from 'react'
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native'

export default emailView = 
<ScrollView style={{height: 300}}>
    <Text style={{fontSize: 10, color: 'gray'}}>Adresse e-mail actuelle :</Text>
    <Text style={{fontSize: 15, color: 'gray', marginTop: 5}}>alexandre.martin.29@gmail.com</Text>
    <TextInput style={{width: 340, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40, marginTop: 35}} placeholder='Nouvelle adresse e-mail'/>
    <TextInput style={{width: 340, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40, marginTop: 20}} placeholder='Mot de passe'/>
    <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}}>
        <View style={{alignItems: "center", justifyContent: "center", marginTop: 50, borderColor: 'black', borderWidth: 1, height: 40, width: 200}}><Text>Enregistrer</Text></View>
    </TouchableOpacity> 
</ScrollView>