import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import Logo from './Logo';
import firebase from 'firebase'


function DetailsScreen({navigation}) {
    
    const [restaurant] = useState([
        { id: '1', name: 'Hungry Jacks' },
        { id: '2', name: 'McDonalds' },
        { id: '3', name: 'Subway' },     
        { id: '4', name: 'Sushi Train'},
        { id: '5', name: 'Grilled'},
        { id: '6', name: 'Curry Kings'},
    ]);
    
    return (
       
    <View style={styles.container}>
        
                          
        <View style={styles.logoContainer}>
          <Logo />        
          
          <Text style={styles.welcomeTxt}>Welcome, please select a restaurant.</Text>
         
          <FlatList style={styles.flatLst}
            data={restaurant}
            renderItem={({item}) =>(
                <TouchableOpacity onPress={() => navigation.navigate('HungryJack')}>      
        <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
)}
/>
        </View>
        
      </View>);
    }
  
 
      const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoView: {
      padding: 10,
  },
  
  flatLst: {
    marginTop: 40,
    marginBottom: 10,
  },

  item: {
    marginTop: 24,
    padding: 30,
    paddingTop: 15,
    color: '#17f40f',
    fontSize: 17,
  },
   
  logoContainer: {
    flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  },
  welcomeTxt: {
    color: '#0066FF',
    fontSize: 16.5,
    alignSelf: 'center',
    marginBottom: 10,
    
  },

  loginText:{
    color:"white",
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  
  loginMsgTxt: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    
  },
  txt:{
    color: '#17f40f',
    marginBottom: 20,
    fontSize: 20,
  },
   
    });

  export default DetailsScreen;