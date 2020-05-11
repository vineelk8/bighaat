import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";

import Login from "../screens/Login";
import OtpInput from "../screens/OtpInput";
import Location from "../screens/Location";
import FarmerType from "../screens/FarmerType";
import SelectCrop from "../screens/SelectCrop";
import Home from "../screens/Home";
import HealthCheck from "../screens/HealthCheck";
import Community from "../screens/Community";

const HomeTabNav = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <HomeTabNav.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            return <FontAwesome5 name="home" size={size} color={color} />;
          } else if (route.name === "HealthCheck") {
            return <MaterialIcons name="camera" size={size} color={color} />;
          } else if (route.name === "Community") {
            return <AntDesign name="form" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        fontWeight: "bold",
        activeTintColor: "blue",
      }}
    >
      <HomeTabNav.Screen name="Home" component={Home} />
      <HomeTabNav.Screen name="HealthCheck" component={HealthCheck} />
      <HomeTabNav.Screen name="Community" component={Community} />
    </HomeTabNav.Navigator>
  );
};

const BigHaatStackNavigator = createStackNavigator();

const BigHaatNavigator = () => {
  return (
    <BigHaatStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <BigHaatStackNavigator.Screen name="Login" component={Login} />
      <BigHaatStackNavigator.Screen name="OtpInput" component={OtpInput} />
      <BigHaatStackNavigator.Screen name="Location" component={Location} />
      <BigHaatStackNavigator.Screen name="FarmerType" component={FarmerType} />
      <BigHaatStackNavigator.Screen name="SelectCrop" component={SelectCrop} />
      <BigHaatStackNavigator.Screen
        name="HomeScreen"
        component={HomeTabNavigator}
      />
    </BigHaatStackNavigator.Navigator>
  );
};

export default BigHaatNavigator;
