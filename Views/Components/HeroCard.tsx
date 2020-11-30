import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class HeroCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heroNumber}>{this.props.currentCard}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heroNumber: {
    fontSize: 70,
    fontWeight: "bold",
    margin: 100,
    textAlign: "center",
  },
});
