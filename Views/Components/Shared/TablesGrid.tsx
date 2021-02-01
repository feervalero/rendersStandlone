import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cards from '../../AppManagement/Cards';
import { RATIO, SCREEN_WIDTH } from '../../AppManagement/Config'





const GRIDWIDTH = ((SCREEN_WIDTH - 80) / 2);
const card_width = ((((SCREEN_WIDTH - 80) / 2)) - 15) / 4;

const TablesGrid = (props: any) => {

    return (

        <View style={{
            flexDirection: "row",
            flexWrap: "wrap"

        }}>
            {props.tables.map((table, index) => (
                <>
                    <TouchableOpacity onPress={() => props.onPressCard(table)} key={index}>
                        <View style={{ flexWrap: "wrap", flexDirection: "row", width: GRIDWIDTH, margin: 20, justifyContent: "space-around" }}>
                            {table.cards.map((card, index2) => (
                                <>

                                    <View style={{ flexWrap: "wrap", flexDirection: "row", }} key={index2}>
                                        <Image

                                            source={Cards[card - 1].img}
                                            style={{ width: card_width, height: card_width * RATIO, marginBottom: 5, borderRadius: 5 }}
                                        />
                                    </View>
                                </>
                            ))}
                            <View>
                                <Text style={{ fontFamily: "Lapsus", color: "black", opacity: .5, fontSize: 20, textAlign: "center" }}>{table.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </>
            ))
            }
        </View >
    )


}

export default TablesGrid

const styles = StyleSheet.create({})
