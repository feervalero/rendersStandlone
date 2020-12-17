import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "./Config";

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 20,
    margin: 10,
    justifyContent: "center",
  },
  button_text: {
    fontFamily: "HelveticaNeue-Bold",
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
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});

export { styles as Styles };
