import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Cards from '../AppManagement/Cards'
import { RATIO } from '../AppManagement/Config';
const height = Dimensions.get("window").height;

export default function ShuffleBack(props: any) {
    var currentCard = props.currentCard;
    if (props.currentCard == 0) {
        var randomNumber = Math.floor(Math.random() * Math.floor(54) + 1);
        currentCard = randomNumber;
    }
    if (currentCard) {
        return (
            <Image source={Cards[currentCard].img} blurRadius={30} style={[{ opacity: .8, alignSelf: "center", position: "absolute", height, width: height / RATIO, zIndex: 80 }]} />
        )
    } else {
        return <></>
    }
}

const styles = StyleSheet.create({})
