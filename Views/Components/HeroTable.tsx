import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Cards from "../AppManagement/Cards";
import { banner, buttonRow, RATIO, SCREEN_HEIGHT, topBar } from "../AppManagement/Config";
const availableHeight = SCREEN_HEIGHT - topBar - banner - buttonRow - buttonRow;
const CARDWIDTH = ((availableHeight / RATIO) - 25) / 4;
class HeroTable extends Component {

  render() {
    return (
      <>
        {this.props.card.map((item) => (
          <View>
            <Image
              source={Cards[item].img}
              style={{ width: CARDWIDTH, height: CARDWIDTH * RATIO, marginStart: 5, marginBottom: 5, borderRadius: 5 }}
            />
          </View>
        ))}

      </>
    );
  }
}

export default HeroTable;

