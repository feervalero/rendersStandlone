import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RATIO, SCREEN_WIDTH } from '../AppManagement/Config'
import { Styles } from '../AppManagement/Styles'

export default function WinView(props: any) {
  console.log(props)
  return (
    <View style={[Styles.viewContainer, { flex: 1 }]}>
      <View style={[Styles.topBar]}>
        <View>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
            <AntDesign name="left" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 80 }}>
        <Text style={{
          fontFamily: "Lapsus", fontSize: 40, color: "white", marginVertical: 15, textAlign: "center",
          textShadowColor: "black",
          textShadowOffset: { height: 2, width: 2 },
          textShadowRadius: 10
        }}>¡ GANASTE !</Text>
      </View>
      <View style={{ alignContent: "center", alignItems: "center", shadowColor: "black", shadowOffset: { height: 1, width: 1 }, shadowRadius: 5, shadowOpacity: .5, flexGrow: 1, flex: 1 }}>
        <Image source={require("../../assets/Cards/1.jpg")} width={171} height={171 * RATIO} style={{ borderRadius: 10 }} />

      </View>
      <View style={{ height: 60 }}>
        <Text style={{ textAlign: "center", fontSize: 30, fontFamily: "Lapsus", opacity: .5 }}>Doble Corazon</Text>
      </View>
      <View style={{ height: 120 }}>
        <View style={{}}>
          <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, borderColor: "white", margin: 10, height: 40, backgroundColor: "#4D1A88", alignItems: "center", justifyContent: "center" }} onPress={() => { props.navigation.goBack() }}>
            <Text style={{ fontFamily: "Lapsus", fontSize: 20, color: "white" }}>REVISAR</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", flex: 1 }}>

          <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "white", backgroundColor: "#4D1A88", height: 40, flex: 1, margin: 10, justifyContent: "center" }}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
              <Text style={{ fontFamily: "Lapsus", fontSize: 20, color: "white", alignSelf: "center" }}>COMENZAR</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "white", backgroundColor: "#4D1A88", height: 40, flex: 1, margin: 10, justifyContent: "center" }}>
            <TouchableOpacity onPress={() => { props.navigation.popToTop() }}>
              <Text style={{ fontFamily: "Lapsus", fontSize: 20, color: "white", alignSelf: "center", }}>SALIR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({})
