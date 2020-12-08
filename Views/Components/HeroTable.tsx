import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Cards from "../AppManagement/Cards";

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
              paddingHorizontal: "10%",
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",

              justifyContent: "center",
            }}
          >
            {this.props.card.map((item) => (
              <View
                style={
                  item.toString() == "0" ? styles.card : styles.cardHighlight
                }
              >
                <Image
                  source={Cards[item].img}
                  style={{ height: 100, width: 60 }}
                />
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
    backgroundColor: "black",
  },
});
