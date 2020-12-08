import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity as Button,
  AsyncStorage,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

class CardManagerView extends Component {
  state = {
    myCards: [
      {
        cardId: 1,
        cards: [4, 5, 6, 4, 23, 4, 5, 12, 48, 39, 16, 15, 44, 55, 11, 22],
        name: "Doble Rana",
      },
      {
        cardId: 2,
        cards: [14, 15, 16, 11, 33, 34, 35, 22, 58, 49, 26, 25, 2, 5, 1, 2],
        name: "Doble Galla",
      },
    ],
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
      } else {
      }
    } catch (error) {}
  };

  render() {
    return (
      <>
        <View>
          <Text> Select your card from {this.state.myCards.length}</Text>
        </View>
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
