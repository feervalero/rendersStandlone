import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity as Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import HeroTable from "../Components/HeroTable";

export default class SaveOrEdit extends Component {
  state = {
    usedNumbers: [parseInt(this.props.route.params.card.selectedDouble)],
    table: [],
  };

  componentDidMount = () => {
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
      usedNumbers: [parseInt(this.props.route.params.card.selectedDouble)],
    });
    for (let index = 0; index < 16; index++) {
      this.newUnusedRandom();
    }
    this.render();
  };

  save = () => {
    console.log(this);
  };
  edit = () => {};

  render() {
    console.log(this.state);
    if (this.state.table.length > 10) {
      var newArr = this.state.table;

      for (let index = 0; index < this.state.table.length; index++) {
        if (this.props.route.params.card.cardArray[index] == 1) {
          newArr[index] = parseInt(this.props.route.params.card.selectedDouble);
        }
      }

      return (
        <>
          <View style={{ flex: 1 }}>
            <HeroTable card={this.state.table} />
          </View>
          <View>
            <Button onPressOut={() => this.newRandom()} style={styles.button}>
              <Text>New Random</Text>
            </Button>
            <Button onPressOut={() => this.save()} style={styles.button}>
              <Text>Save</Text>
            </Button>
            <Button onPressOut={() => this.edit()} style={styles.button}>
              <Text>Edit</Text>
            </Button>
          </View>
        </>
      );
    } else {
      return (
        <>
          <View>
            <Button onPressOut={() => this.newRandom()} style={styles.button}>
              <Text>Random</Text>
            </Button>
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
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
});
