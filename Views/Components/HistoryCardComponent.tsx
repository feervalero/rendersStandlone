import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { interpolate } from 'react-native-reanimated';
import { useTransition } from 'react-native-redash';
import Cards from '../AppManagement/Cards';

import { RATIO, SCREEN_WIDTH } from '../AppManagement/Config';




const HistoryCardComponent = (props: any) => {
    const [view, setView] = useState(undefined);
    const [toggle, setToggle] = useState(false);
    const cards = props.cards;

    const transition = useTransition(toggle, { duration: 200 });
    const translateY = interpolate(transition, {
        inputRange: [0, 1],
        outputRange: [-139, 0]
    })

    const opacity = interpolate(transition, {
        inputRange: [0, 1],
        outputRange: [1, 0]
    })

    return (
        <>
            <Animated.View style={{ transform: [{ translateY }], position: "absolute", width: SCREEN_WIDTH, flexDirection: "column" }}>
                <Animated.View style={{ padding: 5, backgroundColor: "#692DAF" }}>
                    <Text style={{ fontFamily: "Helvetica Neue", color: "black", fontSize: 24, fontWeight: "bold" }}>Las que ya vineron</Text>
                </Animated.View>
                <Animated.View style={{ flex: 1, backgroundColor: "#692DAF" }}>
                    <ScrollView horizontal={true}>
                        {cards.map((item, index) => (

                            <Image key={index} source={Cards[item].img} style={{ height: 100, width: 100 / RATIO }} />

                        ))}
                    </ScrollView>
                </Animated.View>
                <Animated.View style={{ backgroundColor: (toggle) ? "#692DAF" : "#00000000" }}>
                    <TouchableOpacity style={{ alignItems: "center", opacity: .5 }} onPress={() => setToggle(prev => !prev)}>
                        <Text >HISTORY</Text>
                        <AntDesign name={(!toggle) ? "caretdown" : "caretup"} size={24} />
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View >
            <Animated.View style={{ width: 56, position: "absolute", top: 10, left: 10, opacity }}>
                <TouchableOpacity onPress={() => { props.navigation.pop() }}>
                    <View style={{}}>
                        <AntDesign name={"close"} color="red" size={36} />
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </>
    )
}

export default HistoryCardComponent;