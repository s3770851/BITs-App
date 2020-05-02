//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Logo = () => {
    return (
       
            <Image  source = {require('../assets/LogoDesign1.png')} style={{height: 150, width: 200}} />
       
    );
};

// define your styles


//make this component available to the app
export default Logo;
