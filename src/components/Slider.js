import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import Carousel from "react-native-snap-carousel";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.cardContainer}>
        <Image style={styles.imageSection} source={item.image} />
      </View>
    );
  };

  return (
    <Carousel
      layout={"default"}
      data={carouselItems}
      sliderWidth={300}
      itemWidth={300}
      renderItem={renderItem}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
}

const carouselItems = [
  {
    title: "Item 1",
    text: "Text 1",
    image: require("../../assets/images/maizeImg.png"),
  },
  {
    title: "Item 2",
    text: "Text 2",
    image: require("../../assets/images/beetrootImg.png"),
  },
  {
    title: "Item 3",
    text: "Text 3",
    image: require("../../assets/images/tomatoImg.png"),
  },
  {
    title: "Item 4",
    text: "Text 4",
    image: require("../../assets/images/onionImg.png"),
  },
  {
    title: "Item 5",
    text: "Text 5",
    image: require("../../assets/images/cabbageImg.png"),
  },
];

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "floralwhite",
    borderRadius: 5,
    height: 120,
    width: 300,
    alignContent: "center",
    justifyContent: "center",
  },
  imageSection: { flex: 1, width: 100, height: 100 },
});
