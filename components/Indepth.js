import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from './Logo'
 function Indepth() {
  const PressHandler = () => {
    Navigation.navigate("")
  }
  return (
  
    <View style={styles.container}>
	<Logo/>
      <Text style={styles.menuTxt}>WOAH YANKEE WITH NO BRIM</Text>
    </View>

    <View style={styles.btnContainer}>
<TouchableOpacity onPress={PressHandler}>
  <Text style={styles.accountbtn}> Want to see more info?</Text>
</TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
  },

  menuTxt: {
      color: 'white',
      fontSize: 18,
      alignSelf: 'center',
      marginBottom: 10,
  }
});