import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.gridItem}>
      <View style={styles.container}>
        <ImageBackground source={props.imagePath} style={styles.image}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    height: 120,
    borderRadius: 5,
    overflow: "hidden",
    elevation: 2,
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#f00",
    textAlign: "center",
    fontWeight: "700",
  },
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
