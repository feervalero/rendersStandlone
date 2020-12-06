import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.props.navigation.navigate("ShuffleScreen");
          }}
          title="Barajear"
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate("CardManagerScreen.View");
          }}
          title="Tablas"
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate("Play.Selector");
          }}
          title="Play"
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate("Gestures");
          }}
          title="Gestures"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
