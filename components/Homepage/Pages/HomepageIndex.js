import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {createAppContainer} from 'react-navigation'
import HomepageNavigatorTop from '../Routers/routerTop'
import HomepageFooter from '../Content/HomepageFooter'
import ShoppingBag from '../BottomPages/ShoppingBag'
import Wishlist from '../BottomPages/Wishlist'
import Account from '../BottomPages/Account'

const HomepageTop = createAppContainer(HomepageNavigatorTop)   

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            status: 'account'
        }
    }

    display = (status) => {
        switch (status) {
            case 'home':
                return <HomepageTop/>
            case 'bag':
                return <ShoppingBag/>
            case 'wishlist':
                return <Wishlist/>
            case 'account':
                return <Account/>
        }
    }

    render() {
        return(
            <View style={{flex:1}}>
                {this.display(this.state.status)}
                <HomepageFooter status={(e) => this.setState({status: e})}/>
            </View>
        )
    }
}
