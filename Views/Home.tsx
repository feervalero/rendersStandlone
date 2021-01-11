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

const { height } = Dimensions.get("window");


export default class Home extends Component {

  render() {



    return (

      <SafeAreaView style={[{ flex: 1 }, Styles.backgroundColor]}>
        <View style={{ flex: 1 }}>
          {/*<Button
          onPress={() => {
            this.props.navigation.navigate("ShuffleScreen");
          }}
          title="Barajear"
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate("CardManagerScreen.View");
          }}
          title="Tablas"
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate("Play.Selector");
          }}
          title="Play"
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate("Gestures");
          }}
          title="Gestures"
        />*/}
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.container}
              onPress={() => {
                this.props.navigation.navigate("ShuffleScreen");
              }}
            >
              <ImageBackground
                source={require("../assets/back1.jpg")}
                style={styles.image}
                imageStyle={[styles.image, { borderRadius: 20 }]}
              >
                <Text style={styles.text}>Barajear</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.container}
              onPress={() => {
                this.props.navigation.navigate("CardManagerScreen.View");
              }}
            >
              <ImageBackground
                source={require("../assets/back2.jpg")}
                style={styles.image}
                imageStyle={[styles.image, { borderRadius: 20 }]}
              >
                <Text style={[styles.text, Styles.title]}>Tablas</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.container}
              onPress={() => {
                this.props.navigation.navigate("Play.Selector");
              }}
            >
              <ImageBackground
                source={require("../assets/back3.jpg")}
                style={styles.image}
                imageStyle={[styles.image, { borderRadius: 20 }]}
              >
                <Text style={styles.text}>Jugar</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{ position: "absolute", right: 20, bottom: 20 }}>
            <AntDesign name="pluscircle" size={48} color="black" />
          </View>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Gestures");
            }}
            title="Gestures"
          />
          <Button
            onPress={() => {
              this.props.navigation.navigate("Test.GridSort");
            }}
            title="GridSort"
          />
        </View>
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
