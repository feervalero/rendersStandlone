import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Dimensions,
  Animated,
  Easing,
  Modal,
} from "react-native";
import HeroCard from "../Components/HeroCard";
import { TouchableOpacity as Button } from "react-native";
import { Slider as MySlider } from "react-native";
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
import LottieView from "lottie-react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import ClockItem from "../Components/ClockItem";

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
var isRunning = false;

export default class ShuffleView extends Component {
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
        await sleep(100);
        this.nextNumber();
      } else if (this.state.numbers.length < 53) {
        this.nextNumber();
      } else {
        this.setState({ currentCard: 55 });
        isRunning = false;
        console.log("se acabo");
      }
    }

    /*if (this.state.isRunning == true) {
      
      console.log("primer if");
      if (
        this.state.numbers.indexOf(randomNumber) === -1 &&
        this.state.numbers.length < 53
      ) {
        this.state.numbers.push(randomNumber);
        this.setState({ currentCard: randomNumber });
        var newArr = this.state.usedCards;
        newArr.push(Cards[randomNumber]);

        this.setState({ usedCards: newArr });
        console.log("before");
        setTimeout(() => {
          this.nextNumber();
        }, 1000);
        console.log("after set");
      } else {
        if (this.state.numbers.length === 53) {
          this.setState({ buttonStyle: { display: "none" } });
          this.setState({ cardNumber: "" });
          this.setState({ isRunning: false });
          console.log("full");
        } else {
          this.nextNumber();
          console.log("else");
        }
      }
      this.setState({ toggle: !this.state.toggle });
    }*/
  };

  clockPress = () => {
    this.setState({ modal: this.state.modal ? false : true });
  };
  ///#endregion
  render() {
    return (
      <SafeAreaView style={[{ flex: 1 }, Styles.backgroundColor]}>
        <View style={{ position: "absolute", top: 10, left: 10 }}>
          <AntDesign name={"left"} size={24} />
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
            paddingTop: Platform.OS == "android" ? 25 : 0,
          }}
        >
          <View
            style={{
              height: SLIDERHEIGHT + (PADDING * 2 + MARGIN * 2),
            }}
          >
            <Slider Cards={this.state.usedCards} />
          </View>
          <View style={{ flex: 1, flexGrow: 1 }}>
            <ClockItem clockPress={this.clockPress} />
            <HeroCard currentCard={this.state.currentCard} />
          </View>
          <View>
            {!isRunning && !this.state.isOnPause ? (
              <>
                <Button style={Styles.button} onPress={this.play}>
                  <Text style={Styles.button_text}>
                    Start{" "}
                    <AntDesign name={"playcircleo"} size={25} color={"white"} />
                  </Text>
                </Button>
                <Button style={Styles.button}>
                  <Text style={Styles.button_text}>Exit</Text>
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
      </SafeAreaView>
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
