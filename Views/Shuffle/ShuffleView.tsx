import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cards from '../AppManagement/Cards';
import { SCREEN_HEIGHT, buttonRow, banner, RATIO, topBar } from "../AppManagement/Config";
import { Styles } from '../AppManagement/Styles';
import HistoryCardComponent from '../Components/HistoryCardComponent';
import Banner from '../Components/Shared/Banner';
import ShuffleBack from '../Components/ShuffleBack';

const availableHeight = SCREEN_HEIGHT - topBar - banner - buttonRow - buttonRow - banner;



export default class ShuffleView extends Component {

  state = {
    currentCard: 0, numbers: [], usedCards: [], baseNumbers: [], isRunning: 0, timer: 0
  };

  isRunning = 0;
  timer: number;
  constructor(props: any) {
    super(props);


  }

  componentDidMount = () => {
    var newArr = [];
    for (var a = 0; a <= 53; a++) { newArr.push(a) }
    this.setState({ baseNumbers: newArr })
  }

  start = () => {
    this.setState({ isRunning: (this.state.isRunning == 0) ? 1 : 0 });
    /*
      Si esta corriendo, busca nuevo numero, no te detengas hasta encontrar 1, debe ser rapido
      */
    console.log("hola FER")
    if (this.state.isRunning == 1 && this.state.numbers.length < 53) {
      this.setState({ timer: setInterval(this.nextNumber, 500) })
    } else {
      clearImmediate(this.state.timer);
    }



  }

  nextNumber = () => {



    var randomNumber = Math.floor(Math.random() * Math.floor(this.state.baseNumbers.length));


    if (
      this.state.numbers.indexOf(this.state.baseNumbers[randomNumber]) === -1 &&
      this.state.numbers.length < 53
    ) {

      this.state.numbers.push(this.state.baseNumbers[randomNumber]);
      this.setState({ currentCard: this.state.baseNumbers[randomNumber] });
      var newArr = this.state.usedCards;
      newArr.push(Cards[this.state.baseNumbers[randomNumber] - 1]);

      this.setState({ usedCards: newArr });
      //si esta corriendo y no ya genero un numero vuelve a correrlo
      var na = this.state.baseNumbers;
      na.splice(randomNumber, 1);

    } else if (this.state.numbers.length < 53) {
      this.nextNumber()
    } else {
      this.setState({ currentCard: 53 });
      this.isRunning = 0;
    }

  }

  render() {
    return (
      <>
        <View style={Styles.viewContainer}>

          <View style={{}}>
            <ShuffleBack currentCard={this.state.currentCard} />
          </View>



          <View style={{ marginVertical: 60 }}>
            <Banner title={"CORRE Y SE VA CORRIENDO"} styles={Styles.font30} />
          </View>

          <View style={{ alignItems: "center" }}>
            <Image source={Cards[this.state.currentCard].img} style={{ height: availableHeight, width: availableHeight / RATIO, borderRadius: 10 }} />
          </View>

          <HistoryCardComponent cards={this.state.numbers} {...this.props} />

          <View>
            <>
              <TouchableOpacity style={Styles.button} onPress={this.start}><Text style={Styles.button_text}>{(this.state.isRunning == 1) ? "Pausa" : "Iniciar"}</Text></TouchableOpacity>
              <TouchableOpacity style={Styles.button} onPress={this.start}><Text style={Styles.button_text}>Reiniciar</Text></TouchableOpacity>
            </>
          </View>

        </View>

      </>

    )
  }
}

const styles = StyleSheet.create({})

