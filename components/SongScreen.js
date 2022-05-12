import 'react-native-gesture-handler';
import React from 'react';
import { Image, ScrollView, Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Grid from 'react-native-grid-component';
const Stack = createStackNavigator();
// const image = { uri: "https://reactjs.org/logo-og.png" };
const image = require("../resource/image/background/002.jpg");
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { setSongId } from "./Actions";
import { useSelector, useDispatch } from 'react-redux';

const SongScreen = (props) => {
  const nowModeId = useSelector((state) => state.nowModeId);
  const nowAuthorId = useSelector((state) => state.nowAuthorId);
  const nowModeName = useSelector((state) => state.modeList[nowModeId-1].modeName);
  const nowAuthorName = useSelector((state) => state.modeList[nowModeId-1].authorList[nowAuthorId-1].authorName);
  const songList = useSelector((state) => state.modeList[nowModeId - 1].authorList[nowAuthorId-1].songList);
  const dispatch = useDispatch();
  const setSong = (tempSongId) => {
    dispatch(setSongId(tempSongId));
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Author Name : {nowAuthorName}</Text>
        <ScrollView style={styles.row}>
          {
            songList.map((songItem) => {
              return (
                <View style={styles.box} key={"key_song" + songItem.songId}
                  onTouchEnd={() => {
                    setSong(songItem.songId)
                    props.navigation.navigate('Player')
                  }}>
                  <Image source={image} style={styles.face} />
                  <Text style={styles.item}>
                    {songItem.songTitle}{"\n"}
                    ⭐⭐⭐⭐⭐{"\n"}
                    Author : {nowAuthorName}
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    height: windowHeight,
  },
  text: {
    color: "#ffffff90",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
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
    borderRadius : 50,
    height: 100,
    width: 100,
  },
  item: {
    color: "#ffffffff",
    fontSize: 22,
    // lineHeight: 100,
    textAlign: "left",
    marginLeft: 10,
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
});

export default SongScreen;