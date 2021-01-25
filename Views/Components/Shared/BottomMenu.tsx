import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Animated, { interpolate, Easing } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';



/*
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class BottomMenu extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
*/

class BottomMenu extends Component {

    state = {
        isOpen: 1,
        offset: new Animated.Value(65)
    }


    toggle = () => {
        Animated.timing(this.state.offset, { duration: 1000, toValue: (this.state.isOpen == 1) ? 0 : 65, easing: Easing.bounce }).start();
        this.setState({ isOpen: this.state.isOpen == 1 ? 0 : 1 });
    }
    render() {
        return (

            <Animated.View style={[styles.container, { transform: [{ translateY: this.state.offset }] }]}>
                {console.log(this.state.isOpen)}
                <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
                    <TouchableOpacity onPress={this.toggle}>
                        <View style={{ alignItems: "center", opacity: .5 }}>
                            <Text>MENU</Text>
                            <AntDesign name={this.state.isOpen == 0 ? "caretdown" : "caretup"} size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    {/*ITERATE HERE*/}
                    <Animated.View style={{ flexDirection: "row", alignItems: "strech", padding: 10, backgroundColor: "#692DAF", transform: [{ translateY: 0 }] }}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
                            <View style={{ width: 45, height: 45, backgroundColor: "#4D1A88", borderRadius: 5, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Ionicons name="md-exit" size={24} color="white" />
                                <Text style={{ color: "white", opacity: .5, fontSize: 10 }}>EXIT</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <View style={{ width: 45, height: 45, backgroundColor: "#4D1A88", borderRadius: 5, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Ionicons name="md-exit" size={24} color="white" />
                                <Text style={{ color: "white", opacity: .5, fontSize: 10 }}>SETUP</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <View style={{ width: 45, height: 45, backgroundColor: "#4D1A88", borderRadius: 5, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Ionicons name="md-exit" size={24} color="white" />
                                <Text style={{ color: "white", opacity: .5, fontSize: 10 }}>SETUP</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <View style={{ width: 45, height: 45, backgroundColor: "#4D1A88", borderRadius: 5, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Ionicons name="md-exit" size={24} color="white" />
                                <Text style={{ color: "white", opacity: .5, fontSize: 10 }}>SETUP</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <View style={{ width: 45, height: 45, backgroundColor: "#4D1A88", borderRadius: 5, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <AntDesign name="setting" size={24} color="white" />
                                <Text style={{ color: "white", opacity: .5, fontSize: 10 }}>SETUP</Text>
                            </View>
                        </View>
                    </Animated.View>
                </View>
            </Animated.View >
        )
    }
}

export default BottomMenu

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row"
    },
    bar: {
        display: "flex",
        borderWidth: 1,
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#692DAF"
    },
    icon: { flex: 1 }
})
