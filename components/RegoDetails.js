import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, navigation } from 'react-native';
import firebase from 'firebase'
// create a component
class RegoDetails extends Component {
   // export default function RegoDetails(){
    state = {
        email:'',
        password:'',
        error:'',
        loading: false,
    }
    

    onPress = () =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSucess)
        .catch(err =>{
            this.setState({
                error:err.message
            })
        })
    }
    onLoginSucess = () =>{
        this.setState({
            error: '',
            loading: false
        })

    }
    render () {
        return (

            <View style={styles.container}>
                <TextInput style={styles.inputText}
                 placeholder="Email..." 
                 placeholderTextColor="#003f5c" 
                 value={this.state.email}
                 onChangeText={email=> this.setState({email})}/> 

                <TextInput secureTextEntry style={styles.inputText}
                 placeholder="Password..." 
                 placeholderTextColor="#003f5c" 
                 value={this.state.password}
                 onChangeText={password=> this.setState({password})}
                 /> 
                 
                

                <TouchableOpacity style={styles.loginBtn} onPress={() => firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)}>
                    <Text style={styles.loginText}>Create Account</Text>
                </TouchableOpacity>  

                <TouchableOpacity style={{padding: 10}} onPress={() => firebase.auth().signOut()}>
                    <Text style={styles.loginText}>Sign Out</Text>
                </TouchableOpacity>  
                    <Text style={styles.errorText}>
                         {this.state.error}
                    </Text> 
                         
            </View>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    
   
    },
 

     loginBtn:{
        width:"100%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignSelf:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:15,
      },
      inputText:{
       width: "100%",
        alignSelf: 'center',
        height:50,
        color:"#000000",
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginBottom:15,
        borderRadius: 25,
      },
      loginText:{
        color:"white",
        alignSelf: 'center',
        fontWeight: 'bold',
      },
      errorText: {
          fontSize: 19,
          color: '#FE0A03',
          alignSelf: 'center',

      },
      forgot:{
        color:"white",
        fontSize:11,
        alignSelf: 'center',
      },
});

//make this component available to the app
export default RegoDetails;