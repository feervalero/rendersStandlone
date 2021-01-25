import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Dimensions,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./AppManagement/Styles";
import { AntDesign } from "@expo/vector-icons";
import BottomMenu from "./Components/Shared/BottomMenu";

const { height } = Dimensions.get("window");


export default class Home extends Component {

  render() {
    return (

      <SafeAreaView style={[{ flex: 1 }, Styles.backgroundColor, Styles.homeContainer]}>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={Styles.appname}>LA LOTE</Text>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={Styles.homeButton}
              onPress={() => {
                this.props.navigation.navigate("ShuffleScreen");
              }}
            >
              <View >
                <Text style={Styles.homeButtonText}>Barajear</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={Styles.homeButton}
              onPress={() => {
                this.props.navigation.navigate("CardManagerScreen.View");
              }}
            >
              <View>
                <Text style={Styles.homeButtonText}>Tablas</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={Styles.homeButton}
              onPress={() => {
                this.props.navigation.navigate("Play.Selector");
              }}
            >
              <View>
                <Text style={Styles.homeButtonText}>Jugar</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
        <BottomMenu />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: height / 5,
    marginHorizontal: 40,
    marginVertical: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Platform.OS == "android" ? "Roboto" : "Helvetica Neue",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
