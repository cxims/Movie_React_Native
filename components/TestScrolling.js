import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import BackgroundCarousel from './BackgroundCarousel'

const images = [
  "https://i.pinimg.com/originals/cc/02/62/cc026279e822c745cbe02bef5a2048ee.jpg",
  "https://i.imgur.com/IfFfmQL.png",
  "https://i.imgur.com/8irwPfu.png"
];

export default class App extends Component {

  

  render() {
    return <View style={styles.container}>
        <BackgroundCarousel images={images} navigation={this.props.navigation}/>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});