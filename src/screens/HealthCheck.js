import React from "react";
import { StyleSheet, View, Text } from "react-native";
import WeatherWidget from "../components/WeatherWidget";
import { Button } from "@ui-kitten/components";

import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";

const WalkthroughableView = walkthroughable(View);

const HealthCheck = (props) => {
  return (
    <View>
      <View style={styles.headContainer}></View>
      <View style={styles.gridItem}>
        <CopilotStep
          text="Click to know more about Pest & Diseases!"
          order={1}
          name="Pest & Diseases"
        >
          <WalkthroughableView style={styles.container}>
            <Text>Pest & Diseases</Text>
          </WalkthroughableView>
        </CopilotStep>
        <CopilotStep
          text="Click here to know about Weather conditions"
          order={2}
          name="Weather"
        >
          <WalkthroughableView style={styles.container}>
            <WeatherWidget />
          </WalkthroughableView>
        </CopilotStep>
        <CopilotStep
          text="Click here for Fertilizer Calculator"
          order={3}
          name="Fertilizer"
        >
          <WalkthroughableView style={styles.container}>
            <Text>Fertilizer Calculator</Text>
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
    paddingVertical: 160,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  gridItem: {
    padding: 20,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#dbe3e3",
    marginBottom: 20,
    paddingTop: 50,
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomSection: {
    padding: 20,
  },
  button: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#297463",
    borderWidth: 0,
  },
});
export default copilot()(HealthCheck);
