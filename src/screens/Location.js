import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button, Linking } from "@ui-kitten/components";

export default function Location(props) {
  return (
    <View>
      <View>
        <Text style={styles.Loc}>Location</Text>
        <Text style={styles.txt}>
          To provide you with localized content,Company name needs access to
          your device's location.
        </Text>
      </View>
      <View>
        <Image
          style={{ width: "80%", height: "65%", paddingVertical: 50 }}
          source={require("../../assets/images/location.jpg")}
        />
        <Text style={styles.skipText}>
          <Text
            onPress={() => {
              Linking.openURL("http://www.google.com/");
            }}
          >
            Skip
          </Text>
        </Text>
        <Button
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("FarmerType");
          }}
        >
          Give Access
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Loc: {
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 50,
    paddingBottom: 20,
    paddingLeft: 30,
  },
  txt: {
    fontSize: 18,
    paddingLeft: 30,
    paddingBottom: 10,
  },
  skipText: {
    justifyContent: "center",
    paddingRight: 55,
  },
  button: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
