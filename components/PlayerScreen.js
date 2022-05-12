import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  BackHandler,
  Image,
  ScrollView,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  PanResponder ,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import Grid from "react-native-grid-component";
import { nextSong } from "./Actions";
import { useSelector, useDispatch } from "react-redux";
import Sound from "react-native-sound";
import Slider from "@react-native-community/slider";
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";
const Stack = createStackNavigator();
const image = require("../resource/image/background_ammar/001.png");
const playIcon = require("../resource/image/icons/type_2/play.png");
const pauseIcon = require("../resource/image/icons/type_2/pause.png");
const stopIcon = require("../resource/image/icons/type_2/stop.png");
const backIcon = require("../resource/image/icons/type_2/back_R.png");
const forwardIcon = require("../resource/image/icons/type_2/forward_R.png");
const beforeIcon = require("../resource/image/icons/type_2/before_R.png");
const nextIcon = require("../resource/image/icons/type_2/next_R.png");
const gifImg = require("../resource/image/001.gif");
const gifImgStop = require("../resource/image/001.jpg");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
var soundBack = new Sound(
  require("../resource/sound/000.mp3"),
  (error, sound) => {
    if (error) {
      alert("error" + error.message);
      return;
    }
    soundBack.play();
  }
);
var sound1 = new Sound(require("../resource/sound/001.mp3"), (error, sound) => {
  if (error) {
    alert("error" + error.message);
    return;
  }
});
let panResponder;
// var sound1
const PlayerScreen = (props) => {
  const nowModeId = useSelector((state) => state.nowModeId);
  const nowAuthorId = useSelector((state) => state.nowAuthorId);
  const nowSongId = useSelector((state) => state.nowSongId);
  const nowModeName = useSelector(
    (state) => state.modeList[nowModeId - 1].modeName
  );
  const nowAuthorName = useSelector(
    (state) =>
      state.modeList[nowModeId - 1].authorList[nowAuthorId - 1].authorName
  );
  const nowSongTitle = useSelector(
    (state) =>
      state.modeList[nowModeId - 1].authorList[nowAuthorId - 1].songList[
        nowSongId - 1
      ].songTitle
  );
  const nowSongSource = useSelector(
    (state) =>
      state.modeList[nowModeId - 1].authorList[nowAuthorId - 1].songList[
        nowSongId - 1
      ].songSource
  );
  const [duration, setDuration] = useState();
  const [currentT, setCurrentT] = useState(0);
  const [playFlag, setPlayFlag] = useState(false);
  const [touchPosition, setTouchPosition] = useState({
    locationX:0,
    locationY:0,
    distanceX:0,
    distanceY:0,
    angle : 0,
  });
  const IncreaseTime = () => {
    setCurrentT((currentT) => currentT + 1);
    if (currentT > duration) setCurrentT(0);
  };
  // useEffect(() => {
  //   sound1 = new Sound((nowSongSource),
  //     (error, sound) => {
  //       if (error) {
  //         alert('error' + error.message);
  //         return;
  //       }
  //     })
  //   window.intervalId = setInterval(IncreaseTime, 1000);
  //   sound1.play();
  //   setPlayFlag(true);
  //   soundBack.stop();
  // }, []);
  BackHandler.addEventListener("hardwareBackPress", function () {
    clearInterval(window.intervalId);
    sound1.pause();
    setPlayFlag(false);
  });
  useEffect(() => {
    window.intervalId = setInterval(IncreaseTime, 1000);
    sound1.play();
    setPlayFlag(true);
    soundBack.stop();
  }, []);
  useEffect(() => {
    setDuration(sound1.getDuration());
    if (currentT > duration) {
      setCurrentT(0);
      clearInterval(window.intervalId);
      sound1.stop();
      setPlayFlag(false);
    } else if (currentT < 0) {
      setCurrentT(0);
      sound1.setCurrentTime(0);
    }
  }, [currentT]);
  function dispMinute(value) {
    var min = Math.floor(value / 60);
    if (min >= 10) return min;
    else if (min > 0) return "0" + min;
    else return "00";
  }
  function dispSecond(value) {
    var sec = (value % 60).toFixed(0);
    if (sec >= 10) return sec;
    else if (sec > 0) return "0" + sec;
    else return "00";
  }
  const dispatch = useDispatch();
  const nextSonG = () => {
    dispatch(nextSong());
  };
  return (
    <View style={styles.container}
    onTouchMove={(event)=>{
      setTouchPosition({
        locationX: event.nativeEvent.locationX.toFixed(2), 
        locationY: event.nativeEvent.locationY.toFixed(2),
        distanceX: ((windowWidth/2)-touchPosition.locationX).toFixed(2),
        distanceY: ((windowWidth/2)-touchPosition.locationY).toFixed(2),
        radian : Math.atan(touchPosition.distanceY/touchPosition.distanceX),
        angle  : (touchPosition.distanceX>0)?(touchPosition.radian*180/3.14).toFixed(2):(touchPosition.radian*180/3.14+180).toFixed(2),
    });
    }}>
      <ImageBackground source={image} resgizeMode="cover" style={styles.image}>
        <Text style={styles.text}>
          Mode : {nowModeName} {"\n"}
          Author : {nowAuthorName} {"\n"}
          SongTitle : {nowSongTitle} {"\n"}
          positionX : {touchPosition.locationX} {"\n"}
          positionY : {touchPosition.locationY} {"\n"}
          distanceX : {touchPosition.distanceX} {"\n"}
          distanceY : {touchPosition.distanceY} {"\n"}
          radian : {touchPosition.radian}  {"\n"}
          angle : {touchPosition.angle} 
        </Text>
        <Text style={styles.textTime}>
          {dispMinute(duration)}:{dispSecond(duration)} {"\n"}
          {dispMinute(currentT)}:{dispSecond(currentT)} {"\n"}
        </Text>
        <View style={styles.space}></View>

        {/* <Svg
          height={windowWidth}
          width={windowWidth}
          style={styles.volumeControl}
        >
          <Circle
            cx={windowWidth / 2}
            cy={windowWidth / 2}
            r="220"
            fill="pink"
          />
          <Circle
            cx={windowWidth / 2}
            cy={windowWidth / 2}
            r="200"
            fill="white"
            style={styles.volumeInnerCircle}
          />
          <Circle
            cx="55"
            cy={windowWidth / 2}
            r="18"
            fill="grey"
            rotation={touchPosition.angle}
            origin={windowWidth / 2, windowWidth / 2}
          />
        </Svg> */}
        <Image style={styles.gifImg} source={playFlag ? gifImg : gifImgStop} />
        <View style={styles.player}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            value={currentT}
            onSlidingComplete={(value) => {
              clearInterval(window.intervalId);
              setCurrentT(value);
              sound1.setCurrentTime(value);
              window.intervalId = setInterval(IncreaseTime, 1000);
            }}
            onValueChange={(value) => {
              clearInterval(window.intervalId);
              setCurrentT(value);
              sound1.setCurrentTime(value);
              window.intervalId = setInterval(IncreaseTime, 1000);
            }}
            minimumTrackTintColor="white"
            maximumTrackTintColor="white"
            thumbTintColor="#80f0f0ff"
          />
          <View style={styles.playerBtns}>
            <Image style={styles.smallBtn} source={beforeIcon} />
            <Image
              style={styles.smallBtn}
              source={backIcon}
              onTouchEnd={() => {
                setCurrentT((currentT) => currentT - 10);
                sound1.setCurrentTime(currentT);
              }}
            />
            <Image
              style={playFlag ? styles.hidden : styles.playBtn}
              source={playIcon}
              onTouchEnd={() => {
                clearInterval(window.intervalId);
                window.intervalId = setInterval(IncreaseTime, 1000);
                sound1.play();
                setPlayFlag(true);
                soundBack.stop();
              }}
            />
            <Image
              style={playFlag ? styles.playBtn : styles.hidden}
              source={pauseIcon}
              onTouchEnd={() => {
                clearInterval(window.intervalId);
                sound1.pause();
                setPlayFlag(false);
              }}
            />
            <Image
              style={styles.smallBtn}
              source={forwardIcon}
              onTouchEnd={() => {
                setCurrentT((currentT) => currentT + 10);
                sound1.setCurrentTime(currentT);
              }}
            />
            <Image
              style={styles.smallBtn}
              source={nextIcon}
              onTouchEnd={() => {}}
            />
          </View>
        </View>
        <Text
          style={styles.backBtn}
          onPress={() => {
            props.navigation.goBack();
            sound1.stop();
            setCurrentT(0);
          }}
        >
          CLICK TO GO BACK
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  image: {
    flex: 1,
    height: windowHeight,
  },
  text: {
    color: "#ffffffff",
    fontSize: 25,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 20,
    paddingTop: 30,
    // zIndex: 10,
  },
  item: {
    color: "#ffffffcf",
    fontSize: 32,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  player: {
    // marginTop: 300,
    position: "absolute",
    bottom: 80,
    width: "100%",
  },
  slider: {
    width: "100%",
    height: 30,
    // marginLeft: "2%",
    backgroundColor: "#00000080",
    borderRadius: 30,
  },
  playerBtns: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: "12%",
    paddingBottom: 40,
    backgroundColor: "#00000080",
  },
  playBtn: {
    width: 85,
    height: 85,
    borderRadius: 100,
    margin: 10,
  },
  smallBtn: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginTop: 20,
  },
  backBtn: {
    color: "#ffffffff",
    fontSize: 25,
    lineHeight: 50,
    textAlign: "center",
    backgroundColor: "#000000ff",
    bottom: 24,
    width: "100%",
    position: "absolute",
  },
  hidden: {
    display: "none",
  },
  gifImg: {
    position: "absolute",
    top: 99,
    width: "100%",
    height: 500,
    opacity: 0.5,
  },
  space: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 99,
    backgroundColor: "#00000080",
  },
  textTime: {
    position: "absolute",
    bottom: 230,
    right: 10,
    color: "#ffffffff",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "right",
    zIndex: 2,
  },
  volumeControl:{
    position: "absolute",
    top: 110,
    zIndex: 3,
    opacity: 0.8,
  },
});

export default PlayerScreen;
