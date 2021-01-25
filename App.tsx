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
import GridSort from "./Views/Screens/GridSort";
import { Styles } from "./Views/AppManagement/Styles";
import Font from "./Views/Components/Font";
import { useFonts } from "expo-font";
import Animation from "./Views/Screens/Animation";
const Stack = createStackNavigator();

export default function App({ navigation }) {
  function testClick() {
    alert("hola FEr");
  }
  const [loaded, error] = useFonts({
    Lapsus: require("./assets/LapsusPro-Bold.otf"),

  });

  if (!loaded) {
    return <></>;
  } else {

    return (<>

      < SafeAreaView style={[{ flex: 1 }, Styles.backgroundColor]} >
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
            <Stack.Screen name="Play.Selector" options={{
              headerShown: false,
            }}>
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
            <Stack.Screen
              name="ShuffleScreen"
              options={{
                headerShown: false,
              }}
            >
              {(props) => <ShuffleView {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Test.GridSort">
              {(props) => <GridSort {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Animation">
              {(props) => <Animation {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView >
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
