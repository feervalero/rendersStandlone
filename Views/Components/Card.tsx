import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import {
  RATIO,

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
