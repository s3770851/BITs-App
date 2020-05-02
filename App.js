
import React, { Component } from 'react';
//import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import firebase from 'firebase'
import Loading from './components/Loading'
import Navigator from './components/AppNavigator';

class App extends Component{


  state={
    loggedIn: null
  }

  render(){
    return(
      <Navigator/>
    );
  }
  render(){
    return(
      <Fire/>
    );
  }
  

  componentDidMount = () =>{
    var firebaseConfig = {
      apiKey: "AIzaSyCSinEpdPYxtMr4vYYJA7H6R24bgWeDFFc",
      authDomain: "bits-app-deb3f.firebaseapp.com",
      databaseURL: "https://bits-app-deb3f.firebaseio.com",
      projectId: "bits-app-deb3f",
      storageBucket: "bits-app-deb3f.appspot.com",
      messagingSenderId: "84578029312",
      appId: "1:84578029312:web:c5c199fcd013a2e8beade5",
      measurementId: "G-L46XSW0GF1"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if(user){
                this.setState({
                  loggedIn: true
                })
      }else{
                this.setState({
                  loggedIn: false
                })
      }
    })

  
  }
  renderContent = () =>{
    switch(this.state.loggedIn){
      case true:
       return <Register/>

       case false:
       return <Navigator/>

       default:
         return <Loading/>
    }
  } 
  
  render(){
    return (
     
      <View style={styles.container}>
      {this.renderContent()}      
     </View>            
   );
  }


}
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    //backgroundColor: '#000000',
    
  },
});

//make this component available to the app
export default App;


