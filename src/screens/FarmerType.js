import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { greaterThan } from "react-native-reanimated";

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

      </View>
      <View>
        <TouchableOpacity style={styles.gridItem}>
          {farmerTypes.map(
            (farmerType) =>
              farmerType !== null && (
                <View key={farmerType.name} style={styles.container}>
                  <Text style={styles.farmerTypeName}>{farmerType.name}</Text>
                  <Text style={styles.farmerTypeDesc}>{farmerType.description}</Text>
                </View>
              )
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <Button
          style={styles.button}
          onPress={() => props.navigation.navigate("SelectCrop")}
          title="Next"
        >
          Next
        </Button>


        <Text style={styles.skipText}>Skip</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
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
  headText: {
    color: "#fff",
  },
  gridItem: {
    //flex: 1,
    //margin: 15,
    //height: 80,
    padding: 20,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    //shadowColor: "black",
    //shadowOpacity: 0.26,
    //shadowOffset: { width: 0, height: 2 },
    //shadowRadius: 15,
    //elevation: 3,
    //padding: 20,
    justifyContent: "center",
    //alignItems: "center",
    //paddingVertical: 50,
    backgroundColor: "#dbe3e3",
    marginBottom: 20,
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    // marginHorizontal: 30,
    // marginVertical: 10,
    // padding: 20,
    // paddingVertical: 300,
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#297463",
    borderWidth: 0,
  },
  skipText: {
    color: "#6a7373",
    textAlign: "center",
  },
  farmersType: {
    width: "100%",
    backgroundColor: "green",
  },
  bottomSection: {
    padding: 20,
  },
  farmerTypeName: {
    fontWeight: "700",
    color: "#6a7373",
  },
  farmerTypeDesc: {
    color: "#9aa4a4",
  },
});
export default FarmerType;


