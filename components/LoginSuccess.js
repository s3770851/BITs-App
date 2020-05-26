//import liraries

import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Logo from './Logo';


    function LoginSuccess({navigation}){
    
        return (
           
         <View style={styles.container}>
             <View style={styles.logoContainer}>
                <Logo/>
                <Text style={styles.welcomeTxt}>Login Successful..!</Text>
             </View>
           
             <View style={styles.regoDetails}>
             <TouchableOpacity style={{ padding: 10, }} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.loginText}>Go to Restaurant Selection</Text>
        </TouchableOpacity>
             {/* <Button
        title="Back to Login"
        onPress={() => navigation.navigate('LoginForm')}
      /> */}
             </View> 

             
                    
        </View>
    )
    }


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#000000',
    },

    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    welcomeTxt: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
        marginBottom: 10,
        
      },

    regoDetails: {
        flex: 2,

    },
    btnContainer: {
        flex: 1,      
        justifyContent: 'center',
        marginBottom: 15,     
    },
    loginText:{
        color:"white",
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    
 
    
});

export default LoginSuccess;
