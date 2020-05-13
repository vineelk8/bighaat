import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Button } from "@ui-kitten/components";
import * as Location from "expo-location";

export default function LocationAccess(props) {
  const giveAccessHandler = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status === "granted") {
      props.navigation.navigate("FarmerType");
    }
  };

  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.Loc}>Location</Text>
        <Text style={styles.txt}>
          Allow access to Location to provide you the best relvant features on
          this App such as
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.locationImage}
            source={require("../../assets/images/location.png")}
          />
        </View>
        <Button style={styles.button} onPress={giveAccessHandler}>
          Give Access
        </Button>
        <Text style={styles.skipText}>
          <Text
            onPress={() => {
              props.navigation.navigate("FarmerType");
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
  imageContainer: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 1,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 31,
    paddingHorizontal: 50,
  },
  locationImage: {
    height: "100%",
    width: "100%",
  },
});
