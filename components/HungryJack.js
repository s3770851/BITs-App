//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Logo from './Logo'

// create a component
export function HungryJack({navigation}) {
    
        return (
            <View style={styles.container}>
                <Logo/>
                <Text style={styles.menuTxt}>Menu</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegSuccess')}>
                <Image style={{width: 150, height: 88}} source={require('../assets/ColdDrinks_4.png')} title={'Cold Drinks'}/>               
                </TouchableOpacity>
                <Text style={styles.menuTxt}> Cold Drinks </Text>

                <TouchableOpacity onPress={() => navigation.navigate('RegSuccess')}>
                <Image style={{width: 150, height: 88}} source={require('../assets/Whopper.png')} title={'Whopper Burger'}/>               
                </TouchableOpacity>
                <Text style={styles.menuTxt}> Whopper </Text>

                <TouchableOpacity onPress={() => navigation.navigate('RegSuccess')}>
                <Image style={{width: 150, height: 88}} source={require('../assets/Wraps.png')} title={'Wraps'}/>               
                </TouchableOpacity>
                <Text style={styles.menuTxt}> Wraps </Text>

                <TouchableOpacity onPress={() => navigation.navigate('RegSuccess')}>
                <Image style={{width: 150, height: 88}} source={require('../assets/Chicken_burger_mobile.png')} title={'Cold Drinks'}/>               
                </TouchableOpacity>
                <Text style={styles.menuTxt}> Chicken Burger </Text>

                <TouchableOpacity onPress={() => navigation.navigate('RegSuccess')}>
                <Image style={{width: 150, height: 88}} source={require('../assets/1588_Cheesy_Bacon_Loaded_Chips_WEB-no-new.png')} title={'Loaded Fries'}/>               
                </TouchableOpacity>
                <Text style={styles.menuTxt}> Loaded Fries </Text>


                
                                
                                   
                                        
                                  
            </View>
        );
    
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },

    menuTxt: {
        color: '#17f40f',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10,
    }
});

//make this component available to the app
export default HungryJack;
