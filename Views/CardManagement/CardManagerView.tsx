import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity as Button,
  AsyncStorage,
} from "react-native";
import TableSlider from "../Components/TableSlider";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Card } from "../AppManagement/Cards";

class CardManagerView extends Component {
  state = {
    tables: [],
  };

  componentDidMount = async () => {
    /*AsyncStorage.removeItem("Tables");
    AsyncStorage.setItem(
      "Tables",
      JSON.stringify({
        tables: [
          {
            "id": 1,
            name: "Doble Rana en posito",
            cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            active: true,
            cardType:0
          },
          {
            id: 2,
            name: "Doble Gallo en Esquinas",
            cards: [
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
            ],
            active: true,
            cardType:2
          },
        ],
      })
    );*/

    try {
      const value = await AsyncStorage.getItem("Tables");
      const data = JSON.parse(value);

      if (value !== null) {
        this.setState({ myCards: data.tables });
        this.setState({ tables: data.tables });
      } else {
      }
    } catch (error) {}
  };
  onPressCard = (card: Card) => {
    console.log("click");
  };
  render() {
    if (this.state.myCards) {
      return (
        <>
          <View>
            <Text> Select your card from {this.state.myCards.length}</Text>
          </View>
          <TableSlider
            tables={this.state.tables}
            onPressCard={this.onPressCard}
          />
          <View>
            {
              <ScrollView horizontal={true}>
                {this.state.myCards.map((item) => (
                  <View
                    style={{
                      margin: 5,
                      padding: 5,
                      borderLeftColor: "black",
                      borderLeftWidth: 2,
                    }}
                  >
                    <Text>{item.name}</Text>
                  </View>
                ))}
              </ScrollView>
            }
          </View>
          <View>
            <Button
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("CardManagerScreen.Style");
              }}
            >
              <Text>Crear Nueva</Text>
            </Button>
          </View>
          <View>
            <Button style={styles.button}>
              <Text>Editar</Text>
            </Button>
            <Button style={styles.button}>
              <Text>Borrar</Text>
            </Button>
          </View>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default CardManagerView;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
});
