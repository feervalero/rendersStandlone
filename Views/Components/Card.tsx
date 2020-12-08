import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Cards from "../AppManagement/Cards";
import { CARD_WIDTH, RATIO, SCREEN_WIDTH } from "../AppManagement/Config";

const width = Math.floor(CARD_WIDTH);
const height = Math.floor(width * RATIO);
export default function Card(props: any) {
  return (
    <>
      <Image source={props.img} style={{ width, height }} />
    </>
  );
}

const styles = StyleSheet.create({});
