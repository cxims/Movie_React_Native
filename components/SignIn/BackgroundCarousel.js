import * as React from "react";
import {StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Text, Button, StatusBar, TouchableOpacity} from 'react-native'
import { Navigation} from 'react-navigation'

const DEVICE_WIDTH = Dimensions.get("window").width
const DEVICE_HEIGHT = Dimensions.get("window").height
const DESCRIPTION = [
    'TENECY est le premier site multi-marque de luxe à l\'affut',
    'des dernières tendances',
    'Une livraison de 30 minutes',
    'grâce à la rubrique Brandcity',
    'Nous offrons à nos clients une expérience shopping unique à',
    'travers des offres personnalisés, des produits luxueux et un',
    'service exceptionnel.'
]

export default class BackgroundCarousel extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: 0,
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev => ({selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1}),
            () => {
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                })
            })
        }, 4000)
    }

    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width
        const contentOffset = event.nativeEvent.contentOffset.x

        const selectedIndex = Math.floor(contentOffset / viewSize)
        this.setState({selectedIndex})
    }

    render() {
        const images = this.props.images
        const login = this.props.login
        const {selectedIndex} = this.state
        return (
            <View style={{height: "100%", width: "100%"}}>
                <ScrollView horizontal
                    pagingEnabled 
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                 >
                    {images.map((image, index) => (
                        <ImageBackground
                            key={image}
                            source={{uri: image}}
                            style={styles.backgroundImage}
                        >
                            
                            <View style={styles.logo}>
                                <Image source={require('../../img/Signup/logo-blanc.png')} style={{width: 250, height: 60 }}/> 
                            </View>
                            <View style={styles.descParent}>
                                <Text style={styles.desc}>{index === 0 ? DESCRIPTION[0] : index === 1 ? DESCRIPTION[2] : index === 2 ? DESCRIPTION[4] : null}</Text>
                                <Text style={styles.desc}>{index === 0 ? DESCRIPTION[1] : index === 1 ? DESCRIPTION[3] : index === 2 ? DESCRIPTION[5] : null}</Text>
                                <Text style={styles.desc}>{index === 2 ? DESCRIPTION[6] : null}</Text>
                            </View>    
                            <View>
                                <TouchableOpacity style={styles.buttonConnexion} onPress={() => this.props.navigation.navigate('Login')}>
                                    <Text style={{color: '#ff6a8f'}}>Connexion</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonInscription} onPress={() => this.props.navigation.navigate('Register')}>
                                    <Text style={{color: '#fff'}}>Inscription</Text>
                                </TouchableOpacity>
                                {/* <View style={styles.buttonInscription}>
                                    <Button
                                        title="Inscription"
                                        color="#fff"  
                                        onPress={() => this.props.navigation.navigate('Register')}
                                    />
                                </View> */}
                            </View>
                        </ImageBackground>
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image, index ) => (
                        <View
                            key={image}
                            style={[
                                styles.whiteCircle, 
                                {opacity: index === selectedIndex ? 1 : 0.5},
                                {width: index === selectedIndex ? 13 : 8},
                                {height: index === selectedIndex ? 13 : 8}
                            ]}
                        />
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: DEVICE_HEIGHT + 50,
        width: DEVICE_WIDTH
    },
    circleDiv: {
        position: "absolute",
        bottom: 165,
        height: 10,
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    whiteCircle: {
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#fff"
    },
    buttonConnexion: {
        position: "absolute",
        top: 620,
        left: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        width: 170,
        height: 50
    },
    buttonInscription: {
        position: "absolute",
        top: 620,
        left: 195,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ff6a8f',
        width: 170,
        height: 50
    },
    logo: {
        justifyContent: "center",
        top: 410,
        left: 70
    },
    descParent: {
        position: "absolute",
        bottom: 255,
        height: 20,
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    desc: {
        fontSize: 11,
        color: '#ffffff'
    }
})