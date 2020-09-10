import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableHighlight, ScrollView, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios'

export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            movieDetails: {}
        }
    }

    componentDidMount() {
        this.setState({id: this.props.navigation.state.params}, () => this.getDescription())
    }

    getDescription = () => {
        axios.get(`https://imdb-api.com/en/API/Title/k_7f1375Ix/${this.state.id}/FullActor,Trailer`)
        .then((res) => {
            console.log(res)
            this.setState({movieDetails: res.data})
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    render() {
        const {fullTitle, image, imDbRating, trailer} = this.state.movieDetails
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{fullTitle}</Text>
                <Image 
                      source={{uri: image}}
                      style={{width: 200, height: 200, marginBottom: 20}}
                />
                <TouchableOpacity onPress={() => Linking.openURL(trailer.link)}>
                    <Text style={styles.subTitle}>
                        Watch trailer here
                    </Text>
                </TouchableOpacity>
                <Text style={styles.subTitle}>Rate : {imDbRating}/10</Text>
                <Text style={styles.subTitle}>Description</Text>
                <Text style={styles.text}>{this.state.movieDetails.plot}</Text>
                <Text style={styles.subTitle}>Actors</Text>
                <FlatList
                    data={this.state.movieDetails.actorList}
                    renderItem={({item, index}) =>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ActorScreen', item)}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                }
                />
            </ScrollView>        
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
    subTitle: {
        color: 'grey',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 20
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 15
    }
  })