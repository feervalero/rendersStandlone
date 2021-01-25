import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Cards from '../AppManagement/Cards';
import { RATIO, SCREEN_WIDTH } from '../AppManagement/Config';
import { Styles } from '../AppManagement/Styles';

const CARDWIDTH = (SCREEN_WIDTH - 80 - 25) / 4;

export default class PlayView extends Component {

    state = { tablesSelected: [{ cards: [], double: 1 }], indicator: 0, scroll: "" }
    componentDidMount = () => {
        this.setState({ tablesSelected: this.props.route.params.tablesSelected });
        console.log(SCREEN_WIDTH - 80)
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
                        {this.state.tablesSelected.map(table => (
                            <View style={{

                                backgroundColor: "#8437DD", borderRadius: 5, flexDirection: "row", flexWrap: "wrap", paddingTop: 5, width: SCREEN_WIDTH - 80, height: (SCREEN_WIDTH - 90) * RATIO, shadowColor: "#4D1A88",
                                elevation: 10,
                                shadowOpacity: 100,
                                shadowOffset: { height: 2, width: 2 },
                            }}>
                                {table.cards.map(card => (<View><Image source={Cards[card].img} style={{ width: CARDWIDTH, height: CARDWIDTH * RATIO, borderRadius: 5, marginStart: 5, marginBottom: 5 }} /></View>))}
                            </View>
                        ))}
                    </ScrollView>
                    <View style={{ width: 40, alignItems: "center", alignContent: "center", justifyContent: "center" }}><AntDesign name="right" size={25} color="white" /></View>
                </View>
                <View style={{ height: 90, backgroundColor: "rgba(255,255,255,.3)", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    {this.state.tablesSelected.map((table, index) => (
                        <TouchableOpacity onPress={() => this.indicatorTap(index)}>
                            <Image source={Cards[table.double].img}
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