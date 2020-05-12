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
    padding: 10,
    margin: 10,
    //marginHorizontal: 0,
    //marginVertical: 10,
    flex: 1,
    // justifyContent: "center",
    // flexDirection: "row",
    //backgroundColor: "#ff0",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropImgContainer: {
    flex: 1,
  },
  cropImage: {
    resizeMode: "stretch",
    width: 75,
    height: 75,
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
