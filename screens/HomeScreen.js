import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableHighlight } from 'react-native';
import axios from 'axios'

export default class HomeScreen extends React.Component  {
    constructor(props) {
      super(props)
  
      this.state = {
        search: '',
        movies: []
      }
    }
  
    getResult = () => {
      axios.get('https://imdb-api.com/en/API/SearchMovie/k_7f1375Ix/' + this.state.search)
      .then((res) => {
        console.log(res.data.results)
        this.setState({movies: res.data.results})
      })
      .catch(error => {
        console.log(error.response)
      })
    }
  
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Type your movie...</Text>
            <TextInput
              style={styles.searchBox}
              onChangeText={text => this.setState(prevState => {
                return {...prevState, search: text}
              })}
              onSubmitEditing={() => this.getResult()}
              value={this.state.search}      
            />
            <FlatList
              data={this.state.movies}
              renderItem={({item, index}) => 
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('DetailsScreen', item.id)}
                >
                  <View style={styles.container}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image 
                      source={{uri: item.image}}
                      style={{width: 200, height: 200}}
                    />
                  </View>
                </TouchableHighlight> 
              }
            />
          </View>     
      ); 
   }      
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#223343',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 70
    },
    title: {
      color: '#FFF',
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 20
    },
    searchBox: {
      fontSize: 20,
      fontWeight: '300',
      padding: 20,
      width: '100%',
      backgroundColor: '#FFF',
      borderRadius: 8,
      marginBottom: 40
    },
  })