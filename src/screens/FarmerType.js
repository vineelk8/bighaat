import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const FarmerType = (props) => {
  const [farmerTypes, setfarmerTypes] = useState([]);

  useEffect(() => {
    fetch("https://bighaat-599b8.firebaseio.com/farmerType.json")
      .then((response) => response.json())
      .then((data) => {
        setfarmerTypes(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <View>
      <View style={styles.headContainer}>
        <Text style={styles.screen} category="h1">
          Who are you ?
        </Text>
        <Text style={styles.headText}>Choose What Describes you the best</Text>
        <Text style={styles.skipText}>Skip</Text>
      </View>
      <TouchableOpacity style={styles.gridItem}>
        {farmerTypes.map(
          (farmerType) =>
            farmerType !== null && (
              <View key={farmerType.name} style={styles.container}>
                <Text>{farmerType.name}</Text>
                <Text>{farmerType.description}</Text>
              </View>
            )
        )}
      </TouchableOpacity>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("SelectCrop")}
          title="Next"
        >
          Next
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: { backgroundColor: "#00C853", borderRadius: 20 },
  headText: { paddingLeft: 30, paddingBottom: 10 },
  skipText: { paddingLeft: 35, color: "white", paddingBottom: 20 },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 80,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  button: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
    paddingVertical: 300,
  },
  screen: {
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 50,
    paddingBottom: 10,
    paddingLeft: 30,
    color: "white",
  },
});
export default FarmerType;
