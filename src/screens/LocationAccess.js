import React, { useContext } from "react";
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

import { LanguageContext } from "../context/languageContext";
import { getLanguage } from "../services/languageSelection";
import { Body } from "native-base";

export default function LocationAccess(props) {
  const contextData = useContext(LanguageContext);
  let language = getLanguage(contextData);

  const giveAccessHandler = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status === "granted") {
      props.navigation.navigate("FarmerType");
    }
  };

  return (
    <ScrollView>
      <Body style={styles.bodyBgColor}>

        <View style={styles.headerSection}>
          <Text style={styles.headerHeading}>{language.location}</Text>
          <Text style={styles.headerPara}>{language.locationcontent}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <Text style={styles.listStyle}>1. Notifications of nearby Crops Planted</Text>
            <Text style={styles.listStyle}>2. Weather updates</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.locationImage}
              source={require("../../assets/images/location.png")}
            />
          </View>
        </View>
        <View style={styles.bottomSection}>
          <Button style={styles.button} onPress={giveAccessHandler}>
            {language.giveaccess}
          </Button>
          <Text style={styles.skipText}>
            <Text
              onPress={() => {
                props.navigation.navigate("FarmerType");
              }}
            >
              {language.skip}
            </Text>
          </Text>
        </View>

      </Body>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyBgColor: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 0,
    margin: 0,
  },
  headerSection: {
    backgroundColor: "#297463",
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 25,
    borderBottomRightRadius: 50,
  },
  headerHeading: {
    fontWeight: "700",
    fontSize: 22,
    color: "#fff",
    marginBottom: 10,
  },
  headerPara: {
    fontWeight: "500",
    fontSize: 16,
    color: "#fff",
    lineHeight: 22,
  },
  container: {
    padding: 20,
    margin: 0,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 1,
    //overflow: "hidden",
    //marginVertical: Dimensions.get("window").height / 31,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#f00",
  },
  locationImage: {
    width: "90%",
    height: "90%",
  },
  bottomSection: {
    width: "100%",
    padding: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#297463",
    borderWidth: 0,
    marginBottom: 20,
  },
  skipText: {
    width: "100%",
    color: "#6a7373",
    textAlign: "center",
  },
  listContainer: {
    paddingHorizontal: 20,
    margin: 0,
  },
  listStyle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#6a7373",
    borderColor: "#c0cbcb",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
