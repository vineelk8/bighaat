import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign, Feather } from "@expo/vector-icons";

import { slides } from "./../utils/AutoSliderData";

const AppIntro = (props) => {
  const onDone = () => {
    props.showAppFun(true);
  };
  const onSkip = () => {
    props.showAppFun(true);
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Feather
          name="skip-forward"
          size={20}
          color="rgba(255, 255, 255, .9)"
        />
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign
          name="arrowright"
          size={20}
          color="rgba(255, 255, 255, .9)"
        />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="check" size={20} color="rgba(255, 255, 255, .9)" />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onSkip}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    paddingVertical: 30,
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 16,
    paddingTop: 70,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppIntro;
