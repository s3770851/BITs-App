
import React from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import Constants from 'expo-constants';


const DATA = [
{ 
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Energy 2750kj\nProtein 28.3g\nFat 39.3g\nSat Fat 11.7g\nCarbs 47.9g\nSugars 8.0g\nSodium 837mg',
}
];
    function Item ({title}) {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

     function DietReq({navigation}) {
            const pressHandler = () => {     
               navigation.navigate('Indepth')
    return (       
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
                </View>
               

    <View style={styles.itemtitle}>
        <Text>Whopper</Text>
      </View>,
            
    
        <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        />
   
 

  
            
        <View style={styles.back}>
      <View>
        <Button
          title="Back"
          color="#696969"
          TouchableOpacity onPress={pressHandler}>
      </Button>
      </View>
    </View>
    </View>
    );
    };

     }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 20     
    },

    back: {
        flex: 1,    
        justifyContent: 'center',        
        marginBottom: 50,   
    },
    item: {
        backgroundColor: '#fffaf0',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
     
      title: {
        fontSize: 32,
      },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
    },

    itemtitle: {
       alignSelf: 'center',
       flexDirection: 'row',
       marginTop: 2
    },
   
});


export default DietReq;
