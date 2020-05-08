import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

export default function CategoryGridTile(props) {
  let ToucableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ToucableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.container}>
      <ToucableCmp style={{ flex: 1 }}>
        <View style={styles.gridItem}>
          <Text style={styles.title} numberOfLines={3}>
            {props.title}
          </Text>
        </View>
      </ToucableCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    //elevation: 3,
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#dbe3e3",
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 100,
  },
  container: {
    display: "flex",
    margin: 0,
    flex: 1,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
  },
});
