import { Dimensions } from "react-native";
import { Card } from "./Cards";

var RATIO = 1.585;
var SCREEN_WIDTH = Dimensions.get("window").width;
var SCREEN_HEIGHT = Dimensions.get("window").height;
var CARD_WIDTH = SCREEN_WIDTH / 4;
var CARD_WIDTH_5 = SCREEN_WIDTH / 5;
var CARDWIDTH = SCREEN_WIDTH / 2;
var COLUMNS = 5;
var _CARDWIDTH = Math.floor(SCREEN_WIDTH / COLUMNS);
var _CARDHEIGHT = Math.floor(_CARDWIDTH * RATIO);
var SLIDERHEIGHT = 100;
const MARGIN = 10;
const PADDING = 10;
export { SCREEN_WIDTH, MARGIN, PADDING, SCREEN_HEIGHT };
export { RATIO };
export { CARD_WIDTH };
export { CARD_WIDTH_5 };
export { CARDWIDTH };
export { _CARDHEIGHT };
export { _CARDWIDTH };
export { COLUMNS };
export { SLIDERHEIGHT };
export function getpostion(cards: Card[], item: Card) {
  return cards.indexOf(item);
}

export function getColumn(cards: Card[], item: Card) {}
