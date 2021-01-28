import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RATIO, SCREEN_HEIGHT, SCREEN_WIDTH } from '../AppManagement/Config'
import { Styles } from '../AppManagement/Styles'
const nextPage = "CardManagerScreen.Style";
const SliderCard = (props: any) => {

    return (

        <TouchableOpacity onPress={() => { props.props.navigation.navigate(nextPage, { double: props.card.value }) }}>
            <View style={{ flexDirection: "column" }}>
                <Image source={props.card.img} style={{ width: (SCREEN_WIDTH / 3), height: (SCREEN_WIDTH / 3) * RATIO, marginHorizontal: 10, borderRadius: 5, alignSelf: "center" }} />
            </View>
        </TouchableOpacity>
    )
}

export default SliderCard

const styles = StyleSheet.create({})
