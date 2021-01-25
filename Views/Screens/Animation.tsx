import React from "react";
import { View, Text, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { panGestureHandler, usePanGestureHandler } from "react-native-redash";


function Animation() {

    const { gestureHandler, translation } = usePanGestureHandler();



    return (
        <>
            <PanGestureHandler {...gestureHandler}>
                <Animated.View style={[{ width: 100, height: 100, backgroundColor: "green", transform: [{ translateX: translation.x }] }]}></Animated.View>
            </PanGestureHandler>
        </>
    );
}

export default Animation;
