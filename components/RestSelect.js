
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import firebase from 'firebase'

    export default function RestSelect() {

    const [restaurant, setRest] = useState([
        { id: '1', name: 'Hungry Jacks' },
        { id: '2', name: 'McDonalds' },
        { id: '3', name: 'Subway' },     
        { id: '4', name: 'Sushi Train'},
        { id: '5', name: 'Grilled'},
        { id: '6', name: 'Curry Kings'},
    ]);
        
        const pressHandler = (id) =>{
            console.log(id);
        }
      return(
              
          <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
                </View>
               
              <FlatList
              keyExtractor={(item) => item.id}
              data={restaurant}
              renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => pressHandler(item.id)}>
                    <Text style={styles.txt} >{item.name}</Text>
                  </TouchableOpacity>
                   
               // style={styles.loginBtn}
              )}
                />
    <TouchableOpacity style={{padding: 10}} onPress={() => firebase.auth().signOut()}>
                  <Text style={styles.loginText}>Sign Out</Text>
              </TouchableOpacity> 
          </View>
      );
  }

    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,

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
     // flex: 1,
     // alignSelf: 'stretch',
      marginTop: 24,
      padding: 30,
      backgroundColor: 'pink',
      fontSize: 24,
      //alignItems: 'center',
     //justifyContent: 'center',
      //borderBottomWidth: 1,
      //borderBottomColor: '#eee',
  },

});



