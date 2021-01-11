import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity as Button } from "react-native";

var scale = new Animated.Value(1);

export default function ClockItem(props) {
  Animated.loop(
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <Animated.View
      style={{
        position: "absolute",
        right: 10,
        zIndex: 900,
        transform: [
          {
            scale: scale,
          },
        ],
      }}
    >
      <Button onPress={() => props.clockPress()}>
        <AntDesign name="clockcircleo" size={48} color="red"></AntDesign>
      </Button>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
