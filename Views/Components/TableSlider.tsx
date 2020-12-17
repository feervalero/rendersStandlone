import React, { useState } from "react";
import {
  AsyncStorage,
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
  withOffset,
} from "react-native-redash";
import Cards from "../AppManagement/Cards";

import { CARDWIDTH as CARD_WIDTH } from "../AppManagement/Config";
import { Styles } from "../AppManagement/Styles";
import Card from "./Card";
import CardThumbnail from "./CardThumbnail";

const { height, width } = Dimensions.get("window");
const MARGIN = 10;
const PADDING = 10;

const CARDWIDTH = CARD_WIDTH;

const TableSlider = (props: any) => {
  const [containerHeight, setContainertHeight] = useState(height);

  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const translateX = diffClamp(
    withDecay({
      value: translation.x,
      velocity: velocity.x,
      state,
    }),
    -CARD_WIDTH * props.tables.length - 2,
    0
  );

  return (
    <>
      <View
        style={{ height: 100 }}
        onLayout={({
          nativeEvent: {
            layout: { height: h },
          },
        }) => setContainertHeight(h)}
      >
        <PanGestureHandler {...gestureHandler}>
          <Animated.View style={{ flexDirection: "row" }}>
            {props.tables.map((card, index) => {
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
                  <TouchableOpacity
                    onPress={() => props.onPressCard(card)}
                    activeOpacity={1}
                  >
                    <CardThumbnail {...card} />
                  </TouchableOpacity>
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity style={Styles.button_xs}>
                        <Text style={Styles.button_text_xs}>Editar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={Styles.button_xs}>
                        <Text style={Styles.button_text_xs}>Borrar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <Text style={{ padding: 5, textAlign: "center" }}>
                      {card.name}
                    </Text>
                  </View>
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

export default TableSlider;
