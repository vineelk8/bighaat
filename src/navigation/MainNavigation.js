import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";

import Login from "../screens/Login";
import OtpInput from "../screens/OtpInput";
import LocationAccess from "../screens/LocationAccess";
import FarmerType from "../screens/FarmerType";
import SelectCrop from "../screens/SelectCrop";
import Home from "../screens/Home";
import PlantDoctor from "../screens/PlantDoctor";
import Store from "../screens/Store";
import Community from "../screens/Community";
import ReplyScreen, { replyScreenOptions } from "../screens/ReplyScreen";
import Kisanvedika, { KisanvedikaOptions } from "../screens/KisanvedikaScreen";
const HomeTabNav = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <HomeTabNav.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            return <FontAwesome5 name="home" size={size} color={color} />;
          } else if (route.name === "Store") {
            return <FontAwesome5 name="store" size={size} color={color} />;
          } else if (route.name === "PlantDoctor") {
            return <FontAwesome5 name="spa" size={size} color={color} />;
          } else if (route.name === "KisanVedika") {
            return <FontAwesome5 name="users" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        fontWeight: "bold",
        activeTintColor: "blue",
      }}
    >
      <HomeTabNav.Screen name="Home" component={Home} />
      <HomeTabNav.Screen name="Store" component={Store} />
      <HomeTabNav.Screen name="KisanVedika" component={Community} />
      <HomeTabNav.Screen name="PlantDoctor" component={PlantDoctor} />
    </HomeTabNav.Navigator>
  );
};

const BigHaatStackNavigator = createStackNavigator();

const BigHaatNavigator = () => {
  return (
    <BigHaatStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <BigHaatStackNavigator.Screen name="Login" component={Login} />
      <BigHaatStackNavigator.Screen name="OtpInput" component={OtpInput} />
      <BigHaatStackNavigator.Screen name="LocationAccess" component={LocationAccess} />
      <BigHaatStackNavigator.Screen name="FarmerType" component={FarmerType} />
      <BigHaatStackNavigator.Screen name="SelectCrop" component={SelectCrop} />
      <BigHaatStackNavigator.Screen options={replyScreenOptions} name="ReplyScreen" component={ReplyScreen} />
      <BigHaatStackNavigator.Screen options={KisanvedikaOptions} name="Kisanvedika" component={Kisanvedika} />
      <BigHaatStackNavigator.Screen
        name="HomeScreen"
        component={HomeTabNavigator}
      />
    </BigHaatStackNavigator.Navigator>
  );
};

export default BigHaatNavigator;
