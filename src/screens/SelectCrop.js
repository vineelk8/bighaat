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
        <Text style={{ paddingLeft: 35, color: "white" }}>
          0/8 <Text style={{ paddingLeft: 200 }}>Don't have Crops</Text>
        </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.name}
        data={crops}
        renderItem={renderGridItem}
        numColumns={2}
      />
      <Button style={styles.button} onPress={() => {}}>
        Next
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "#00C853", borderRadius: 20 },
  mainText: { paddingLeft: 30, paddingBottom: 10 },
  screen: {
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 50,
    paddingBottom: 10,
    paddingLeft: 30,
    color: "white",
  },
  button: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
  },
});
export default SelectCrop;
