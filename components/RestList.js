import React, { Component } from 'react';

import { ActivityIndicator, Alert, FlatList, Text, StyleSheet, View, TextInput, ColorPropType } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const pressHandler = (name) => {
  console.log(name);
  
}
export default class RestList extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoading: true,
      text: '',
      data: []
    }

    this.arrayholder = [];
  }

  

  componentDidMount() {

    return fetch('https://my-json-server.typicode.com/s3770851/BITs-App/Restaurants')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          data: responseJson,
        }, () => {
          // In this block you can do something with new state.
          this.arrayholder = responseJson;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  GetFlatListItem(name) {
    Alert.alert(name);
  }

  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });

    this.setState({
      data: newData,
      text: text
      })
    }

    itemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#fff",
          }}
        />
      );
    }

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
   
      return (
   
        <View style={styles.MainContainer}>
   
        <TextInput 
         style={styles.textInput}
         onChangeText={(text) => this.searchData(text)}
         value={this.state.text}
         underlineColorAndroid='transparent'
         placeholder="Search Here" />

        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          //keyExtractor={ (item) => item.id }
          ItemSeparatorComponent={this.itemSeparator}
           renderItem={({ item }) => (
           <TouchableOpacity  onPress={() => pressHandler(this.props.navigation.navigate(item.name))}>
           <Text style={styles.row}>{item.name}</Text>
           </TouchableOpacity>
          // onPress={this.GetFlatListItem.bind(this, item.name)} >{item.name}</Text>}
          //onPress={() => this.props.navigation.navigate('HungryJack')}>{item.name}</Text>}
           )}
          style={{ marginTop: 10 }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    backgroundColor: '#000000',
    borderRadius: 8,
  },

  row: {
    fontSize: 18,
    padding: 12,
    color: '#17f40f',
   
  },

  textInput: {

    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    //borderColor: '#009688',
    borderColor: '#000',
    borderRadius: 8,
    backgroundColor: "#fff"

  }
});
