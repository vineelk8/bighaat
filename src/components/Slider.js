import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import Carousel from "react-native-snap-carousel";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.sliderImgContainer}>
          <Image style={styles.imageSection} source={item.image} />
        </View>
        <View style={styles.sliderTxtContainer}>
          <Text style={styles.sliderTxtHeader}>{item.title}</Text>
          <Text style={styles.sliderTxtCntnt}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <Carousel
      layout={"default"}
      data={carouselItems}
      sliderWidth={400}
      itemWidth={300}
      renderItem={renderItem}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
}

const carouselItems = [
  {
    title: "Tomato",
    text: "Vegetables",
    image: require("../../assets/images/tomatoImg.png"),
  },
  {
    title: "Beetroot",
    text: "Vegetables",
    image: require("../../assets/images/beetrootImg.png"),
  },
  {
    title: "Cucumber",
    text: "Vegetables",
    image: require("../../assets/images/cucumberImg.png"),
  },
  {
    title: "Onion",
    text: "Vegetables",
    image: require("../../assets/images/onionImg.png"),
  },
  {
    title: "Cabbage",
    text: "Vegetables",
    image: require("../../assets/images/cabbageImg.png"),
  },
];

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    //height: 150,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    borderBottomColor: "#277d46",
    borderBottomWidth: 4,
  },
  sliderImgContainer: {
    flex: 2,
    // backgroundColor: "#ff0",
  },
  imageSection: {
    width: 90,
    height: 90,
    resizeMode: 'stretch',
  },
  sliderTxtContainer: {
    flex: 3,
    // backgroundColor: "#099",
  },
  sliderTxtHeader: {
    color: "#215273",
    fontSize: 26,
    fontWeight: "700",
  },
  sliderTxtCntnt: {
    color: "#6a7373",
    fontSize: 14,
    fontWeight: "600",
  },
});
