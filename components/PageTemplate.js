//import liraries
import React, {useState} from 'react';
import { View, Text, StyleSheet,FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Logo from './Logo'
// create a component
function Template () {
    
        return (
            <View style={styles.container}>
                <Logo/>
                <Text>Template</Text>
            </View>
        );
    
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Template;
