
//import React, {useState} from 'react';
import * as React from 'react';
import { StyleSheet, Text, Button, View, FlatList, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import firebase from 'firebase'
//import HungryJack from './HungryJack'
function RestSelect({ navigation }) {
  
    // const [restaurant] = useState([
    //     { id: '1', name: 'Hungry Jacks' },
    //     { id: '2', name: 'McDonalds' },
    //     { id: '3', name: 'Subway' },     
    //     { id: '4', name: 'Sushi Train'},
    //     { id: '5', name: 'Grilled'},
    //     { id: '6', name: 'Curry Kings'},
    // ]);
    // const pressHandler = (id) =>{
    //     console.log(id);
    // }
    const pressHandler = () => {
      navigation.navigate();
    };
    // navigation.navigate(item.id)
    return (<View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
        <Text style={styles.loginMsgTxt}>Logged In</Text>
        <Text style={styles.welcomeTxt}>Welcome, please select a restaurant for their menu.</Text>
        
        <FlatList style={styles.flatLst} />
        <TouchableOpacity onPress={pressHandler}>
          <Text style={styles.txt}>Hungry Jacks</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.restStyle}>
        <TouchableOpacity style={{ padding: 10 }} onPress={() => firebase.auth().signOut()}>
          <Text style={styles.loginText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>);
  }

//item.id
    const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#000000',
  paddingTop: 10,
  paddingHorizontal: 20,
  alignItems: 'center',
  justifyContent: 'center',
},

flatLst: {
  marginTop: 2,
  marginBottom: 10,
},
 
logoContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
},

welcomeTxt: {
  color: 'white',
  fontSize: 18,
  alignSelf: 'center',
  marginBottom: 10,
  
},

loginMsgTxt: {
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold',
  alignSelf: 'center',
  marginBottom: 20,
  
},


loginText:{
  color:"white",
  alignSelf: 'center',
  fontWeight: 'bold',
},

txt:{
  color: '#17f40f',
  marginBottom: 20,
  fontSize: 20,
},

loginBtn:{
  width:"100%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignSelf:"center",
  justifyContent:"center",
  marginTop:40,
  marginBottom:15,
},

item: {
  marginTop: 24,
  padding: 30,
  backgroundColor: 'pink',
  fontSize: 24,
},

});

export default RestSelect;

