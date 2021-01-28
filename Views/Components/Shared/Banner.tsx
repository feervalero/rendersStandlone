import React from 'react'
import { View, Text } from 'react-native'
import { SCREEN_WIDTH } from '../../AppManagement/Config'
import { Styles } from '../../AppManagement/Styles'

export default function Banner(props: any) {
    return (
        <View style={{ position: "absolute", width: SCREEN_WIDTH }}>
            <Text style={[props.styles, { textAlign: "center" }]}>{props.title}</Text>
        </View>
    )
}
