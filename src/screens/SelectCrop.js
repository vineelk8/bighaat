import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Button } from "@ui-kitten/components";

import Card from "../components/Card";
import { crops } from "../utils/SelectCrop";

const SelectCrop = (props) => {
  // const [crops, setCrops] = useState([]);

  // useEffect(() => {
  //   fetch("https://bighaat-599b8.firebaseio.com/crops.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCrops(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  const renderGridItem = (itemData) => {
    return (
      <Card title={itemData.item.name} imagePath={itemData.item.imagePath} />
    );
  };
  return (
    <FlatList
      style={styles.cropsList}
      columnWrapperStyle={styles.cropsListColumnStyle}
      keyExtractor={(item) => item.name}
      data={crops}
      renderItem={renderGridItem}
      numColumns={3}
      ListHeaderComponent={() => {
        return (
          <View style={styles.mainContainer}>
            <Text style={styles.selectCropHeading}>Select Crop</Text>
            <Text style={styles.selectCropText}>
              Select Upto 8 Crop of Your intrest
            </Text>
            <Text style={styles.selectedCropsCountTxt}>0/8</Text>
          </View>
        );
      }}
      stickyHeaderIndices={[0]}
      ListFooterComponent={() => {
        return (
          <View style={styles.bottomSection}>
            <Button
              style={styles.button}
              onPress={() => props.navigation.navigate("HomeScreen")}
            >
              Next
            </Button>
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#49a38f",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  selectCropHeading: {
    fontWeight: "700",
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  selectCropText: {
    color: "#fff",
    marginBottom: 10,
  },
  selectedCropsCountTxt: {
    color: "#fff",
  },
  button: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#297463",
    borderWidth: 0,
  },
  cropsList: {
    //margin: 5,
  },
  cropsListColumnStyle: {
    flex: 1,
    justifyContent: "space-around",
  },
  skipText: {
    color: "#6a7373",
    textAlign: "center",
  },
  bottomSection: {
    padding: 20,
  },
});
export default SelectCrop;
