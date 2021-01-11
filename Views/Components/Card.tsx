import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Cards from "../AppManagement/Cards";
import {
  CARD_WIDTH,
  MARGIN,
  PADDING,
  RATIO,
  SCREEN_WIDTH,
  SLIDERHEIGHT,
} from "../AppManagement/Config";

const height = Math.floor(SLIDERHEIGHT);
const width = Math.floor(SLIDERHEIGHT / RATIO);
export default function Card(props: any) {
  return (
    <>
      <Image source={props.img} style={{ width, height }} />
    </>
  );
}

const styles = StyleSheet.create({});
