import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Homepage from '../Pages/Homepage'
import ShoppingBag from '../BottomPages/ShoppingBag'
import Wishlist from '../BottomPages/Wishlist'
import Account from '../BottomPages/Account'
import { createAppContainer } from 'react-navigation'


const HomepageNavigator = createBottomTabNavigator(
    {
        Accueil: Homepage,
        'Mon panier': ShoppingBag,
        'Ma wishlist': Wishlist,
        'Mon compte': Account
    },
)

export default createAppContainer(HomepageNavigator)