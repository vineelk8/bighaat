import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import OtpInput from "../screens/OtpInput";
import Location from "../screens/Location";

const BigHaatStackNavigator = createStackNavigator();

const BigHaatNavigator = () => {
  return (
    <BigHaatStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <BigHaatStackNavigator.Screen name="Login" component={Login} />
      <BigHaatStackNavigator.Screen name="OtpInput" component={OtpInput} />
      <BigHaatStackNavigator.Screen name="Location" component={Location} />
    </BigHaatStackNavigator.Navigator>
  );
};

export default BigHaatNavigator;
