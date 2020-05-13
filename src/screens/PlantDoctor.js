import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const PlantDoctor = (props) => {
  return (
    <ScrollView>
      <View style={styles.headContainer}>
        <Text style={styles.headHeader}>
          Instructions
        </Text>
        <Text style={styles.headText}>Choose What Describes you the best</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodySecHeader}>3 Steps</Text>
        <Text style={styles.paraTxt}>Check the health of your crop and ensure it is fine. Perform the following steps</Text>
      </View>
      <View style={styles.sections}>
        <Image
          style={styles.stepsImage}
          source={require("../../assets/images/step1Img.jpg")}
          resizeMode="cover"
        />
        <Text style={styles.secParaTxt}>Go close to the plant and take a clear picture of the affected area. If healthy, take a clear photo in good light.</Text>
      </View>
      <View style={styles.sections}>
        <Image
          style={styles.stepsImage}
          source={require("../../assets/images/step2Img.jpg")}
          resizeMode="cover"
        />
        <Text style={styles.secParaTxt}>Upload the image to the site. You will see a list of possible diseases and symptoms.</Text>
      </View>
      <View style={styles.sections}>
        <Image
          style={styles.stepsImage}
          source={require("../../assets/images/step3Img.jpg")}
          resizeMode="cover"
        />
        <Text style={styles.secParaTxt}>Check the recommended treatments from our dealers. Go to the map to find the nearest dealer.</Text>
      </View>

    </ScrollView>
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
  headHeader: {
    fontWeight: "700",
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  headText: {
    color: "#fff",
  },
  bodySection: {
    margin: 20,
  },
  bodySecHeader: {
    fontWeight: "700",
    fontSize: 20,
    color: "#6a7373",
    marginBottom: 10,
  },
  paraTxt: {
    fontWeight: "500",
    fontSize: 16,
    color: "#717b7b",
    marginBottom: 0,
    paddingBottom: 20,
  },
  secParaTxt: {
    fontWeight: "500",
    fontSize: 16,
    color: "#717b7b",
    marginBottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  sections: {
    backgroundColor: "#fff",
    borderBottomColor: "#c0cbcb",
    borderBottomWidth: 3,
    padding: 0,
    marginBottom: 30,
  },
  stepsImage: {
    width: "100%",
    height: 200,
  },
});
export default PlantDoctor;
