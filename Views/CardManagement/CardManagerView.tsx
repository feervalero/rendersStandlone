import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity as Button,
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
        name: "Doble Gallo",
      },
    ],
  };

  render() {
    return (
      <>
        <View>
          <Text> Select your card from {this.state.myCards.length}</Text>
        </View>
        <View>
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
