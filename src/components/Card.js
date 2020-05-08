import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";

export default function CategoryGridTile(props) {
  return (
    <View style={styles.gridItem}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/tomatoImg.png")}
          style={styles.image}
        >
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
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  container: {
    display: "flex",
    margin: 0,
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
