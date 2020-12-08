import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import {
  diffClamp,
  usePanGestureHandler,
  withDecay,
} from "react-native-redash";
import Cards, { Card as CARDS } from "../AppManagement/Cards";
import { CARD_WIDTH } from "../AppManagement/Config";
import Card from "./Card";

const { height, width } = Dimensions.get("window");
const MARGIN = 10;
const PADDING = 10;

const CARDWIDTH = CARD_WIDTH;

const Slider = (props: any) => {
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
    -(props.Cards.length * CARDWIDTH),
    0
  );
  return (
    <>
      <View
        onLayout={({
          nativeEvent: {
            layout: { height: h },
          },
        }) => setContainertHeight(h)}
      >
        <PanGestureHandler {...gestureHandler} minDeltaX={-1000}>
          <Animated.View style={{ flexDirection: "row" }}>
            {props.Cards.map((card, index) => {
              const translateX = interpolate(x, {
                inputRange: [-CARDWIDTH * index, 0],
                outputRange: [-(CARDWIDTH + 40) * index, 0],
                extrapolate: Extrapolate.CLAMP,
              });
              /*Cambio en MAC */
              /*Cambio en windows */
              return (
                <Animated.View
                  key={card.value}
                  style={[styles.card, { transform: [{ translateX }] }]}
                >
                  <Card {...card} />
                </Animated.View>
              );
            })}
          </Animated.View>
        </PanGestureHandler>
      </View>
    </>
  );
};

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

export default Slider;
