import { AntDesign } from "@expo/vector-icons";
import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity as Button,
  Image,
} from "react-native";
import { PanGestureHandler, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Animated, { add, cond, interpolate, set } from "react-native-reanimated";
import { between, diffClamp, get, translate, usePanGestureHandler, withDecay, withOffset } from "react-native-redash";
import Cards from "../AppManagement/Cards";
import { RATIO, SCREEN_WIDTH } from "../AppManagement/Config";


import { Styles } from "../AppManagement/Styles";

import SliderCard from "../Components/SliderCard";


export default class SelectDouble extends Component {
  state = { double: [7] };


  render() {



    return (
      <>
        <View style={[Styles.viewContainer]}>
          <View style={[Styles.topBar, { backgroundColor: "#4D1A88", shadowColor: "black", shadowOpacity: 5, shadowRadius: 5 }]}>
            <View>
              <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                <AntDesign name="left" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ marginVertical: 20 }}><Text style={[Styles.font40]}>Escoge tu doble</Text></View>

            <Slider {...this} />

          </View>
        </View>
      </>
    );
  }
}

const Slider = (props: any) => {
  const [CardId, setCardId] = useState(1);
  const CARDWIDTH = (SCREEN_WIDTH / 3) + 20;
  const LEFTBOUNDARY = -(CARDWIDTH * Cards.length) + SCREEN_WIDTH;
  const { gestureHandler, translation, state, velocity } = usePanGestureHandler();
  const translateX = diffClamp(withDecay({ value: translation.x, velocity: velocity.x, state }), LEFTBOUNDARY, 0);
  const isDissapearing = -CARDWIDTH;
  const isLeft = 0;
  const isRight = SCREEN_WIDTH;
  const isAppearing = SCREEN_WIDTH;

  return (
    <>
      <View style={{ marginTop: 20 }}>
        <PanGestureHandler {...gestureHandler}>
          <Animated.View style={{ flexDirection: "row" }} >
            {Cards.map((card, index) => {
              const positionX = add(translateX, index * CARDWIDTH);
              const scale = interpolate(positionX, {
                inputRange: [isDissapearing, (SCREEN_WIDTH / 2) - (CARDWIDTH / 2), isAppearing],
                outputRange: [0.5, 1.2, 0.5]
              })
              const opacity = interpolate(positionX, {
                inputRange: [isDissapearing, (SCREEN_WIDTH / 2) - (CARDWIDTH / 2), isAppearing],
                outputRange: [.5, 1, .5]
              })
              const zIndex = interpolate(positionX, {
                inputRange: [isDissapearing, (SCREEN_WIDTH / 2) - (CARDWIDTH / 2), isAppearing],
                outputRange: [0, 1, 0]
              })
              return (
                <Animated.View key={index} style={[{ transform: [{ translateX }, { scale }] }, { opacity, zIndex }]}>
                  <SliderCard card={card} {...props} />
                </Animated.View>
              )
            }
            )}
          </Animated.View>
        </PanGestureHandler>

      </View>
      <View>
        <Text>{CardId.toString()}</Text>
      </View>
    </>
  )

};


const styles = StyleSheet.create({});
