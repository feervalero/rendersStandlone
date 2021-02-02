import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Cards, { Card } from "../AppManagement/Cards";
import Grid from "../Components/Grid";

export default class GridSort extends Component {
  render() {
    return (
      <>
        <Grid Cards={Cards} />
      </>
    );
  }
}

const styles = StyleSheet.create({});

function Card2(card: Card) {

  return (
    <View>
      <Text>{card.name}</Text>
    </View>
  );
}
