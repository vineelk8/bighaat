import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import { Button } from "@ui-kitten/components";

import Card from "../components/Card";

const SelectCrop = (props) => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("https://bighaat-599b8.firebaseio.com/crops.json")
      .then((response) => response.json())
      .then((data) => {
        setCrops(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const renderGridItem = (itemData) => {
    return <Card title={itemData.item.name} />;
  };
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.selectCropHeading}>Select Crop</Text>
        <Text style={styles.selectCropText}>Select Upto 8 Crop of Your intrest</Text>
        <Text style={styles.selectedCropsCountTxt}>
          0/8
        </Text>
      </View>
      <View style={styles.cropsListContainer}>
        <FlatList
          keyExtractor={(item) => item.name}
          data={crops}
          renderItem={renderGridItem}
          numColumns={3}
        />
      </View>
      <View style={styles.bottomSection}>
        <Button style={styles.button} onPress={() => { }}>
          Next
      </Button>
        <Text style={styles.skipText}>Don't have Crops</Text>
      </View>
    </View>
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
  cropsListContainer: {
    padding: 10,
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
