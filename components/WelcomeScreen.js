import 'react-native-gesture-handler';
import React from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// const image = { uri: "https://reactjs.org/logo-og.png" };
const image = require("../resource/image/background/008.jpg");

const WelcomeScreen  = (props) => (
  <View style={styles.container} onTouchStart={() => props.navigation.navigate('Mode')}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Welcome...</Text>
      <Text style={styles.subText}
      >Please touch the screen to start</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000050"
  },
  subText: {
    color: "white",
    fontSize: 22,
    lineHeight: 44,
    textAlign: "center",
    backgroundColor: "#00000090"
  }
});

export default WelcomeScreen ;