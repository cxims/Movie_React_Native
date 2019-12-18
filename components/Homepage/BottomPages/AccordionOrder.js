import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import arrowUp from '../../../img/Icons/expand_arrow.png'
import arrowDown from '../../../img/Icons/collapse_arrow.png'

{/* <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='gray' /> */}

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={[styles.title]}>{this.props.title}</Text>
                    <Text style={styles.content}>Date de la commande : {this.props.date}</Text>
                    <Text style={styles.content}>Livré à : {this.props.name}</Text>
                    <Text style={styles.content}>Statut de la commande : {this.props.statut}</Text>
                </View>
                <Image source={this.state.expanded ? arrowDown : arrowUp} style={{width:30, height: 30, tintColor: "#ff6a8f"}}/>
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    {this.props.data} 
                </View>
            }
            <View style={{height: 10, backgroundColor: "#F4F4F4"}}></View>
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        color: 'black',
        marginRight: 150,
        marginTop: 8
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:120,
        paddingLeft:10,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: '#fff',
    },
    parentHr:{
        height:1,
        color: '#fff',
        width:'100%'
    },
    child:{
        padding:16,
    },
    content: {
        fontSize: 12,
        marginTop: 10,
        color: 'gray'
    }
});