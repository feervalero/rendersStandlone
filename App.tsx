import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ViewList from './ViewList';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Views/Home'

const Stack = createStackNavigator();

export default function App({navigation}) {
  
  function testClick  () { alert("hola FEr")};

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ListView" component={ViewList} />
        <Stack.Screen name="Home">
            {props => <Home {...props} />}

        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
