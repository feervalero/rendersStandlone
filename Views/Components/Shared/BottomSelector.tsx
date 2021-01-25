import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Cards from '../../AppManagement/Cards'
import { SCREEN_WIDTH } from '../../AppManagement/Config'

const BottomSelector = (props: any) => {

    return (
        <View style={{ bottom: 1, }}>
            <View style={{ height: 90 }}>
                <ImageBackground blurRadius={30} style={{ flex: 1, width: SCREEN_WIDTH, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }} source={require("../../../assets/Cards/99.jpg")} >
                    {props.tables.map(table => (<TouchableOpacity onPress={() => props.removeItem(table)}><Image source={Cards[table.double].img} style={styles.image} /></TouchableOpacity>))}
                </ImageBackground>
            </View>
            <View style={{ height: 45, backgroundColor: "#4D1A88", justifyContent: "center", width: SCREEN_WIDTH }}><TouchableOpacity style={{}}><Text style={{
                fontSize: 30, fontFamily: "Lapsus", color: "white", shadowOpacity: 1,
                shadowRadius: 5,
                shadowOffset: { height: 1, width: 1 },
                textAlign: "center"
            }}>JUGAR</Text></TouchableOpacity></View>
        </View>
    )
}

export default BottomSelector

const styles = StyleSheet.create({
    image: {
        justifyContent: "center", width: 60, height: 60, borderRadius: 5, elevation: 10, shadowColor: "black", shadowOpacity: 50,
        shadowOffset: { height: 2, width: 2 },
    }
})
