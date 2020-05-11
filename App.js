import React, { useState } from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import BigHaatNavigator from "./src/navigation/MainNavigation";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
  });
};

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
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

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  } else {
    let content;

    if (showRealApp) {
      content = <BigHaatNavigator />;
    } else {
      content = (
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
    }
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>{content}</NavigationContainer>
      </ApplicationProvider>
    );
  }
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

const slides = [
  {
    key: "s1",
    title: "Crop Disease Ditection",
    text: "Take a picture of your crop to detect diseases and receive treatment advice",
    image: require("./assets/images/cropDiseaseDetectionImg.png"),
    backgroundColor: "#a5b372",
  },
  {
    key: "s2",
    title: "Community",
    text: "Ask a question about your crop to receive help from the community",
    image: require("./assets/images/communityImg.png"),
    backgroundColor: "#81bcd8",
  },
  {
    key: "s3",
    title: "Crop Advisory",
    text: "Receive farming advice about how to improve your yield",
    image: require("./assets/images/cropAdvisorImg.png"),
    backgroundColor: "#249f9e",
  },
];

export default App;
