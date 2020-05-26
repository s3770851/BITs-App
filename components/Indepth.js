//import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Logo from './Logo';


// create a component

     function Indepth({navigation}) {
            const pressHandler = () => {     
               navigation.navigate('mvf5')
            }
    return (       
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            {/* <View style={styles.Itemname}>
                <Itemname/>
            </View> */}

            <View style={styles.image}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>ImagePlaceholder</Text>
    </ImageBackground>
  </View>
);

            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={pressHandler}>
                    <Text style={styles.accountBtn}>Would you like to see more info? </Text>
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

    image: {
       alignSelf: 'center',
       flexDirection: 'row',
       marginTop: 2
    },

    emailAndPassword:{
        flex:2
    }
});

//make this component available to the app
export default Indepth;
