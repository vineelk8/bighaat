import React, { useState } from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import BigHaatNavigator from "./src/navigation/MainNavigation";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AppIntro from "./src/components/AppIntro";
import LanguageSelection from "./src/screens/LanguageSelection";
import { LanguageContext } from "./src/context/languageContext";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);
  const [showRealApp, setShowRealApp] = useState(false);
  const [languageSelected, setLanguageSelected] = useState("");

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
    } else if (!showRealApp && !isLanguageSelected) {
      content = (
        <LanguageSelection
          isLangSelected={setIsLanguageSelected}
          langSelected={setLanguageSelected}
        />
      );
    } else {
      content = <AppIntro showAppFun={setShowRealApp} />;
    }
    return (
      <LanguageContext.Provider value={languageSelected}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>{content}</NavigationContainer>
        </ApplicationProvider>
      </LanguageContext.Provider>
    );
  }
};

export default App;
