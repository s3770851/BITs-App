import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import  EmailandPassword from './EmailandPassword';



// create a component
export default function RestSelect({ navigation}){
const pressHandler = () => {
    navigation.navigate('Login')
}
    return (
        <View style={styles.container}>
             <View style={styles.logoContainer}>
                <Logo/>

             </View>
             <View style={styles.emailAndPassword}>
                <EmailandPassword/>
             </View>

             <View style={styles.btnContainer}>
             <TouchableOpacity onPress={pressHandler}>
                    <Text style={styles.accountBtn}>Don't have an account yet? Signup</Text>
                </TouchableOpacity> 
             
             </View>
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       // alignItems: 'center',
       backgroundColor: '#000000',
      
    },

    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnContainer: {
        flex: 1,    
        justifyContent: 'center',        
        marginBottom: 50,   
    },

    accountBtn: {
       color: '#fff',
       fontSize: 12,
       alignSelf: 'center',
       flexDirection: 'row',
    },

  
    emailAndPassword: {
        flex: 2,

    }
});

