//import liraries
import React, {useState} from 'react';
import { View, Text, StyleSheet,FlatList, Image, TouchableOpacity } from 'react-native';

// create a component
export function HungryJack({navigation}) {
    const [menu] = useState([
        { id: '1', name: 'Cold Drinks', imageUrl: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/category/ColdDrinks_4.png" },
        { id: '2', name: 'Whopper', imageUrl: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/Category/Whopper.png" },
        { id: '3', name: 'Wraps', imageUrl: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/Category/Untitled-design.png" },     
        { id: '4', name: 'Chicken Burger', imageUrl: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/Product/Mobile/Chicken_burger_mobile.png"},
        { id: '5', name: 'Loaded Fries', imageUrl: "https://www.hungryjacks.com.au/getattachment/Menu/What-s-New/Cheesy-Bacon-Loaded-Chips/1588_Cheesy_Bacon_Loaded_Chips_WEB-no-new.png.aspx"},
        { id: '6', name: 'Kids Nuggets', imageUrl: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/category/6_Nuggets_Kids_Pack_1.png"},
        { id: '7', name: 'Family Bundle', imageUrl: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/Product/Main/3756_GrilledChickenHungerTamers_WEB.png"},
        { id: '8', name: 'Grill Masters', imageUrl: "https://www.hungryjacks.com.au/getmedia/a4a68b48-2458-42a8-97e8-78b95f9a3b2d/4129_Ult_Smoky_Angus_ALC_1.aspx"},
        { id: '9', name: 'Fresh Choices', imageUrl: "https://www.hungryjacks.com.au/getattachment/Menu/Fresh-Choices/360x240_App_CatImage_FreshChoices_transp.png.aspx"},
        { id: '10', name: 'Beef Burgers', imageUrl: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/Category/BeefBurgers.png"},
        { id: '11', name: 'Sides and Snacks', imageUrl: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/category/Sides-Snacks_1.png"},
        { id: '12', name: 'Breakfast', imageUrl: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/Category/App-Category-Icons.png"},
    ]);
        return (
            <View style={styles.container}>
                
                <Image  source = {require('../assets/hungryJack.png')} style={{height: 150, width: 150, marginTop: 15}} />
                
                <FlatList style={styles.flatLst}
                numColumns={2}
            data={menu}
            renderItem={({item}) =>(
                <TouchableOpacity onPress={() => navigation.navigate('DietReq')} >      
        <Text style={styles.item}>{item.name}</Text>
       <Image 
       source={{uri: item.imageUrl}}
       style={{width: 150, height: 100, margin: 5}}
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
export default HungryJack;
