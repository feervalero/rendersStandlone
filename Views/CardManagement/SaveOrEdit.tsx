import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  AsyncStorage,

} from "react-native";
import Cards from "../AppManagement/Cards";
import { banner, buttonRow, RATIO, SCREEN_HEIGHT, topBar } from "../AppManagement/Config";
import { Styles } from "../AppManagement/Styles";

import HeroTable from "../Components/HeroTable";
import Banner from "../Components/Shared/Banner";

const availableHeight = SCREEN_HEIGHT - topBar - banner - buttonRow - buttonRow;

export default class SaveOrEdit extends Component {
  state = {
    usedNumbers: [parseInt(this.props.route.params.selectedDouble)],
    table: [],
    tables: []
  };

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem("Tables");
      const data = JSON.parse(value);

      if (value !== null) {
        this.setState({ tables: data.tables });
      } else {
      }
    } catch (error) { console.log(error) }
    for (let index = 0; index < 16; index++) {
      this.newUnusedRandom();
    }

  };

  componentDidUpdate = () => {
    for (let index = 0; index < 16; index++) {
      this.newUnusedRandom();
    }
  };

  newRandom = () => {
    this.setState({
      table: [],
      usedNumbers: [parseInt(this.props.route.params.selectedDouble)],
    });
    for (let index = 0; index < 16; index++) {
      this.newUnusedRandom();
    }
    this.render();
  };

  save = () => {



    var newTable = {
      id: this.state.tables.length + 1,
      name: "Doble " + Cards[this.props.route.params.selectedDouble - 1].name,
      cards: this.state.table,
      active: true,
      cardType: 2, double: this.props.route.params.selectedDouble
    };

    var newArr = this.state.tables;
    newArr.push(newTable);

    AsyncStorage.removeItem("Tables");
    AsyncStorage.setItem(
      "Tables",
      JSON.stringify({ tables: newArr }));

    this.props.navigation.popToTop();


  };
  edit = () => { };

  cardClicked = () => { }

  render() {

    if (this.state.table.length > 15) {
      var newArr = this.state.table;

      for (let index = 0; index < this.state.table.length; index++) {
        if (this.props.route.params.card.cardArray[index] == 1) {
          newArr[index] = parseInt(this.props.route.params.selectedDouble);
        }

      }

      return (
        <>
          <View style={[Styles.viewContainer]}>
            <View style={[Styles.topBar]}>
              <Banner title={"Completa tu Tabla"} styles={[Styles.font30]} />
              <View>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                  <AntDesign name="left" size={25} color="white" />
                </TouchableOpacity>
              </View>
            </View>



            <View style={{ flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", alignSelf: "center" }}>

              <View style={{
                backgroundColor: "#8437DD", borderRadius: 5, flexDirection: "row", flexWrap: "wrap", width: availableHeight / RATIO, shadowColor: "#4D1A88", paddingTop: 5,
                elevation: 10,
                shadowOpacity: 100,
                shadowOffset: { height: 2, width: 2 },
              }}>
                <HeroTable cardClicked={this.cardClicked} card={this.state.table} availableHeight={availableHeight} />
              </View>

            </View>

            <View style={{ height: buttonRow + buttonRow }}>
              <View style={{}}>
                <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, borderColor: "white", margin: 10, height: 40, backgroundColor: "#4D1A88", alignItems: "center", justifyContent: "center" }} onPress={this.save}>
                  <Text style={{ fontFamily: "Lapsus", fontSize: 20, color: "white" }}>GUARDAR</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", flex: 1 }}>

                <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "white", backgroundColor: "#4D1A88", height: 40, flex: 1, margin: 10, justifyContent: "center" }}>
                  <TouchableOpacity onPressOut={() => this.newRandom()}>
                    <Text style={{ fontFamily: "Lapsus", fontSize: 20, color: "white", alignSelf: "center" }}>OTRA NUEVA</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "white", backgroundColor: "#4D1A88", height: 40, flex: 1, margin: 10, justifyContent: "center" }}>
                  <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Text style={{ fontFamily: "Lapsus", fontSize: 20, color: "white", alignSelf: "center", }}>ATRAS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>


        </>
      );
    } else {
      return (
        <>
          <View>
            <TouchableOpacity onPressOut={() => this.newRandom()} style={styles.button}>
              <Text>Random</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }
  }

  newUnusedRandom = () => {
    var randomNumber = Math.floor(Math.random() * Math.floor(54) + 1);

    if (
      this.state.usedNumbers.indexOf(parseInt(randomNumber)) == -1 &&
      this.state.table.length < 16
    ) {
      var newArrTable = this.state.table;
      var newArrUsedNumbers = this.state.usedNumbers;
      newArrTable.push(randomNumber);
      newArrUsedNumbers.push(randomNumber);
      this.setState({ table: newArrTable, usedNumbers: newArrUsedNumbers });
    } else if (this.state.table.length < 16) {
      this.newUnusedRandom();
    }
  };
}

const styles = StyleSheet.create({
  button: {
    height: buttonRow - 20,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
});
