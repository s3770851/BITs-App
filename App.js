import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase'
import { View, StyleSheet } from 'react-native';
import RestList from './components/RestList';
import Register from './components/Register'
import HungryJack from './components/HungryJack'
import Indepth from './components/Indepth';
import LoginForm from './components/LoginForm';
import DetailsScreen from './components/DetailsScreen';
import RegSuccess from './components/RegSuccess';
import LoginSuccess from './components/LoginSuccess';
import DietReq from './components/DietReq';
import Nandos from './components/Nandos';
import McDonalds from './components/McDonalds';
import Subway from './components/Subway';


const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
class App extends React.Component{
  
  state={
    loggedIn:null
  }

  componentDidMount() {
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
     case false:
        return <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">         
          <Stack.Screen name="Home" component={LoginForm} options={{ title: 'Login' }}/>
          <Stack.Screen name="Register" component={Register} options={{ title: 'Registration' }}/>
          
          </Stack.Navigator>
        </NavigationContainer>
         
        

     case true:
       return  <NavigationContainer>
       <Stack1.Navigator> 
          <Stack1.Screen name="RegSuccess" component={RegSuccess} options={{ title: 'Registration Successful' }}/>
          <Stack1.Screen name="RestList" component={RestList} options={{ title: 'Restaurants' }}/>  
          <Stack1.Screen name="Hungry Jacks" component={HungryJack} options={{ title: 'Hungry Jacks' }}/>
          <Stack1.Screen name="Nando's" component={Nandos} options={{ title: 'Nandos' }}/>
          <Stack1.Screen name="McDonalds" component={McDonalds} options={{ title: 'McDonalds' }}/>
          <Stack1.Screen name="Subway" component={Subway} options={{ title: 'Subway' }}/>
          <Stack1.Screen name="Indepth" component={Indepth} />
          <Stack1.Screen name="DietReq" component={DietReq} options={{ title: 'Dietary Requirements' }}/>         
          <Stack1.Screen name="LoginSuccess" component={LoginSuccess} options={{ title: 'Login Successful' }}/>
         
          </Stack1.Navigator>
        </NavigationContainer>
       
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
  },
});

//make this component available to the app
export default App;


