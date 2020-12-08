import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Picker,
  TouchableOpacity as Button,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import HeroTable from "../Components/HeroTable";

export default class SelectStyle extends Component {
  state = {
    selector: 0,
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
    const currentCard = this.state.cards[this.state.selector].cardArray;

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 25,
            paddingVertical: 15,
          }}
        >
          {/*<ScrollView horizontal={true}>
            {this.state.cards.map((card) => (
              <Button style={styles.button} onPress={() => this.selector(card)}>
                <Text>{card.cardName}</Text>
              </Button>
            ))}
          </ScrollView>*/}
          <View style={styles.arrowContainer}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ selector: this.state.selector - 1 }); //TODO: revisar el limite del array
              }}
            >
              <Text style={styles.arrow}>{`<`}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "HelveticaNeue-Bold",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {this.state.cards[this.state.selector].cardName}
            </Text>
          </View>
          <View style={styles.arrowContainer}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ selector: this.state.selector + 1 }); //TODO: revisar el limite del array
              }}
            >
              <Text style={styles.arrow}>{`>`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*<Picker
        
          selectedValue={this.state.selectedValue}
          style={{ padding: 0, backgroundColor: "red", margin: 0 }}
        >
          <Picker.Item label="fer 1" value="fer" />
          <Picker.Item label="fer 2" value="fer2" />
        </Picker>*/}
        <View style={{ flex: 1 }}>
          <HeroTable card={currentCard} />
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
            <Text style={styles.buttonText}>Siguiente</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "black",
    borderRadius: 20,
    margin: 15,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  arrow: {
    fontSize: 40,
    fontFamily: "Optima", //TODO CAMBIAR EL FONT pagina https://github.com/react-native-training/react-native-fonts
    lineHeight: 40,
  },
  arrowContainer: {
    marginHorizontal: 5,
  },
});
