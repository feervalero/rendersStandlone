import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity as Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Cards, { Card } from "../AppManagement/Cards";
import Slider2 from "../Components/Slider2";

export default class SelectDouble extends Component {
  state = { card: this.props.route.params.card };
  selectDouble = (card: any) => {
    var newArray = this.state.card;
    newArray.selectedDouble = card;
    this.setState({ card: newArray });
  };

  onPressCard = (card: Card) => {
    this.selectDouble(card.value);
    this.props.navigation.navigate("CardManagerScreen.SaveOrEdit", {
      card: this.state.card,
    });
  };

  render() {
    return (
      <>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View>
            {/*
          <ScrollView>
            <Button onPress={() => this.selectDouble("1")}>
              <Text>1</Text>
            </Button>
            <Button onPress={() => this.selectDouble("2")}>
              <Text>2</Text>
            </Button>
            <Button onPress={() => this.selectDouble("3")}>
              <Text>3</Text>
            </Button>
            <Button onPress={() => this.selectDouble("4")}>
              <Text>4</Text>
            </Button>
            <Button onPress={() => this.selectDouble("5")}>
              <Text>5</Text>
            </Button>
            <Button onPress={() => this.selectDouble("17")}>
              <Text>17</Text>
            </Button>
            <Button onPress={() => this.selectDouble("8")}>
              <Text>8</Text>
            </Button>
            <Button onPress={() => this.selectDouble("9")}>
              <Text>9</Text>
            </Button>
        </ScrollView>*/}
            <Slider2 Cards={Cards} onPressCard={this.onPressCard} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({});
