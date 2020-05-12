//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from './Logo'

// create a component
export function HungryJack() {
    
        return (
            <View style={styles.container}>
                <Logo/>
                <Text style={styles.menuTxt}>Menu</Text>
                
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
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 10,
    }
});

//make this component available to the app
export default HungryJack;
