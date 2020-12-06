import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Cards from "../AppManagement/Cards";
export default function Card(props) {
  return (
    <>
      <Image source={props.img} />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "cyan",
    padding: 15,
    margin: 20,
    height: 150,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
  },
});
