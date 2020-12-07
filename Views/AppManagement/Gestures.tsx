import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import Card from "../Components/Card";
import {
  usePanGestureHandler,
  translate,
  withOffset,
  withDecay,
  diffClamp,
} from "react-native-redash";
import Cards from "./Cards";

const { height, width } = Dimensions.get("window");
const MARGIN = 20;
const PADDING = 15;
const CARD_HEIGHT = 150;
const CARD_WIDTH = width - MARGIN * 2 - PADDING * 2 - 70;
const Gestures = () => {
  const [containerHeight, setContainertHeight] = useState(height);
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const x = diffClamp(
    withDecay({
      value: translation.x,
      velocity: velocity.x,
      state,
    }),
    -(Cards.length * CARD_WIDTH),
    0
  );

  return (
    <View
      onLayout={({
        nativeEvent: {
          layout: { height: h },
        },
      }) => setContainertHeight(h)}
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={{ flexDirection: "row" }}>
          {Cards.map((card, index) => {
            const translateX = interpolate(x, {
              inputRange: [-CARD_WIDTH * index, 0],
              outputRange: [-CARD_WIDTH * index, 0],
              extrapolate: Extrapolate.CLAMP,
            });

            return (
              <Animated.View
                key={card.id}
                style={[styles.card, { transform: [{ translateX }] }]}
              >
                <Card {...card} />
              </Animated.View>
            );
          })}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Gestures;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eee",
    padding: PADDING,
    margin: MARGIN,
    width: CARD_WIDTH,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
  },
});
