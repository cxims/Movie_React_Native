import * as React from 'react'
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native'

export default PasswordView = 
<ScrollView style={{height: 300}}>
    <TextInput style={{width: 340, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40, marginTop: 10}} placeholder='Mot de passe actuel'/>
    <TextInput style={{width: 340, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40, marginTop: 20}} placeholder='Nouveau mot de passe'/>
    <TextInput style={{width: 340, borderBottomWidth: 1, borderColor: 'gray', color: 'gray', height: 40, marginTop: 20}} placeholder='Confirmer le nouveau mot de passe'/>
    <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}}>
        <View style={{alignItems: "center", justifyContent: "center", marginTop: 50, borderColor: 'black', borderWidth: 1, height: 40, width: 200}}><Text>Enregistrer</Text></View>
    </TouchableOpacity> 
</ScrollView>