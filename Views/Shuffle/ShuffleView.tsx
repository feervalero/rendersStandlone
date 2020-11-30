import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Carrousel from "../Components/Carrousel";
import HeroCard from "../Components/HeroCard";
import { TouchableOpacity as Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default class ShuffleView extends Component {
  state = {
    currentCard: 99,
    isRunning: false,
    numbers: [],
    toggle: false,
    usedCards: [],
    isOnPause: false,
  };

  ///#region component did mount
  componentDidMount = () => {};

  play = () => {
    this.nextNumber();
    this.setState({ isRunning: true, isOnPause: false });
  };
  pause = () => {
    this.nextNumber();
    this.setState({ isRunning: false, isOnPause: true });
  };
  resume = () => {
    this.nextNumber();
    this.setState({ isRunning: true, isOnPause: false });
  };
  restart = () => {
    this.setState({
      currentCard: 99,
      isRunning: false,
      numbers: [],
      toggle: false,
      usedCards: [],
      isOnPause: false,
    });
  };
  nextNumber = () => {
    setTimeout(() => {
      if (this.state.isRunning == true) {
        var randomNumber = Math.floor(Math.random() * Math.floor(54) + 1);
        if (
          this.state.numbers.indexOf(randomNumber) === -1 &&
          this.state.numbers.length < 53
        ) {
          this.state.numbers.push(randomNumber);
          this.setState({ currentCard: randomNumber });
          var newArr = this.state.usedCards;
          newArr.push(randomNumber);

          this.setState({ usedCards: newArr });
          this.nextNumber();
        } else {
          if (this.state.numbers.length === 53) {
            console.log("llegue aqui with" + this.state.numbers.length);
            this.setState({ buttonStyle: { display: "none" } });
            this.setState({ cardNumber: "" });
            this.setState({ isRunning: false });
          } else {
            this.nextNumber();
          }
        }
        this.setState({ toggle: !this.state.toggle });
      }
    }, 1000);
  };

  ///#endregion
  render() {
    return (
      <View>
        <Carrousel cardHistory={this.state.usedCards} />
        <View>
          <HeroCard currentCard={this.state.currentCard} />
        </View>
        <View>
          {!this.state.isRunning && !this.state.isOnPause ? (
            <>
              <Button style={styles.button} onPress={this.play}>
                <Text>Start</Text>
              </Button>
            </>
          ) : (
            <></>
          )}
          {this.state.isRunning ? (
            <>
              <Button style={styles.button} onPress={this.pause}>
                <Text>Pause</Text>
              </Button>
              <Button style={styles.button} onPress={this.restart}>
                <Text>Restart</Text>
              </Button>
            </>
          ) : (
            <></>
          )}
          {!this.state.isRunning && this.state.isOnPause ? (
            <>
              <Button style={styles.button} onPress={this.resume}>
                <Text>Resume</Text>
              </Button>
            </>
          ) : (
            <></>
          )}
        </View>
        <Text>isRunning:{this.state.isRunning.toString()}</Text>
        <Text>length:{this.state.numbers.length.toString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
});
