import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Selector from "../Components/Selector";

export default class TableSelector extends Component {
  render() {
    return (
      <View>
        <Text>Select you tables:</Text>
        <Selector />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
