import React, { useState } from "react";
import {
  Dimensions,
  Image,
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

import { CARD_WIDTH_5, RATIO } from "../AppManagement/Config";
import Card from "./Card";

const { height, width } = Dimensions.get("window");
const MARGIN = 10;
const PADDING = 10;

const CARDWIDTH = CARD_WIDTH_5;
const width2 = Math.floor(CARD_WIDTH_5);
const height2 = Math.floor(CARD_WIDTH_5 * RATIO);
const Slider2 = (props: any) => {
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
    (-props.Cards.length / 5) * height2 + height,
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
        <PanGestureHandler {...gestureHandler}>
          <Animated.View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {props.Cards.map((card, index) => {
              const translateY = interpolate(y, {
                inputRange: [-CARDWIDTH * index, 0],
                outputRange: [-(CARDWIDTH + 40) * index, 0],
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
                    { transform: [{ translateY: translateY }], zIndex },
                  ]}
                >
                  <TouchableOpacity onPress={() => props.onPressCard(card)}>
                    <Image
                      source={card.img}
                      style={{ width: width2, height: height2 }}
                    />
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
    width: CARD_WIDTH_5,
    borderColor: "gray",
    borderWidth: 1,
    height: CARD_WIDTH_5 * RATIO,
  },
});

export default Slider2;
