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

const { height } = Dimensions.get("window");
const MARGIN = 20;
const CARD_HEIGHT = 150;
const Gestures = () => {
  const [containerHeight, setContainertHeight] = useState(height);
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const y = diffClamp(
    withDecay({
      value: translation.y,
      velocity: velocity.y,
      state,
    }),
    -(Cards.length * CARD_HEIGHT),
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
        <Animated.View style={{}}>
          {Cards.map((card, index) => {
            const translateY = interpolate(y, {
              inputRange: [-CARD_HEIGHT * index, 0],
              outputRange: [(-CARD_HEIGHT - 40) * index, 0],
              extrapolate: Extrapolate.CLAMP,
            });

            const positionY = add(y, index * CARD_HEIGHT);

            return (
              <Animated.View
                key={card.id}
                style={[styles.card, { transform: [{ translateY }] }]}
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
    backgroundColor: "cyan",
    padding: 15,
    margin: MARGIN,
    height: CARD_HEIGHT,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
  },
});
