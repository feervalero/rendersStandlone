import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
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
import { useFonts } from "expo-font";
import Animation from "./Views/Screens/Animation";
import EditTable from "./Views/CardManagement/EditTable";
const Stack = createStackNavigator();

export default function App({ navigation }) {
  function testClick() {
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
            <Stack.Screen name="CardManagerScreen.View"  {...this} component={CardManagerView} options={{ headerShown: false, }} />
            <Stack.Screen name="CardManagerScreen.SelectDouble"  {...this} component={SelectDouble} options={{ headerShown: false, }} />
            <Stack.Screen name="CardManagerScreen.Style"  {...this} component={SelectStyle} options={{ headerShown: false, }} />
            <Stack.Screen name="CardManagerScreen.SaveOrEdit"  {...this} component={SaveOrEdit} options={{ headerShown: false, }} />
            <Stack.Screen name="Play.Selector" options={{
              headerShown: false,
            }}>
              {(props) => <TableSelector {...props} />}
            </Stack.Screen>
            <Stack.Screen name="EditTable" options={{
              headerShown: false,
            }} >
              {(props) => <EditTable {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Play.View" options={{
              headerShown: false,
            }}>
              {(props) => <PlayView {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Play.Win" options={{
              headerShown: false,
            }}>
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
