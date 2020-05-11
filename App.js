import React, { useState } from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import BigHaatNavigator from "./src/navigation/MainNavigation";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AppIntro from "./src/components/AppIntro";

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
  });
};

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

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
      content = <AppIntro showAppFun={setShowRealApp} />;
    }
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>{content}</NavigationContainer>
      </ApplicationProvider>
    );
  }
};

export default App;
