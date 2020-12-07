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
import { CARD_WIDTH } from "./Config";

const { height, width } = Dimensions.get("window");
const MARGIN = 10;
const PADDING = 10;

const CARDWIDTH = CARD_WIDTH;
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
    -(Cards.length * CARDWIDTH),
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
              inputRange: [-CARDWIDTH * index, 0],
              outputRange: [-(CARDWIDTH + 40) * index, 0],
              extrapolate: Extrapolate.CLAMP,
            });
            /*Cambio en MAC */
            /*Cambio en windows */
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
    backgroundColor: "white",
    padding: PADDING,
    margin: MARGIN,
    width: CARD_WIDTH + MARGIN + PADDING,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
  },
});
