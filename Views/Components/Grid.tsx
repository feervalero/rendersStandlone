import React from "react";
import { View, Text, Image } from "react-native";
import {
  COLUMNS,
  getpostion,
  SCREEN_WIDTH,
  _CARDHEIGHT,
  _CARDWIDTH,
} from "../AppManagement/Config";

export default function Grid(props) {
  return (
    <>
      <View>
        {props.Cards.map((card, index) => {
          console.log(SCREEN_WIDTH / (getpostion(props.Cards, card) * COLUMNS));
          return (
            <Image
              source={card.img}
              style={{ width: _CARDWIDTH, height: _CARDHEIGHT }}
            />
          );
        })}
      </View>
    </>
  );
}
