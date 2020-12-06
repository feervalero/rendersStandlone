import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class HeroTable extends Component {
  render() {
    return (
      <>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
          }}
        >
          <View
            style={{
              padding: "10%",
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              backgroundColor: "skyblue",
              justifyContent: "center",
            }}
          >
            {this.props.card.map((item) => (
              <View
                style={
                  item.toString() == "0" ? styles.card : styles.cardHighlight
                }
              >
                <Text style={{ fontSize: 20 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </>
    );
  }
}

export default HeroTable;

const styles = StyleSheet.create({
  card: {
    width: 70,
    height: 90,

    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHighlight: {
    width: 70,
    height: 90,

    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
