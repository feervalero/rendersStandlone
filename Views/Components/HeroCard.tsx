import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Cards from "../AppManagement/Cards";
import { PADDING } from "../AppManagement/Config";

export default class HeroCard extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Image
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: PADDING,
          }}
          source={Cards[this.props.currentCard].img}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
