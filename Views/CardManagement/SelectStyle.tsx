import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Cards from "../AppManagement/Cards";
import { RATIO, SCREEN_WIDTH } from "../AppManagement/Config";
import { Styles } from "../AppManagement/Styles";


const CARDWIDTH = (SCREEN_WIDTH - 80 - 25) / 4;
export default class SelectStyle extends Component {
  state = {
    selector: 0,
    indicator: 0,
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
  selector = (card: any) => {
    this.setState({ selectedCard: card });
  };
  scrolled = (event: any) => {
    this.setState({ indicator: event.nativeEvent.targetContentOffset.x / (event.nativeEvent.contentSize.width / this.state.cards.length) });
  }

  render() {
    return (
      <View style={[Styles.viewContainer]}>
        <View style={[Styles.topBar]}>
          <View>
            <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
              <AntDesign name="left" size={25} color="white" />
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1 }}><Text style={{ color: "white", fontFamily: "Lapsus", fontSize: 25, textAlign: "center" }}></Text></View>
          <View>
            <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
              <AntDesign name="setting" size={25} color="white" />
            </TouchableOpacity>

          </View>
        </View>
        <View style={{ marginVertical: 10 }}><Text style={Styles.font30}>Escoge tu tipo de tabla</Text></View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch", }}>
          <View style={{ width: 40, alignItems: "center", alignContent: "center", justifyContent: "center" }}><AntDesign name="left" size={25} color="white" /></View>
          <ScrollView horizontal={true} pagingEnabled={true} onScrollEndDrag={this.scrolled} ref={(ref) => { this.setState({ scroll: ref }) }}>
            {this.state.cards.map((table, tableIndex) => (
              <View
                key={tableIndex}
                style={{

                  borderRadius: 5, flexDirection: "row", flexWrap: "wrap", paddingTop: 5, width: SCREEN_WIDTH - 80, height: (SCREEN_WIDTH - 90) * RATIO, shadowColor: "#4D1A88",
                  elevation: 10,
                  shadowOpacity: 100,
                  shadowOffset: { height: 2, width: 2 },
                }}>
                {table.cardArray.map((card, cardIndex) => (
                  <TouchableOpacity key={cardIndex} onPressOut={() => {
                    this.props.navigation.navigate("CardManagerScreen.SaveOrEdit", {
                      card: this.state.cards[this.state.indicator],
                      selectedDouble: this.props.route.params.double + 1,
                    })
                  }}>
                    <View>

                      <View style={{ width: CARDWIDTH, height: CARDWIDTH * RATIO, borderRadius: 5, marginStart: 5, marginBottom: 5, backgroundColor: "#4D1A88", position: "absolute" }}></View>
                      <Image
                        source={(card == 1) ? Cards[this.props.route.params.double].img : ""}
                        style={{ width: CARDWIDTH, height: CARDWIDTH * RATIO, borderRadius: 5, marginStart: 5, marginBottom: 5 }}
                      />

                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </ScrollView>
          <View style={{ width: 40, alignItems: "center", alignContent: "center", justifyContent: "center" }}><AntDesign name="right" size={25} color="white" /></View>
        </View>
      </View >
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
