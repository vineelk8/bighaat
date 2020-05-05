import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Input, Button, Linking } from "@ui-kitten/components";
import { ceil, greaterThan } from "react-native-reanimated";

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
            props.navigation.navigate({
              routeName: "GridScreen1",
            });
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
    //paddingVertical: 50,
    // paddingBottom: 20,
    // paddingLeft: 30,
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
    // marginHorizontal: 30,
    // marginVertical: 10,
    width: '100%',
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
    // backgroundColor: 'green',
  },
  locationImage: {
    width: '100%',
    height: '64%',
    marginBottom: 30,
    textAlign: "center",
  },
});
