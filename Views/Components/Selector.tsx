import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity as Button,
  Animated,
} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import Minicard from "./Minicard";

export default class Selector extends Component {
  state = {
    Xpos: 0,
    AH: 220,
    tables: [
      {
        name: "Doble rana en esquina",
        table: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      },
      {
        name: "Doble gallo en posito",
        table: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 21, 23, 24, 25, 26],
      },
      {
        name: "Doble valiente en posito",
        table: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      },
    ],
    cards: [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
    ],
    cursor: [0],
  };

  constructor(props: any) {
    super(props);

    this.state.Xpos = new Animated.Value(0);

    this.onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this.state.Xpos,
          },
        },
      ],
      { listener: (event) => this.moving(event) }
    );
    this.state.AH = new Animated.Value(0);
  }

  moving = (event: PanGestureHandlerGestureEvent) => {
    console.log(event.nativeEvent.translationX);
    if (event.nativeEvent.translationX < -100) {
      this._goLeft();
    } else if (event.nativeEvent.translationX > 100) {
      this._goRight();
    }
  };

  onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if ((event.nativeEvent.state = State.END)) {
      Animated.timing(this.state.Xpos, {
        toValue: 0,
        duration: 500,
      }).start();
    }
  };

  animate = () => {
    Animated.timing(this.state.Xpos, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  _goLeft = () => {
    Animated.timing(this.state.AH, {
      toValue: 2,
      duration: 1500,
    }).start();
  };

  _goRight = () => {
    this.setState({ cursor: parseInt(this.state.cursor) + 1 });
  };

  render() {
    var interpolateAH = this.state.Xpos.interpolate({
      inputRange: [-100, -50, 0],
      outputRange: [140, 180, 220],
    });

    return (
      <>
        <ScrollView horizontal={true}>
          <View style={styles.aThirdCard}>
            <Text>{this.state.cards[3].number}</Text>
          </View>
          <View style={styles.aSecondCard}>
            <Text>{this.state.cards[4].number}</Text>
          </View>
          <PanGestureHandler
            onGestureEvent={this.onGestureEvent}
            onHandlerStateChange={this.onHandlerStateChange}
          >
            <Animated.View
              style={[
                styles.mainCard,
                { height: interpolateAH },
                {
                  transform: [{ translateX: this.state.Xpos }],
                },
              ]}
            >
              <Text>
                {this.state.cards[parseInt(this.state.cursor)].number}
              </Text>
            </Animated.View>
          </PanGestureHandler>
          <Animated.View style={[styles.bSecondCard, { height: 180 }]}>
            <Text>
              {this.state.cards[parseInt(this.state.cursor) + 1].number}
            </Text>
          </Animated.View>
          <View style={styles.bThirdCard}>
            <Text>{this.state.cards[2].number}</Text>
          </View>
        </ScrollView>

        <View>
          <Button
            onPress={this.animate}
            style={{ padding: 30, backgroundColor: "gray" }}
          >
            <Text>PLAY</Text>
          </Button>

          <Button
            onPress={this._goLeft}
            style={{ padding: 30, backgroundColor: "blue" }}
          >
            <Text>LEFT</Text>
          </Button>
          <Button
            onPress={this._goRight}
            style={{ padding: 30, backgroundColor: "gray" }}
          >
            <Text>RIGHT</Text>
          </Button>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: "#FF0000FF",
    marginLeft: -40,
    height: 220,
    width: 130,
    zIndex: 800,
  },
  bSecondCard: {
    backgroundColor: "#0000FFAA",

    width: 100,
    marginLeft: -40,
    marginTop: 20,
    zIndex: 700,
  },
  bThirdCard: {
    backgroundColor: "#00FF00AA",
    height: 140,
    width: 70,
    marginLeft: -40,
    marginTop: 40,
    zIndex: 600,
  },
  aSecondCard: {
    backgroundColor: "#0000FFAA",
    height: 180,
    width: 100,
    marginLeft: -40,
    marginTop: 20,
    zIndex: 700,
  },
  aThirdCard: {
    backgroundColor: "#00FF00AA",
    height: 140,
    width: 70,
    marginLeft: 30,
    marginTop: 40,
    zIndex: 600,
  },
});
