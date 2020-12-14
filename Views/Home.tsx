import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { height } = Dimensions.get("window");
export default class Home extends Component {
  render() {
    return (
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
              <Text style={styles.text}>Tablas</Text>
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
        <Button
          onPress={() => {
            this.props.navigation.navigate("Gestures");
          }}
          title="Gestures"
        />
      </View>
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
    fontFamily: "Helvetica Neue",

    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
