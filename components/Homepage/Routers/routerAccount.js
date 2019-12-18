import React from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import AccountData from '../BottomPages/AccountData'
import AccountOrder from '../BottomPages/AccountOrder'
import { createAppContainer } from 'react-navigation'

const HomepageNavigator = createMaterialTopTabNavigator(
    {
        'Mes données': AccountData,
        'Mes commandes': AccountOrder,
    },
    {
        tabBarOptions: {
            activeTintColor: '#ff6a8f',
            inactiveTintColor: '#898989',
            indicatorStyle: {backgroundColor: '#ff6a8f'},
            style: {
                marginTop: 110,
                backgroundColor: '#fff'
            }
        }    
    }
)

export default createAppContainer(HomepageNavigator)