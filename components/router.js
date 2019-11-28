import React from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import Homepage from './Homepage'
import HomepageWoman from './HomepageWoman'
import HomepageMan from './HomepageMan'
import HomepageKids from './HomepageKids'
import HomepageHome from './HomepageHome'
import HomepageBeauty from './HomepageBeauty'
import HomepageHightech from './HomepageHightech'
import { createAppContainer } from 'react-navigation'
import LinearGradient from 'expo-linear-gradient'

const HomepageNavigator = createMaterialTopTabNavigator(
    {
        Accueil: Homepage,
        Femme: HomepageWoman,
        Homme: HomepageMan,
        Enfant: HomepageKids,
        Maison: HomepageHome,
        Beauté: HomepageBeauty,
        HighTech: HomepageHightech
    },
    {
        tabBarOptions: {
            scrollEnabled: true,
            activeTintColor: '#ff6a8f',
            indicatorStyle: {backgroundColor: '#ff6a8f'},
            style: {
                position: "absolute",
                backgroundColor: 'transparent',
                left: 0,
                top: 0
            }
        }    
    }
)

export default createAppContainer(HomepageNavigator)

// Accueil, Femme, Homme, Enfant, Maison, Beauté, High-tech 

// tabBarComponent: props => {
//     return <View style={{height: 60, width: '100%', backgroundColor: 'red'}} />
//   }