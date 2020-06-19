import React, { Component } from 'react'; 
import MapView from 'expo';
import { View, Button, StyleSheet } from 'react-native'; 

export default class App extends Component {

  state = {

    latitude: 51.4934,
    longitude: 0.0098, 
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }

  vancouver = () => this.setState ({
    latitude: 49.2827,
    longitude: 123.1207, 
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,

  })

  toronto = () => this.setState ({
    latitude: 43.6532,
    longitude: 79.3832, 
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  })

  losangeles = () => this.setState ({
    latitude: 34.0522,
    longitude: 118.2437, 
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }) 

  paris = () => this.setState ({

    latitude: 48.8566,
    longitude: 2.3522, 
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  })

  render() {
    return (
      <View style = {styles.container}> 
        <View > 
          <Button onPress = {this.vancouver}
          title = "Vancouver"/>
        </View>

        <View> 
          <Button onPress = {this.toronto}
          title = "Toronto" />
        </View>

         <View> 
          <Button onPress = {this.losangeles}
          title = "Los Angeles"/>
        </View>

        <View> 
          <Button onPress = {this.paris}
          title = "Paris"/>
        </View>
      </View>
  
  
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1   
  }
 
}); 
