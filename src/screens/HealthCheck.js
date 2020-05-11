import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import WeatherWidget from "../components/WeatherWidget";
import { Button } from "@ui-kitten/components";

import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";
import Slider from "../components/Slider";

const WalkthroughableView = walkthroughable(View);

const HealthCheck = (props) => {
  return (
    <View>
      <View style={styles.headContainer}>
        <Slider />
      </View>
      <View style={styles.gridItem}>
        <CopilotStep
          text="Click to know more about Pest & Diseases!"
          order={2}
          name="Pest & Diseases"
        >
          <WalkthroughableView style={styles.pestDiseasesContainer}>
            <View style={styles.pdImgContainer}>
              <Image
                style={styles.pdImg}
                source={require("../../assets/images/pestsDiseasesIcon.png")}
              />
            </View>
            <View style={styles.pdTxtContainer}>
              <Text style={styles.pdTxtHeader}>Pest & Diseases</Text>
              <Text style={styles.pdTxtCntnt}>
                Know about pest & deseases related to Beetroot
              </Text>
            </View>
          </WalkthroughableView>
        </CopilotStep>
        <CopilotStep
          text="Click here to know about Weather conditions"
          order={3}
          name="Weather"
        >
          <WalkthroughableView style={styles.weatherContainer}>
            <WeatherWidget />
          </WalkthroughableView>
        </CopilotStep>
        <CopilotStep
          text="Click here for Fertilizer Calculator"
          order={4}
          name="Fertilizer"
        >
          <WalkthroughableView style={styles.fertilizorCalcContainer}>
            <View style={styles.pdImgContainer}>
              <Image
                style={styles.pdImg}
                source={require("../../assets/images/fertilizerCalculatorIcon.png")}
              />
            </View>
            <View style={styles.pdTxtContainer}>
              <Text style={styles.pdTxtHeader}>Fertilizer Calculator</Text>
              <Text style={styles.pdTxtCntnt}>
                Calculate the amount of Fertilizer required
              </Text>
            </View>
          </WalkthroughableView>
        </CopilotStep>
      </View>
      <View style={styles.bottomSection}>
        <Button style={styles.button} onPress={() => props.start()}>
          Screen Walkthrough
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: "#49a38f",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  gridItem: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  bottomSection: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#297463",
    borderWidth: 0,
  },
  weatherContainer: {
    //flex: 1,
    backgroundColor: "#abc4a4",
    borderRadius: 6,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 150,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  pestDiseasesContainer: {
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#dbe3e3",
    marginBottom: 20,
    padding: 20,
    //height: 110,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  pdImgContainer: {
    flex: 1,
    //backgroundColor: "#ff0",
  },
  pdImg: {
    width: 70,
    height: 70,
    resizeMode: "stretch",
  },
  pdTxtContainer: {
    flex: 3,
    //backgroundColor: "#009",
  },
  pdTxtHeader: {
    fontWeight: "700",
    fontSize: 20,
    color: "#6a7373",
  },
  pdTxtCntnt: {
    fontWeight: "400",
    fontSize: 16,
    color: "#929a9a",
  },
  fertilizorCalcContainer: {
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#dbe3e3",
    marginBottom: 20,
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default copilot()(HealthCheck);
