import * as React from 'react';
import { Text, View, StyleSheet, Button, AppRegistry } from 'react-native';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';
import ReactDOM from 'react-dom';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import { Actions, Router, Scene } from "react-native-router-flux";
// You can import from local files
import Homepage from './homepage/Homepage.js';
import Gymmap from './mappages/Gymmap.js'; 
import ExerciseList from './exercise/ExerciseList.js'

const NavigationStack = createStackNavigator({
 // HomeScreen: {screen: Homepage},
  //MapScreen: {screen:Gymmap},
  ExerciseScreen: {screen:ExerciseList},
  //Profile: {screen: Login},
});

const Container = createAppContainer(NavigationStack);

export default Container; 


/*
export default class App extends React.Component {
  render() {
    return (
     
     <Card>
          <Homepage />
    </Card>
    );
  }
}*/
