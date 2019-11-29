import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

import Login from './components/SignIn/Login'
import PasswordMissed from './components/SignIn/PasswordMissed';
import ResetPassword from './components/SignIn/ResetPassword';
import Register from './components/SignIn/Register';
import SexeChoice from './components/SignIn/SexeChoice';
import Notification from './components/SignIn/Notification'
import TestScrolling from './components/SignIn/TestScrolling'
import HomepageIndex from './components/Homepage/Pages/HomepageIndex'
import ShoppingBag from './components/Homepage/BottomPages/ShoppingBag'
import Wishlist from './components/Homepage/BottomPages/Wishlist'
import Account from './components/Homepage/BottomPages/Account'

const RootStack = createStackNavigator(
  {
    TestScrolling: TestScrolling,
    Login: Login,
    Register: Register,
    PasswordMissed: PasswordMissed,
    Notification: Notification,
    SexeChoice: SexeChoice,
    HomepageIndex: HomepageIndex,
    ShoppingBag: ShoppingBag,
    Wishlist: Wishlist,
    Account: Account
  },
  {
    initialRouteName: 'TestScrolling',
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
