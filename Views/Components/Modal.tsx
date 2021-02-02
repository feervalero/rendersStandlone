import React from 'react'
import { View, Text } from 'react-native'

export default function Modal() {
    return (
        <View style={{ backgroundColor: "red" }}>
            <Modal
                visible={this.state.modal}
                transparent={true}
                animationType={"slide"}
                style={{ margin: MARGIN }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ position: "absolute", right: 10, top: 10 }}>
                            <Button
                                onPress={() => {
                                    this.setState({ modal: this.state.modal ? false : true });
                                }}
                            >
                                <AntDesign name={"close"} size={36} color={"red"} />
                            </Button>
                        </View>
                        <Text>Modal</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
