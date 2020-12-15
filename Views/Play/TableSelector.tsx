import React, { Component } from "react";
import { Text, StyleSheet, View, AsyncStorage } from "react-native";
import Cards, { Card } from "../AppManagement/Cards";
import Selector from "../Components/Selector";
import TableSlider from "../Components/TableSlider";

export default class TableSelector extends Component {
  state = { tables: [] };
  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem("Tables");
      const data = JSON.parse(value);
      this.setState({ tables: data.tables });
      return data;
      if (value !== null) {
      } else {
      }
    } catch (error) {}
  };

  onPressCard = (card: Card) => {
    console.log("click");
  };

  render() {
    return (
      <View>
        <Text>Select you tables:</Text>
        <TableSlider
          tables={this.state.tables}
          onPressCard={this.onPressCard}
        />
        {/*<Selector />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
