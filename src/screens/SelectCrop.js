import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
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
    console.log(itemData.item);
    return (
      <Card title={itemData.item.name} imagePath={itemData.item.imagePath} />
    );
  };
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.screen}>Select Crop</Text>
        <Text style={styles.mainText}>Select Upto 8 Crop of Your intrest</Text>
        <Text style={styles.selectedCrops}>
          0/8 <Text style={{ paddingLeft: 200 }}>Don't have Crops</Text>
        </Text>
      </View>
      <View style={styles.bottomSection}>
        <Button
          style={styles.button}
          onPress={() => props.navigation.navigate("FarmerType")}
        >
          Next
        </Button>
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
    paddingBottom: 50,
  },
  screen: {
    fontWeight: "700",
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  mainText: {
    color: "#fff",
    marginBottom: 20,
  },
  selectedCrops: {
    color: "#fff",
  },
  button: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#297463",
    borderWidth: 0,
  },
  renderGridItem: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#dbe3e3",
    marginBottom: 20,
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomSection: {
    padding: 20,
  },
});
export default SelectCrop;
