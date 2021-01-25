import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Modal,
  Animated,
  Image,
  Easing,
  Dimensions
} from "react-native";
import HeroCard from "../Components/HeroCard";
import { TouchableOpacity as Button } from "react-native";
import Slider from "../Components/Slider";
import Cards, { Card } from "../AppManagement/Cards";
import {
  MARGIN,
  PADDING,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SLIDERHEIGHT,
} from "../AppManagement/Config";

import { Styles } from "../AppManagement/Styles";

import { AntDesign } from "@expo/vector-icons";

import ClockItem from "../Components/ClockItem";
import ShuffleBack from "../Components/ShuffleBack";
import { State, TouchableOpacity } from "react-native-gesture-handler";
import BottomMenu from "../Components/Shared/BottomMenu";



const width = Dimensions.get("screen").width;
const height = Dimensions.get("window").height;

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
var isRunning = false;



export default class ShuffleView extends Component {

  _state = new Animated.Value(State.UNDETERMINED);
  translateX = new Animated.Value(0);
  translateY = new Animated.Value(0);
  _onGestureEvent = new Animated.Value(0);
  constructor(props: any) {
    super(props);
    this.translateX = new Animated.Value(0);
    this._onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this.translateX,
            translationY: this.translateY,
            state: this._state
          },
        },
      ],
      { useNativeDriver: true }, this.init
    );

  }
  init = () => {


  }

  state = {
    currentCard: 0,
    isRunning: false,
    numbers: [],
    toggle: false,
    usedCards: [],
    isOnPause: false,
    second: 0,
    scalePortion: new Animated.Value(1),
    modal: false,
    history: 0,
    top: new Animated.Value(-185)
  };

  ///#region component did mount
  componentDidMount = () => {
    Animated.timing(this.state.scalePortion, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    });
  };

  play = () => {
    isRunning = true;
    this.setState({ isRunning: true, isOnPause: false });
    this.nextNumber();
  };
  pause = () => {
    isRunning = false;

    this.setState({ isRunning: false, isOnPause: true });
  };
  resume = () => {
    isRunning = true;
    this.nextNumber();
    this.setState({ isRunning: true, isOnPause: false });
  };
  restart = () => {
    this.setState({
      currentCard: 0,
      isRunning: false,
      numbers: [],
      toggle: false,
      usedCards: [],
      isOnPause: false,
    });
  };
  nextNumber = async () => {
    if (isRunning === true) {
      var randomNumber = Math.floor(Math.random() * Math.floor(54) + 1);
      if (
        this.state.numbers.indexOf(randomNumber) === -1 &&
        this.state.numbers.length < 53
      ) {
        this.state.numbers.push(randomNumber);

        console.log(this.state.numbers.length);
        this.setState({ currentCard: randomNumber });
        var newArr = this.state.usedCards;
        newArr.push(Cards[randomNumber]);

        this.setState({ usedCards: newArr });
        await sleep(2000);
        this.nextNumber();
      } else if (this.state.numbers.length < 53) {
        this.nextNumber();
      } else {
        this.setState({ currentCard: 55 });
        isRunning = false;
        console.log("se acabo");
      }
    }


  };

  clockPress = () => {
    this.setState({ modal: this.state.modal ? false : true });
  };

  historyAnimation = () => {
    this.setState({ history: this.state.history ? 0 : 1 })


    Animated.timing(this.state.top, {
      toValue: (this.state.history == 1) ? -185 : -43,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();

  }

  ///#endregion
  render() {

    return (<>

      <ShuffleBack currentCard={this.state.currentCard} />
      <SafeAreaView style={[{ flex: 1, zIndex: 90, }]}>
        <View style={{ position: "absolute", top: 10, left: 10 }}>
          <AntDesign name={"left"} size={24} color={"white"} />
        </View>

        <View>
          <Modal
            visible={this.state.modal}
            transparent={true}
            animationType={"slide"}
            style={{ margin: MARGIN }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ position: "absolute", right: 10, top: 10 }}>
                  <Button
                    onPress={() => {
                      this.setState({ modal: this.state.modal ? false : true });
                    }}
                  >
                    <AntDesign name={"closecircleo"} size={48} color={"red"} />
                  </Button>
                </View>
                <Text>Modal</Text>
              </View>
            </View>
          </Modal>
        </View>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            paddingTop: Platform.OS == "android" ? 25 : 0, marginBottom: 100
          }}
        >
          <Animated.View style={[Styles.topSlider, { bottom: -35 }]} >
            <Text style={{ alignSelf: "center" }}>HISTORIAL</Text>
            <AntDesign style={{ alignSelf: "center" }} name={"caretdown"} size={24} color={"black"} />
          </Animated.View>
          <Animated.View
            style={{
              height: SLIDERHEIGHT + (PADDING * 2 + MARGIN * 2),
              backgroundColor: "red",
              position: "realtive",
              top: this.state.top
            }}
          >
            <Slider Cards={this.state.usedCards} />
          </Animated.View>
          <TouchableOpacity onPress={this.historyAnimation}>
            <Animated.View style={[Styles.topSlider]} >
              <Text style={{ alignSelf: "center" }}>HISTORIAL</Text>
              <AntDesign style={{ alignSelf: "center" }} name={"caretdown"} size={24} color={"black"} />
            </Animated.View>
          </TouchableOpacity>
          <View style={{ flex: 1, flexGrow: 1 }}>
            <ClockItem clockPress={this.clockPress} />
            <HeroCard currentCard={this.state.currentCard} />
          </View>
          <View>
            {!isRunning && !this.state.isOnPause ? (
              <>
                <Button style={Styles.button} onPress={this.play}>
                  <Text style={Styles.button_text}>
                    Iniciar
                  </Text>
                </Button>

              </>
            ) : (
                <></>
              )}
            {isRunning ? (
              <>
                <Button style={Styles.button} onPress={this.pause}>
                  <Text style={Styles.button_text}>Pause</Text>
                </Button>
                <Button style={Styles.button} onPress={this.restart}>
                  <Text style={Styles.button_text}>Restart</Text>
                </Button>
              </>
            ) : (
                <></>
              )}
            {!isRunning && this.state.isOnPause ? (
              <>
                <Button style={Styles.button} onPress={this.resume}>
                  <Text style={Styles.button_text}>Resume</Text>
                </Button>
                <Button style={Styles.button} onPress={this.restart}>
                  <Text style={Styles.button_text}>Restart</Text>
                </Button>
              </>
            ) : (
                <></>
              )}
          </View>
        </View>
        <BottomMenu></BottomMenu>
      </SafeAreaView>
    </>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: SCREEN_WIDTH - MARGIN,
    height: SCREEN_HEIGHT - MARGIN,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
