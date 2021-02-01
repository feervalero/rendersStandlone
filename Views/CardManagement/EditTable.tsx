import React, { Component } from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withTimingTransition } from 'react-native-redash';
import { buttonRow, RATIO, SCREEN_HEIGHT, topBar } from '../AppManagement/Config';
import { Styles } from '../AppManagement/Styles'
import HeroTable from '../Components/HeroTable'
const availableHeight = SCREEN_HEIGHT - buttonRow - buttonRow - buttonRow;
export class EditTable extends Component {
    state = { table: [], tables: [] }
    componentDidMount = async () => {
        this.setState({ table: this.props.route.params.card.cards })


        try {
            const value = await AsyncStorage.getItem("Tables");
            const data = JSON.parse(value);

            if (value !== null) {
                this.setState({ tables: data.tables });
            } else {
            }
        } catch (error) { }



    }

    cardClicked = (card: any, index: number) => {
        console.log(card, index)
    }

    delete = () => {

        var newArr = this.state.tables;
        console.log("carta", this.props.route.params.card)
        console.log("tables", newArr)
        newArr.find((e) => {
            if (e.id == this.props.route.params.card.id) {
                newArr.splice(newArr.indexOf(e), 1)

            }
        })


        AsyncStorage.removeItem("Tables");
        AsyncStorage.setItem(
            "Tables",
            JSON.stringify({ tables: newArr }));
        this.props.navigation.pop();

    }

    render() {

        return (
            <View style={Styles.viewContainer}>
                <View><Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>Selecciona una carta para editar</Text></View>
                <View style={{ flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", alignSelf: "center" }}>

                    <View style={{
                        backgroundColor: "#8437DD", borderRadius: 5, flexDirection: "row", flexWrap: "wrap", width: availableHeight / RATIO, shadowColor: "#4D1A88", paddingTop: 5,
                        elevation: 10,
                        shadowOpacity: 100,
                        shadowOffset: { height: 2, width: 2 },
                    }}>
                        <HeroTable card={this.state.table} availableHeight={availableHeight} cardClicked={this.cardClicked} />
                    </View>

                </View>
                <View style={{ height: buttonRow * 1, flexDirection: "row", justifyContent: "space-around" }}>

                    <TouchableOpacity>
                        <View style={Styles.button}>
                            <Text style={{ color: "white", fontFamily: "Lapsus", fontSize: 20 }}>GUARDAR</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.delete}>
                        <View style={Styles.button}>
                            <Text style={{ color: "white", fontFamily: "Lapsus", fontSize: 20 }}>BORRAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default EditTable
