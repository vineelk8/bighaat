import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Button } from "@ui-kitten/components";
import * as Location from 'expo-location';

export default function LocationAccess(props) {

  const giveAccessHandler = async () => {
    let {status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
      props.navigation.navigate("FarmerType");
    }
  }

  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.Loc}>Location</Text>
        <Text style={styles.txt}>
          Allow access to Location to provide you the best relvant features on this App such as
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Image
          style={styles.locationImage}
          source={require("../../assets/images/location.png")}
        />
        <Button
          style={styles.button}
          onPress={giveAccessHandler}
        >
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
  locationImage: {
    width: "100%",
    height: "70.75%",
    marginBottom: 30,
  },
});
