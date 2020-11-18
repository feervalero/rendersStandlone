/*rncs*/
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

class ViewList extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button title="GO BACK" onPress={()=>{this.props.navigation.goBack()}}/>
      </View>
    )
  }
}

export default ViewList;

const styles = StyleSheet.create({})
