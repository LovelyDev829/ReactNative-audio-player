import 'react-native-gesture-handler';
import React from 'react';
import { Image, Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Grid from 'react-native-grid-component';

const Stack = createStackNavigator();
const image = require("../resource/image/background/007.jpg");
const radio = require("../resource/image/icons/mode/radio.png");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { setModeId } from "./Actions";
import { useSelector, useDispatch } from 'react-redux';

const ModeScreen = (props) => {
  const modeCount = useSelector((state) => state.modeCount);
  const modeList = useSelector((state) => state.modeList);
  const nowModeId = useSelector((state) => state.nowModeId);
  const dispatch = useDispatch();
  const setMode = (tempModeId) => {
    dispatch(setModeId(tempModeId));
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{"modeCount : " + modeCount}</Text>
        <View style={styles.row}>
          {
            modeList.map((modeItem) => {
              return (
                <View style={styles.boxDiv} key={"key_mode" + modeItem.modeId}>
                  <View style={styles.box}
                    onTouchStart={() => {
                      setMode(modeItem.modeId)
                      props.navigation.navigate('Author')
                    }}>
                    {/* <ImageBackground resizeMode="cover" source={radio} style={styles.modeIcon}> */}
                      <Text style={styles.item}>{modeItem.modeName} : {modeItem.authorCount}</Text>
                    {/* </ImageBackground> */}
                  </View>
                </View>
              )
            })
          }
        </View>
        <Text style={styles.backBtn}
          onPress={() =>
            props.navigation.goBack()
          }
        >CLICK TO GO BACK</Text>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  boxDiv: {
    // flexBasis: 75,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff00",
    minWidth: '50%',
    maxWidth: '50%'
  },
  box: {
    // flexBasis: 75,
    borderWidth: 1,
    borderColor: "#ffcfcf70",
    height: 150,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "#0f0f0fb0",
  },
  image: {
    flex: 1,
    height: windowHeight,
  },
  row: {
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: {
    color: "#ffffff90",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  item: {
    color: "#ffffffcf",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  backBtn: {
    color: "#ffffffff",
    fontSize: 25,
    lineHeight: 50,
    textAlign: "center",
    backgroundColor: "#000000ff",
    bottom: 24,
    width: '100%',
    position: 'absolute'
  },
  modeIcon:{
    flex: 1,
    width: "80%",
  }
});

export default ModeScreen;