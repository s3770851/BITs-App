//import liraries

import * as React from 'react';
import { View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from './Logo';
import RegoDetails from './RegoDetails'

   export default function Register({ navigation }){

  
        return (
           
         <View style={styles.container}>
             <View style={styles.logoContainer}>
                <Logo/>
             </View>
           
             <View style={styles.regoDetails}>
                <RegoDetails/>
             </View> 
             
             {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
                    
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

    regoDetails: {
        flex: 2,

    },
    btnContainer: {
        flex: 1,      
        justifyContent: 'center',
        marginBottom: 15,     
    },
    
 
    
});


