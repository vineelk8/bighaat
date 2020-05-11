import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.gridItem}>
      <View style={styles.container}>
        <View style={styles.cropImgContainer}>
          <ImageBackground source={props.imagePath} style={styles.cropImage}>
          </ImageBackground>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {props.title}
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 10,
    // overflow: "hidden",
    //elevation: 2,
    backgroundColor: "#dbe3e3",
    borderBottomWidth: 3,
    borderColor: "#adb6b6",
    //flex: 1,
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  cropImgContainer: {
    flex: 1,
  },
  cropImage: {
    resizeMode: "stretch",
    width: 80,
    height: 80,
  },
  titleContainer: {
    flex: 1,
    //backgroundColor: "#f00",
    paddingTop: 3,
  },
  title: {
    fontSize: 16,
    color: "#737878",
    textAlign: "center",
    fontWeight: "700",
  },
});
