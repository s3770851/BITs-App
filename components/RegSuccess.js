//import liraries

import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Logo from './Logo';

import firebase from 'firebase'
    function RegSuccess({navigation}){
    
        return (
           
         <View style={styles.container}>
             <View style={styles.logoContainer}>
                <Logo/>
                
             </View>
           
             <View style={styles.regoDetails}>
             <TouchableOpacity style={{ padding: 10, }} onPress={() => navigation.navigate('RestList')}>
          <Text style={styles.loginText}>Proceed to Restaurants</Text>
        </TouchableOpacity>
             {/* <Button
        title="Back to Login"
        onPress={() => navigation.navigate('LoginForm')}
      /> */}
      
             </View> 
<View style={styles.signOut}>
<TouchableOpacity style={{padding: 10}} onPress={() => firebase.auth().signOut()}>
                    <Text style={styles.logOutText}>Sign Out</Text>
                </TouchableOpacity>  
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
        color: '#0066FF',
        fontSize: 15,
        alignSelf: 'center',
        marginBottom: 10,
        
      },

      signOut: {
          marginBottom: 20,
      },

    regoDetails: {
        flex: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 80,
    },
    btnContainer: {
        flex: 1,      
        justifyContent: 'center',
        marginBottom: 15,     
    },
    loginText:{
        color:"#17f40f",
        alignSelf: 'center',
        fontSize: 16.5,
      },
      logOutText:{
        color:"#17f40f",
        alignSelf: 'center',
        fontSize: 14,
      },
    
 
    
});

export default RegSuccess;
