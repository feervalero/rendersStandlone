import React from "react";
import { View, Text, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { translate, useGestureHandler, usePanGestureHandler, withDecay } from "react-native-redash";
import Cards from "../AppManagement/Cards";
import {
  COLUMNS,
  getpostion,

  _CARDHEIGHT,
  _CARDWIDTH,
} from "../AppManagement/Config";

export default function Grid(props) {
  let row: number = -1;

  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();


  const translateY = withDecay({ value: translation.y, velocity: velocity.y, state });
  return (
    <>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={{ transform: [{ translateY }], }} >

          {props.Cards.map((card, index) => {
            let cartaX = getpostion(props.Cards, card);
            let colTransX = (cartaX % COLUMNS) * _CARDWIDTH;

            let col = index % COLUMNS

            if (col == 0) row = row + 1;

            let colTransY = row * _CARDHEIGHT;

            return (
              <Image
                key={index}
                source={card.img}
                style={{

                  position: "absolute",
                  width: _CARDWIDTH,
                  height: _CARDHEIGHT,
                  left: colTransX,
                  top: colTransY
                }}
              />
            );
          })}
        </Animated.View>
      </PanGestureHandler>
    </>
  );
}
