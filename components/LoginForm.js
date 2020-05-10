//import libraries
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import EmailAndPassword from './EmailandPassword';

// create a component

    function LoginForm({navigation}){
    const pressHandler = () => {     
       navigation.navigate('Register')
    }

    return (       
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View style={styles.emailAndPassword}>
                <EmailAndPassword/>
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
        backgroundColor: '#000000',
        padding: 20     
    },

    btnContainer: {
        flex: 1,    
        justifyContent: 'center',        
        marginBottom: 50,   
    },

    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
    },

    accountBtn: {
        color: '#17f40f',
       fontSize: 12,
       alignSelf: 'center',
       flexDirection: 'row',
       marginTop: 2
    },

    emailAndPassword:{
        flex:2
    }
});

//make this component available to the app
export default LoginForm;


 