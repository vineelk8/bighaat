import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ProgressBarComp from '../components/ProgressBar';
import { carouselItems } from "../utils/CarouselItems";

const SCREEN_WIDTH = Dimensions.get("window").width;

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
          <View style={{ paddingVertical: 20 }}>
            <ProgressBarComp />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        layout={"default"}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        containerStyle={{ backgroundColor: "#49a38f" }}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        activeDotIndex={activeIndex}
        dotsLength={carouselItems.length}
      />
    </View>
  );
}

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
    resizeMode: "stretch",
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
  dotStyle: {
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
  },
});
