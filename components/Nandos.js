import React, {useState} from 'react';
import { View, Text, StyleSheet,FlatList, Image, TouchableOpacity } from 'react-native';

// create a component
export function Nandos({navigation}) {
    const [menu] = useState([
        { id: '1', name: 'Big Mac', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_BigMac-201904.png" },
        { id: '2', name: 'CheeseBurger', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_Cheeseburger-201904.png" },
        { id: '3', name: 'Hamburger', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_Hamburger-201904.png" },     
        { id: '4', name: 'McFeast', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_McFeast-201904.png"},
        { id: '5', name: 'Quarter Pounder', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_QuarterPounder-201904.png"},
        { id: '6', name: 'Double Quarter', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_QuarterPounder_Double-201904.png"},
        { id: '7', name: 'McChicken', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_McChicken-201904.png"},
        { id: '8', name: 'Filet-o-Fish', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_FiletOFish-201904.png"},
        { id: '9', name: 'McVegie', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_McVeggie.png"},
        { id: '10', name: 'McVegie Deluxe', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_McVeggie-Deluxe.png"},
        { id: '11', name: 'Beef and Bacon', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_Double_Beef_Bacon-201904.png"},
        { id: '12', name: 'Fries', imageUrl: "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_Fries.png"},
    ]);
        return (
            <View style={styles.container}>
                
                <Image  source = {require('../assets/nandos.png')} style={{height: 150, width: 160, marginTop: 15}} />
                
                <FlatList style={styles.flatLst}
                numColumns={2}
            data={menu}
            renderItem={({item}) =>(
                <TouchableOpacity onPress={() => navigation.navigate('')} >      
        <Text style={styles.item}>{item.name}</Text>
       <Image 
       source={{uri: item.imageUrl}}
       style={{width: 160, height: 120, margin: 5}}
       ></Image>
        </TouchableOpacity>
)}
/>
                           
                             
                                  
            </View>
        );
    
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },

    menuTxt: {
        color: '#17f40f',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10,
    },

    flatLst: {
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 25,
        width: "100%"
      
    },

      item: {
        marginTop: 10,
        padding: 10,
        paddingTop: 15,
        color: '#17f40f',
        fontSize: 17,
        marginHorizontal: 5,
      },
});

//make this component available to the app
export default Nandos;
