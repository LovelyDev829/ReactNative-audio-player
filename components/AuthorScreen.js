import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, Image, Alert, Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Grid from 'react-native-grid-component';
const Stack = createStackNavigator();
// const image = { uri: "https://reactjs.org/logo-og.png" };
const image = require("../resource/image/background/004.jpg");
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { setAuthorId } from "./Actions";
import { useSelector, useDispatch } from 'react-redux';

const ModeScreen = (props) => {
  const nowModeId = useSelector((state) => state.nowModeId);
  const nowModeName = useSelector((state) => state.modeList[nowModeId - 1].modeName);
  const authorList = useSelector((state) => state.modeList[nowModeId - 1].authorList);
  const dispatch = useDispatch();
  const setAuthor = (tempAuthorId) => {
    dispatch(setAuthorId(tempAuthorId));
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{nowModeName}</Text>
        <ScrollView style={styles.row}>
          {
            authorList.map((authorItem) => {
              return (
                <View style={styles.box} key={"key_author" + authorItem.authorId}>
                  <Image source={authorItem.authorFace}
                    onTouchEnd={() => { alert("Author : " + authorItem.authorName) }}
                    style={styles.face} />
                  <Text style={styles.item}
                    onPress={() => {
                      setAuthor(authorItem.authorId)
                      props.navigation.navigate('Song')
                    }}>
                    {authorItem.authorName}{"\n"}
                    ⭐⭐⭐⭐  ({authorItem.authorLike}stars){"\n"}
                    number of song : {authorItem.songCount}
                  </Text>
                </View>
              )
            })
          }
        </ScrollView>
        <Text style={styles.backBtn}
          onPress={() =>
            props.navigation.goBack()
          }
        >CLICK TO GO BACK</Text>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  text: {
    color: "#ffffff90",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  image: {
    flex: 1,
    height: windowHeight,
  },
  row: {
    padding: 0,
    margin: 0,
    height: 300,
    flexGrow: 0,
    height: windowHeight-150,
  },
  box: {
    borderTopWidth: 1,
    borderColor: "#ffffff40",
    backgroundColor: "#00000090",
    padding: 10,
    flexDirection: 'row',
  },
  face: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  faceModal: {
    position: "absolute",
    borderRadius: 20,
    height: 300,
    width: 300,
  },
  item: {
    color: "#ffffffff",
    fontSize: 22,
    textAlign: "left",
    marginLeft: 10,
    width: "100%",
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
})

export default ModeScreen;