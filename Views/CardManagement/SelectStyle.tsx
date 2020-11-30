import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Picker,
  TouchableOpacity as Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HeroTable from "../Components/HeroTable";

export default class SelectStyle extends Component {
  state = {
    cards: [
      {
        cardName: "Esquina Izquierda",
        cardArray: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        selector: "A",
      },
      {
        cardName: "Esquina Derecha",
        cardArray: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        selector: "B",
      },
      {
        cardName: "Posito A",
        cardArray: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        selector: "C",
      },
      {
        cardName: "Posito B",
        cardArray: [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        selector: "D",
      },
      {
        cardName: "Posito C",
        cardArray: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        selector: "E",
      },
      {
        cardName: "Posito D",
        cardArray: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        selector: "F",
      },
    ],
    selectedValue: "fer2",
    selectedCard: {
      cardName: "Posito A",
      cardArray: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      selector: "C",
    },
  };
  selector = (card) => {
    this.setState({ selectedCard: card });
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{}}>
          <ScrollView horizontal={true}>
            {this.state.cards.map((card) => (
              <Button style={styles.button} onPress={() => this.selector(card)}>
                <Text>{card.cardName}</Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        {/*<Picker
        
          selectedValue={this.state.selectedValue}
          style={{ padding: 0, backgroundColor: "red", margin: 0 }}
        >
          <Picker.Item label="fer 1" value="fer" />
          <Picker.Item label="fer 2" value="fer2" />
        </Picker>*/}
        <View style={{ flex: 1 }}>
          <HeroTable card={this.state.selectedCard.cardArray} />
        </View>
        <View style={{}}>
          <Button
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("CardManagerScreen.SelectDouble", {
                card: this.state.selectedCard,
              });
            }}
          >
            <Text>Next</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    width: 260,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
});
