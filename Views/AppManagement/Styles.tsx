import { Platform, StyleSheet } from "react-native";
import { MARGIN, SCREEN_WIDTH } from "./Config";

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#22BD6A",
    borderRadius: MARGIN,
    margin: 10,
    justifyContent: "center",
  },
  button_text: {
    fontFamily:
      Platform.OS == "android" ? "sans-serif-condensed" : "HelveticaNeue-Bold",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "white",
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
    backgroundColor: "#85D8F0",
  },
});

export { styles as Styles };
