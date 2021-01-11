import React from 'react'
import { View, Text } from 'react-native'
import { useFonts } from "expo-font";
export default function Font() {

    const [loaded, error] = useFonts({
        Lapsus: require("../../assets/LapsusPro-Bold.otf"),
    });

    return null

}
