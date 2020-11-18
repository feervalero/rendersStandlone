import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Home extends Component {
    render() {
        
        return (
            
            <View>
                <Text> HomePage </Text>
                <Button 
                    onPress={ () => {this.props.navigation.navigate("ListView")}}
                    title="Go to ListView" />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
