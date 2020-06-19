import * as React from 'react';
import { Text, View, StyleSheet, Button, AppRegistry, Component } from 'react-native';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';
import ReactDOM from 'react-dom';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import { Actions, Router, Scene } from "react-native-router-flux";
// You can import from local files
import Homepage from './homepage/Homepage.js';
import Gymmap from './mappages/Gymmap.js'; 
import ExerciseList from './exercise/ExerciseList.js';
import FoodTracker from './exercise/FoodTracker.js';
//import Container from './Screens.js'


const App = createStackNavigator({
  Homepage: {screen: Homepage},
  Gymmap: {screen:Gymmap},
  ExerciseList: {screen:ExerciseList},
  FoodTracker: {screen: FoodTracker},
  //Profile: {screen: Login},
},
  {
    initialRouteName: 'Homepage',
  }

);

export default createAppContainer(App);

