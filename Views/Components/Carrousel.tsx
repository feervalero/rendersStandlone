import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity as Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Carrousel(props) {
  if (props.cardHistory != undefined) {
    return (
      <View>
        <ScrollView horizontal={true}>
          {props.cardHistory.map((item) => (
            <Text style={styles.card} key={item}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({ card: { margin: 20 } });
