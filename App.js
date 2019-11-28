import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

import Homepage from './components/Homepage'
import Login from './components/Login'
import PasswordMissed from './components/PasswordMissed';
import ResetPassword from './components/ResetPassword';
import Register from './components/Register';
import SexeChoice from './components/SexeChoice';
import Notification from './components/Notification'
import TestScrolling from './components/TestScrolling'
import HomepageWoman from './components/HomepageWoman'
import HomepageKids from './components/HomepageKids'
import HomepageMan from './components/HomepageMan'
import HomepageHome from './components/HomepageHome'
import HomepageBeauty from './components/HomepageBeauty'
import HomepageHightech from './components/HomepageHightech'
import HomepageIndex from './components/HomepageIndex'

const RootStack = createStackNavigator(
  {
    TestScrolling: TestScrolling,
    Login: Login,
    Register: Register,
    PasswordMissed: PasswordMissed,
    Notification: Notification,
    SexeChoice: SexeChoice,
    Homepage: Homepage,
    HomepageWoman: HomepageWoman,
    HomepageKids: HomepageKids,
    HomepageMan: HomepageMan,
    HomepageHome: HomepageHome,
    HomepageBeauty: HomepageBeauty,
    HomepageHightech: HomepageHightech,
    HomepageIndex: HomepageIndex
  },
  {
    initialRouteName: 'HomepageIndex',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

  render() {
      return (
        <AppContainer/>
    );
  }  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
