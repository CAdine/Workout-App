import * as React from 'react';
import { Text, View, StyleSheet, Button, AppRegistry, Image} from 'react-native';

import Constants from 'expo-constants';

import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {

   static navigationOptions = {
    title: 'Exercise List', 

  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <View style={styles.container}>
       <Image style = {styles.imageStyle}
          source={require('../assets/foodicon.png')}/>
        <Button onPress = {() => navigate('FoodTracker')}
          style = {styles.btnStyle}
          title = "Track nutrition"
        />
        <Image style ={styles.imageStyle}
          source = {require('../assets/upperbody')}/>
        <Button
          title = "Track Exercise" 
        />
        <Button
          title = "Find Gym"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800000',
    flex: 1, 
 
  },
  
  imageStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 100,

    
  },
  btnStyle: {

      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20, 

  }
  
});