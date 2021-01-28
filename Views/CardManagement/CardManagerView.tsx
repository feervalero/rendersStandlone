import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import TableSlider from "../Components/TableSlider";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Card } from "../AppManagement/Cards";
import { Styles } from "../AppManagement/Styles";
import TablesGrid from "../Components/Shared/TablesGrid";
import { AntDesign } from "@expo/vector-icons";

class CardManagerView extends Component {
  state = {
    tables: [],
  };

  componentDidMount = async () => {
    /*  AsyncStorage.removeItem("Tables");
      AsyncStorage.setItem(
        "Tables",
        JSON.stringify({
          tables: [
            {
              "id": 1,
              name: "Doble Bandolon",
              cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              active: true,
              cardType: 2, double: 12
            },
            {
              id: 2,
              name: "Doble Barril",
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
              cardType: 2, double: 13
            },
            {
              id: 3,
              name: "Doble Corazon",
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
              cardType: 2, double: 15
            },
            {
              id: 4,
              name: "Doble Bandera",
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
              cardType: 2, double: 11
            },
            {
              id: 5,
              name: "Doble Bota",
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
              cardType: 2, double: 1
            }
          ],
        })
      );
  */
    try {
      const value = await AsyncStorage.getItem("Tables");
      const data = JSON.parse(value);

      if (value !== null) {
        this.setState({ myCards: data.tables });
        this.setState({ tables: data.tables });
      } else {
      }
    } catch (error) { }
  };
  onPressCard = (card: Card) => {
    console.log("click");
  };
  render() {
    if (this.state.myCards) {
      return (
        <>
          <View style={Styles.viewContainer}>
            <View style={Styles.topBar}>
              <View>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                  <AntDesign name="left" size={25} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <ScrollView>
                <TablesGrid tables={this.state.tables}
                  onPressCard={this.onPressCard} />
              </ScrollView>
            </View>
            <View style={{ margin: 20 }}>
              <TouchableOpacity
                style={{ height: 40, borderWidth: 1, borderRadius: 5, borderColor: "white", justifyContent: "center", backgroundColor: "#FFA700" }}
                onPress={() => {
                  this.props.navigation.navigate("CardManagerScreen.SelectDouble");
                }}
              >
                <Text style={{ fontSize: 30, color: "white", fontFamily: "Lapsus", textAlign: "center" }}>NUEVA TABLA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default CardManagerView;
