import React, { Component } from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Cards from "../AppManagement/Cards";
import { RATIO } from "../AppManagement/Config";


class HeroTable extends Component {

  render() {
    const availableHeight = parseInt(this.props.availableHeight);
    const CARDWIDTH = ((availableHeight / RATIO) - 25) / 4;

    return (

      this.props.card.map((item, index) => (
        <TouchableOpacity onPressOut={() => this.props.cardClicked(item, index)}>
          <View key={index}>
            <Image
              source={Cards[item - 1].img}
              style={{ width: CARDWIDTH, height: CARDWIDTH * RATIO, marginStart: 5, marginBottom: 5, borderRadius: 5 }}
            />
          </View>
        </TouchableOpacity>
      ))

    );
  }
}

export default HeroTable;

