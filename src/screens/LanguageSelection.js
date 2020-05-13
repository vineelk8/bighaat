import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Button } from "@ui-kitten/components";
import Card from "../components/Card";
import AppIntro from "../components/AppIntro";

const LanguageSelection = (props) => {
  const languages = [
    { shortform: "eng", longform: "English" },
    { shortform: "tel", longform: "Telugu" },
    { shortform: "hin", longform: "Hindi" },
  ];
  return (
    <View style={styles.Container}>
      <Text>Namaste</Text>
      {languages.map((item, key) => (
        <View style={styles.elementContainer} key={key}>
          <Text
            onPress={() => {
              props.isLangSelected(true);
              props.langSelected(item.shortform);
            }}
            style={styles.text}
          >
            {item.longform}
          </Text>
          <View style={styles.separator} />
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#297463",
    borderWidth: 0,
  },
  elementContainer: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
  },
  text: {
    color: "#191919",
    fontSize: 25,
  },
  separator: {
    height: 0.5,
    width: "60%",
    backgroundColor: "#C2C2C2",
    marginTop: 10,
  },
});
export default LanguageSelection;
