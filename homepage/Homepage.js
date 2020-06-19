import * as React from 'react';
import { Text, View, StyleSheet, Button, AppRegistry, Image } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class Homepage extends React.Component {
  
  static navigationOptions = {
    title: 'GoFitness', 

  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/gymlogo.png')} />
          <View style = {styles.btnstyle}>
            <Button onPress = {() => navigate('ExerciseList')}
              title = "Start"
              type= "outline"
              color= "black"
            />

            <Button onPress = {() => navigate ('Gymmap')}
              title = "Find a Gym" 
              type= "outline"
              color= "black"
            />
          </View>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {

    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#800000',
    flex: 1

  },
  
  logo: {

    height: 350,
    width: 360,
    
  },

  btnstyle: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    size: 12, 

  }

 
  
});
