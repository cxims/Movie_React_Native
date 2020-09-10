import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableHighlight, ScrollView, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios'

export default class ActorScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actorDetails : {}
        }
    }

    componentDidMount() {
        this.setState({actorDetails: this.props.navigation.state.params})
    }

    render() {
        const {name, image} = this.state.actorDetails
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{name}</Text>
                <Image 
                      source={{uri: image}}
                      style={{width: 200, height: 200, marginBottom: 20}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#223343',
      paddingTop: 70
    },
    title: {
      color: '#FFF',
      fontSize: 32,
      fontWeight: '700',
      marginBottom: 20
    },
})