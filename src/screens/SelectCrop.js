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
        <Text style={styles.screen}>Select Crop</Text>
        <Text style={styles.mainText}>Select Upto 8 Crop of Your intrest</Text>
        <Text style={styles.selectedCrops}>
          0/8 <Text style={{ paddingLeft: 200 }}>Don't have Crops</Text>
        </Text>
      </View>
      <FlatList
        style={styles.cropsList}
        keyExtractor={(item) => item.name}
        data={crops}
        renderItem={renderGridItem}
        numColumns={2}
      />
      <Button style={styles.button} onPress={() => { }}>
        Next
      </Button>
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
  cropsList: {
    //flex: 1,
    //justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#dbe3e3",
    marginBottom: 20,
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default SelectCrop;
