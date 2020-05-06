import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button, Linking } from "@ui-kitten/components";

export default function Location(props) {
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.Loc}>Location</Text>
        <Text style={styles.txt}>
          To provide you with localized content, Company name needs access to
          your device's location.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Image
          style={styles.locationImage}
          source={require("../../assets/images/location.png")}
        />
        <Button
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("FarmerType");
          }}
        >
          Give Access
        </Button>
        <Text style={styles.skipText}>
          <Text
            onPress={() => {
              Linking.openURL("http://www.google.com/");
            }}
          >
            Skip
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Loc: {
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 20,
  },
  txt: {
    fontSize: 16,
    lineHeight: 24,
    color: "#6a7373",
  },
  skipText: {
    color: "#6a7373",
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#297463",
    borderWidth: 0,
  },
  topContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  locationImage: {
    width: "100%",
    height: "64%",
    marginBottom: 30,
  },
});
