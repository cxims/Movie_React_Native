import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen'
import ActorScreen from '../screens/ActorScreen'

const MovieRoutes = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        DetailsScreen: DetailsScreen,
        ActorScreen: ActorScreen
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none'
    }
);

export default createAppContainer(MovieRoutes)