import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Cards from "../AppManagement/Cards";

export default class HeroCard extends Component {
  render() {
    return (
      <View style={{ alignItems: "center", margin: 10 }}>
        <Image source={Cards[this.props.currentCard].img} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heroNumber: {
    fontSize: 70,
    fontWeight: "bold",
    margin: 10,
  },
});
