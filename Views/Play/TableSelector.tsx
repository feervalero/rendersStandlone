import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { Text, StyleSheet, View, AsyncStorage } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Cards, { Card } from "../AppManagement/Cards";
import { Styles } from "../AppManagement/Styles";
import Selector from "../Components/Selector";
import BottomSelector from "../Components/Shared/BottomSelector";
import TablesGrid from "../Components/Shared/TablesGrid";
import TableSlider from "../Components/TableSlider";

export default class TableSelector extends Component {
  state = {
    tables: [], selectedTables: []
  };
  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem("Tables");
      const data = JSON.parse(value);
      this.setState({ tables: data.tables });
      return data;
      if (value !== null) {
      } else {
      }
    } catch (error) { }

  };

  onPressCard = (card: Card) => {
    var newArr = this.state.selectedTables;
    if (this.state.selectedTables.length < 4) {
      newArr.push(card)
      this.setState({ selectedTables: newArr });
    }
  };

  removeItem = (card: Card) => {
    var newArr = this.state.selectedTables;
    newArr.splice(this.state.selectedTables.indexOf(card), 1);
    this.setState({ selectedTables: newArr })
  };

  render() {

    return (
      <View style={[Styles.viewContainer]}>
        <View style={Styles.topBar}>
          <View>
            <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
              <AntDesign name="left" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ flexGrow: 1, alignItems: "center" }}>
            <Text style={{ fontFamily: "Lapsus", color: "white", fontSize: 30, shadowColor: "black", shadowRadius: 1 }}>Selecciona tus tablas</Text>
          </View>
          <View><AntDesign name="setting" size={25} color="white" /></View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <TablesGrid tables={this.state.tables}
              onPressCard={this.onPressCard} />
          </ScrollView>
        </View>
        {(this.state.selectedTables.length > 0) ? <BottomSelector {...this} tables={this.state.selectedTables} removeItem={this.removeItem} /> : <></>}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
