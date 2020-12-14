import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Cards from "../AppManagement/Cards";
import { CARDWIDTH, RATIO, SCREEN_WIDTH } from "../AppManagement/Config";

const width = Math.floor(CARDWIDTH);
const height = Math.floor(width * RATIO);
export default function CardThumbnail(props: any) {
  console.log(props);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {props.cards.map((item) => (
          <View
            style={{
              width: CARDWIDTH / 4 - 1, //TODO:ajustar esto, camia el 1 por 3
              height: (CARDWIDTH / 4) * RATIO,
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <Image
              source={Cards[item].img}
              style={[
                { height: (CARDWIDTH / 4) * RATIO },
                { width: CARDWIDTH / 4 - 1 },
              ]}
            />
          </View>
        ))}
      </View>
      {/*<Image
        source={props.img}
        style={{
          width,
          height,
          borderRadius: 10,
          borderColor: "#cccccc",
          borderWidth: "1",
        }}
      />*/}
    </>
  );
}

const styles = StyleSheet.create({});
