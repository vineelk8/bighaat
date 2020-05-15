import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Fab from '../components/Fab';
import { LanguageContext } from "../context/languageContext";
import { getLanguage } from "../services/languageSelection";

const PlantDoctor = (props) => {
  const contextData = useContext(LanguageContext);
  let language = getLanguage(contextData);
  return (
    <View>
      <ScrollView>
        <View style={styles.headContainer}>
          <Text style={styles.headHeader}>
            {language.instructions}
          </Text>
          <Text style={styles.headText}>{language.instructionscontent}</Text>
        </View>
        <View style={styles.bodySection}>
          <Text style={styles.bodySecHeader}>3 {language.steps}</Text>
          <Text style={styles.paraTxt}>{language.cropcontent}</Text>
        </View>
        <View style={styles.sections}>
          <Image
            style={styles.stepsImage}
            source={require("../../assets/images/step1Img.jpg")}
            resizeMode="cover"
          />
          <Text style={styles.secParaTxt}>{language.cameracontent}</Text>
        </View>
        <View style={styles.sections}>
          <Image
            style={styles.stepsImage}
            source={require("../../assets/images/step2Img.jpg")}
            resizeMode="cover"
          />
          <Text style={styles.secParaTxt}>{language.uploadcontent}</Text>
        </View>
        <View style={styles.sections}>
          <Image
            style={styles.stepsImage}
            source={require("../../assets/images/step3Img.jpg")}
            resizeMode="cover"
          />
          <Text style={styles.secParaTxt}>{language.recommendationContent}</Text>
        </View>
      </ScrollView>
      <Fab iconName='camera' labelName='upload Photo' onSelect={() => {
        props.navigation.navigate("Kisanvedika");
      }} />
    </View>
  );
};
const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: "#49a38f",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  headHeader: {
    fontWeight: "700",
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  headText: {
    color: "#fff",
  },
  bodySection: {
    margin: 20,
  },
  bodySecHeader: {
    fontWeight: "700",
    fontSize: 20,
    color: "#6a7373",
    marginBottom: 10,
  },
  paraTxt: {
    fontWeight: "500",
    fontSize: 16,
    color: "#717b7b",
    marginBottom: 0,
    paddingBottom: 20,
  },
  secParaTxt: {
    fontWeight: "500",
    fontSize: 16,
    color: "#717b7b",
    marginBottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  sections: {
    backgroundColor: "#fff",
    borderBottomColor: "#c0cbcb",
    borderBottomWidth: 3,
    padding: 0,
    marginBottom: 30,
  },
  stepsImage: {
    width: "100%",
    height: 200,
  },
});
export default PlantDoctor;
