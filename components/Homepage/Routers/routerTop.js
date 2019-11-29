import React from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import Homepage from '../Pages/Homepage'
import HomepageWoman from '../Pages/HomepageWoman'
import HomepageMan from '../Pages/HomepageMan'
import HomepageKids from '../Pages/HomepageKids'
import HomepageHome from '../Pages/HomepageHome'
import HomepageBeauty from '../Pages/HomepageBeauty'
import HomepageHightech from '../Pages/HomepageHightech'
import { createAppContainer } from 'react-navigation'

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
                top: 30
            }
        }    
    }
)

export default createAppContainer(HomepageNavigator)

// Accueil, Femme, Homme, Enfant, Maison, Beauté, High-tech 

// tabBarComponent: props => {
//     return <View style={{height: 60, width: '100%', backgroundColor: 'red'}} />
//   }