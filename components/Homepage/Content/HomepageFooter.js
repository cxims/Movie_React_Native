import React from 'react';
import {ImageBackground, StatusBar, Text, Button, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';

export default class HomepageFooter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            home: true,
            bag: false,
            wishlist: false,
            account: false
        }
    }

    clickOnHome = () => {
        this.setState({home: true, bag: false, wishlist: false, account: false})
        this.props.status('home')
    }

    clickOnBag = () => {
        this.setState({home: false, bag: true, wishlist: false, account: false})
        this.props.status('bag')
    }

    clickOnWishlist = () => {
        this.setState({home: false, bag: false, wishlist: true, account: false})
        this.props.status('wishlist')
    }

    clickOnAccount = () => {
        this.setState({home: false, bag: false, wishlist: false, account: true})
        this.props.status('account')
    }

    render() {
        return (
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => this.clickOnHome()}>   
                    <View style={styles.contentFooter}>
                        <Image source={require('../../../img/Icons/Logo.png')} style={{width: 25, height: 25, tintColor: this.state.home === true ? "#ff6a8f" : 'black'}}/>
                        <Text style={{fontSize: 10, color: this.state.home === true ? "#ff6a8f" : 'black'}}>ACCUEIL</Text>
                    </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.clickOnBag()}>
                    <View style={styles.contentFooter}>
                        <Image source={require('../../../img/Icons/shopping_cart.png')} style={{width: 25, height: 25, tintColor: this.state.bag === true ? "#ff6a8f" : 'black'}}/>
                        <Text style={{fontSize: 10, color: this.state.bag === true ? "#ff6a8f" : 'black'}}>MON PANIER</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.clickOnWishlist()}>                
                <View style={styles.contentFooter}>
                    <Image source={require('../../../img/Icons/like.png')} style={{width: 25, height: 25, tintColor: this.state.wishlist === true ? "#ff6a8f" : 'black'}}/>
                    <Text style={{fontSize: 10, color: this.state.wishlist === true ? "#ff6a8f" : 'black'}}>MA WISHLIST</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.clickOnAccount()}>         
                <View style={styles.contentFooter}>
                    <Image source={require('../../../img/Icons/user.png')} style={{width: 25, height: 25, tintColor: this.state.account === true ? "#ff6a8f" : 'black'}}/>
                    <Text style={{fontSize: 10, color: this.state.account === true ? "#ff6a8f" : 'black'}}>MON COMPTE</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        height: 80,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        borderTopEndRadius: 4,
        borderTopWidth: 1,
        paddingBottom: 20
    },
    contentFooter: {
        flexDirection: 'column',
        alignItems: 'center'
    }
})