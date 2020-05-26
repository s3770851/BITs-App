import React, {useState} from 'react';
import { View, Text, StyleSheet,FlatList, Image, TouchableOpacity } from 'react-native';

// create a component
export function Subway({navigation}) {
    const [menu] = useState([
        { id: '1', name: 'Sandwiches', imageUrl: "https://www.subway.com/ns/images/menu/AUS/ENG/RPLC_Buffalo_Chicken_308x113.jpg" },
        { id: '2', name: 'Panninis', imageUrl: "https://www.subway.com/ns/images/menu/AUS/ENG/SUBW0302_PANINIS-308x113.jpg" },
        { id: '3', name: 'Salads', imageUrl: "https://www.subway.com/ns/images/menu/AUS/ENG/Chicken_Teriyaki_salad_308x113.jpg" },     
        { id: '4', name: 'Wraps', imageUrl: "https://www.subway.com/ns/images/menu/AUS/ENG/Mediterranean_Chicken_Wrap_308x113.jpg"},
        { id: '5', name: 'Grilled Wraps', imageUrl: "https://www.subway.com/ns/images/menu/AUS/ENG/grilled-wrap-tile.jpg"},
        { id: '6', name: 'Breakfast', imageUrl: "https://www.subway.com/ns/images/menu/AUS/ENG/Bacon%20Egg%20and%20Cheese%20308x113.jpg"},
        { id: '7', name: 'Kids Pack', imageUrl: "https://www.subway.com/ns/images/menu/AUS/ENG/Ham_Kids_Pak_Combo%20308x113.jpg"},
        { id: '8', name: 'Sides/Drinks', imageUrl: "https://www.subway.com/ns/images/menu/AUS/ENG/Category-bacon_308x113_MC.jpg"},
        
    ]);
        return (
            <View style={styles.container}>
                
                <Image  source = {require('../assets/subway.png')} style={{height: 150, width: 260, marginTop: 15}} />
                
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
export default Subway;

