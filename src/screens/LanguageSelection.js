import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Button } from "@ui-kitten/components";
import Card from "../components/Card";
import AppIntro from "../components/AppIntro";

const LanguageSelection = (props) => {
  const languages = [
    { shortform: "eng", longform: "English" },
    { shortform: "tel", longform: "తెలుగు" },
    { shortform: "hin", longform: "हिन्दी" },
  ];
  return (
    <View style={styles.Container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerHeading}>Namaste</Text>
        <Text style={styles.headerPara}>Choose your language</Text>
      </View>
      <View style={styles.languageContainer}>
        {languages.map((item, key) => (
          <View style={styles.elementContainer} key={key}>
            <Text
              onPress={() => {
                props.isLangSelected(true);
                props.langSelected(item.shortform);
              }}
              style={styles.languageTitle}
            >
              {item.longform}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //backgroundColor: "#f00",
    padding: 0,
    margin: 0,
  },
  headerSection: {
    flex: 1,
    backgroundColor: "#297463",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    borderBottomRightRadius: 50,
  },
  headerHeading: {
    fontWeight: "700",
    fontSize: 22,
    color: "#fff",
    marginBottom: 0,
  },
  headerPara: {
    fontWeight: "500",
    fontSize: 16,
    color: "#fff",
  },
  languageContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    //backgroundColor: "#009"
    padding: 10,
  },
  elementContainer: {
    backgroundColor: "#dbe3e3",
    borderRadius: 10,
    margin: 10,
    height: 110,
    flex: 1,
    borderBottomColor: "#c0cbcb",
    borderBottomWidth: 4,
    justifyContent: "center",
  },
  languageTitle: {
    color: "#9aa4a4",
    fontSize: 20,
    textAlign: "center",
  },
  bottomSection: {
    marginTop: 20,
    flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "flex-end",
    padding: 20,
  },
  privacyText: {
    color: "#6a7373",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#297463",
    borderWidth: 0,
  },
});
export default LanguageSelection;
