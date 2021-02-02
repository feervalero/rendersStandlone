import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Cards from '../AppManagement/Cards';
import { RATIO, SCREEN_WIDTH } from '../AppManagement/Config';
import { Styles } from '../AppManagement/Styles';

const CARDWIDTH = (SCREEN_WIDTH - 80 - 25) / 4;

const winnerPlays = [
    "1111000000000000", //Acostado 1
    "0000111100000000", //Acostado 2
    "0000000011110000", //Acostado 3 
    "0000000000001111", //Acostado 4
    "1000100010001000", //Parado 1
    "0100010001000100", //Parado 2
    "0010001000100010", //Parado 3
    "0001000100010001", //Parado 4
    "1000010000100001", //Diagonal 1
    "0001001001001000", //Diagonal 2
    "1100110000000000", //Cuadrito 1
    "0110011000000000", //Cuadrito 2
    "0011001100000000", //Cuadrito 3
    "0000110011000000", //Cuadrito 4
    "0000001100110000", //Cuadrito 5
    "0000000011001100", //Cuadrito 6
    "0000000001100110", //Cuadrito 7
    "0000000000110011", //Cuadrito 8
    "0000011001100000", //Posito
    "1001000000001001", //Cuadro Grande

];

export default class PlayView extends Component {

    state = { tablesSelected: [{ cards: [], double: 1 }], indicator: 0, scroll: "", play: [] }
    componentDidMount = () => {
        this.setState({ tablesSelected: this.props.route.params.tablesSelected });
        var tables = this.props.route.params.tablesSelected;
        var newArr = [];
        for (let index = 0; index < tables.length; index++) {
            newArr.push("0000000000000000");
        }

        this.setState({ play: newArr })

    }

    scrolled = (event: any) => {
        this.setState({ indicator: event.nativeEvent.targetContentOffset.x / (event.nativeEvent.contentSize.width / this.state.tablesSelected.length) });
    }

    indicatorTap = (index: number) => {
        this.state.scroll.scrollTo({
            x: (SCREEN_WIDTH - 80) * index,
            y: 0,
            animated: true
        });
        this.setState({ indicator: index })
    }
    select = (tableIndex: any, cardIndex: any) => {
        var table = Array.from(this.state.play[tableIndex]);
        table.splice(cardIndex, 1, (table[cardIndex] === "1" ? "0" : "1"));
        var newArr = this.state.play;
        newArr.splice(tableIndex, 1, table.join(""));
        this.setState({ play: newArr })
        this.checkPlay(table.join(""), tableIndex);
    }

    checkPlay = (play: string, tableIndex: any) => {


        for (var a = 0; a < winnerPlays.length; a++) {
            //compara su todos los 1 de winnerplay estan en los unos de play
            var jugadas_acertadas = 0;
            var winnerArray = Array.from(winnerPlays[a]);
            var playArray = Array.from(play);
            for (var i = 0; i < 16; i++) {
                if (winnerArray[i] === "1" && (winnerArray[i] === playArray[i])) {

                    jugadas_acertadas++;
                }
            }
            if (jugadas_acertadas == 4) {

                this.props.navigation.navigate("Play.Win", { card: this.state.tablesSelected[tableIndex] });
            }
        }

        if (winnerPlays.indexOf(play) != -1) {
            this.props.navigation.navigate("Play.Win");
        }
    }

    render() {
        return (
            <View style={[Styles.viewContainer, { flex: 1 }]}>
                <View style={[Styles.topBar]}>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <AntDesign name="left" size={25} color="white" />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1 }}><Text style={{ color: "white", fontFamily: "Lapsus", fontSize: 25, textAlign: "center" }}>¡A JUGAR!</Text></View>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <AntDesign name="setting" size={25} color="white" />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch", }}>
                    <View style={{ width: 40, alignItems: "center", alignContent: "center", justifyContent: "center" }}><AntDesign name="left" size={25} color="white" /></View>
                    <ScrollView horizontal={true} pagingEnabled={true} onScrollEndDrag={this.scrolled} ref={(ref) => { this.setState({ scroll: ref }) }}>
                        {this.state.tablesSelected.map((table, tableIndex) => (
                            <View style={{

                                backgroundColor: "#8437DD", borderRadius: 5, flexDirection: "row", flexWrap: "wrap", paddingTop: 5, width: SCREEN_WIDTH - 80, height: (SCREEN_WIDTH - 90) * RATIO, shadowColor: "#4D1A88",
                                elevation: 10,
                                shadowOpacity: 100,
                                shadowOffset: { height: 2, width: 2 },
                            }}>
                                {table.cards.map((card, cardIndex) => (
                                    <TouchableOpacity onPressIn={() => this.select(tableIndex, cardIndex)} activeOpacity={1}>
                                        <View>
                                            <Image
                                                source={Cards[card - 1].img}
                                                style={{ width: CARDWIDTH, height: CARDWIDTH * RATIO, borderRadius: 5, marginStart: 5, marginBottom: 5 }}
                                            />
                                            <Image source={require("../../assets/ficha.png")} style={{ position: "absolute", marginLeft: 5, width: CARDWIDTH, height: CARDWIDTH, top: ((CARDWIDTH * RATIO) - CARDWIDTH) / 2, opacity: (this.state.play[tableIndex][cardIndex] == 1) ? 1 : 0 }} />
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                    <View style={{ width: 40, alignItems: "center", alignContent: "center", justifyContent: "center" }}><AntDesign name="right" size={25} color="white" /></View>
                </View>
                <View style={{ height: 90, backgroundColor: "rgba(255,255,255,.3)", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    {this.state.tablesSelected.map((table, index) => (
                        <TouchableOpacity onPress={() => this.indicatorTap(index)}>
                            <Image source={Cards[table.double - 1].img}
                                style={[styles.image, {
                                    width: (index == this.state.indicator) ? 70 : 60,
                                    height: (index == this.state.indicator) ? 70 : 60
                                }]
                                }
                            />
                        </TouchableOpacity>))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        justifyContent: "center", borderRadius: 5, elevation: 10, shadowColor: "black", shadowOpacity: 50,
        shadowOffset: { height: 2, width: 2 },
    }
})