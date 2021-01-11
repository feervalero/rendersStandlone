import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import {
  diffClamp,
  usePanGestureHandler,
  withDecay,
} from "react-native-redash";

import {
  CARD_WIDTH,
  MARGIN,
  PADDING,
  RATIO,
  SLIDERHEIGHT,
} from "../AppManagement/Config";
import Card from "./Card";

const { height, width } = Dimensions.get("window");

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
        style={{ flex: 1 }}
        onLayout={({
          nativeEvent: {
            layout: { height: h },
          },
        }) => setContainertHeight(h)}
      >
        <PanGestureHandler {...gestureHandler}>
          <Animated.View style={{ flexDirection: "row" }}>
            {props.Cards.map((card, index) => {
              const translateX = interpolate(x, {
                inputRange: [-CARDWIDTH * index, 0],
                outputRange: [-CARDWIDTH * index, 0],
                extrapolate: Extrapolate.CLAMP,
              });
              /*Cambio en MAC */
              /*Cambio en windows */
              const zIndex = index * 10;
              return (
                <Animated.View
                  key={card.value}
                  style={[
                    styles.card,
                    { transform: [{ translateX: translateX }], zIndex },
                  ]}
                >
                  <TouchableOpacity onPress={() => props.onPressCard(card)}>
                    <Card {...card} />
                  </TouchableOpacity>
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
    margin: MARGIN,
    padding: PADDING - 2,
    width: SLIDERHEIGHT / RATIO + PADDING + MARGIN - 2,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: PADDING - 2,
  },
});

export default Slider;
