import { Dimensions, Platform, StyleSheet } from "react-native";
import { MARGIN, SCREEN_WIDTH } from "./Config";
import { useFonts } from "expo-font";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#4D1A88",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",

  },
  button_text: {
    fontFamily: "Lapsus",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: 42
  },
  button_xs: {
    width: SCREEN_WIDTH / 4 - 20,
    paddingVertical: 5,
    backgroundColor: "black",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,

    justifyContent: "center",
  },
  button_text_xs: {
    fontFamily: Platform.OS == "android" ? "Roboto" : "HelveticaNeue-Bold",
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  backgroundColor: {
    backgroundColor: "#692DAF",
  },
  title: {
    fontFamily: "Lapsus"
  },
  appname: {
    fontFamily: "Lapsus",
    color: "white",
    padding: 10,
    fontSize: 56,
    textAlign: "center",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { height: 1, width: 1 },
    margin: 20
  },
  homeButton: {
    shadowColor: "#3B0679",
    elevation: 10,
    shadowOpacity: 50,
    shadowOffset: { height: 2, width: 2 },
    height: 110,
    width: width - 40,
    backgroundColor: "#4D1A88",
    borderRadius: 15,
    justifyContent: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 23
  },
  homeButtonText: {
    fontFamily: "Lapsus",
    fontSize: 48,
    position: "relative",
    color: "white",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 2,
    textShadowColor: "black",
    textShadowOffset: { height: 1, width: 1 },
    elevation: 0

  },
  topSlider: {
    opacity: .5,
    borderWidth: 1,
    alignSelf: "center",
    position: "relative"
  },
  viewContainer: {
    backgroundColor: "#692DAF",
    flex: 1,
  },
  topBar: {

    height: 60,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center"
  }
});

export { styles as Styles };
