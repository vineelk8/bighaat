import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { weatherConditions } from "../utils/WeatherConditions";

export default function Weather(props) {
  const { weather, temperature } = props;
  return (
    <View
      style={[
        styles.weatherContainer,
      ]}
    >

      <View style={styles.weatherDegreeContainer}>
        <Text style={styles.tempText}>{temperature}˚</Text>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
      </View>
      <View style={styles.weatherSymbolContainer}>
        <MaterialCommunityIcons
          size={100}
          name={weatherConditions[weather].icon}
          color={"#fff"}
        />
      </View>
    </View>
  );
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string,
};

const styles = StyleSheet.create({
  weatherContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#abc4a4",
  },
  weatherDegreeContainer: {
    flex: 2,
  },
  weatherSymbolContainer: {
    flex: 1,
  },
  tempText: {
    fontSize: 54,
    fontWeight: "700",
    color: "#215273",
    padding: 0,
    margin: 0,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    padding: 0,
    margin: 0,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    padding: 0,
    margin: 0,
  },
});
