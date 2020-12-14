import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import ViewList from "./ViewList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CardManagerView from "./Views/CardManagement/CardManagerView";
import Home from "./Views/Home";
import ShuffleView from "./Views/Shuffle/ShuffleView";
import SelectStyle from "./Views/CardManagement/SelectStyle";
import SelectDouble from "./Views/CardManagement/SelectDouble";
import SaveOrEdit from "./Views/CardManagement/SaveOrEdit";
import TableSelector from "./Views/Play/TableSelector";
import PlayView from "./Views/Play/PlayView";
import WinView from "./Views/Play/WinView";
import Gestures from "./Views/AppManagement/Gestures";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  function testClick() {
    alert("hola FEr");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
          >
            {(props) => <Home {...props} />}
          </Stack.Screen>
          <Stack.Screen name="CardManagerScreen.View">
            {(props) => <CardManagerView {...props} />}
          </Stack.Screen>
          <Stack.Screen name="CardManagerScreen.Style">
            {(props) => <SelectStyle {...props} />}
          </Stack.Screen>
          <Stack.Screen name="CardManagerScreen.SelectDouble">
            {(props) => <SelectDouble {...props} />}
          </Stack.Screen>
          <Stack.Screen name="CardManagerScreen.SaveOrEdit">
            {(props) => <SaveOrEdit {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Play.Selector">
            {(props) => <TableSelector {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Play.View">
            {(props) => <PlayView {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Play.Win">
            {(props) => <WinView {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Gestures">
            {(props) => <Gestures {...props} />}
          </Stack.Screen>
          <Stack.Screen name="ShuffleScreen">
            {(props) => <ShuffleView {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
