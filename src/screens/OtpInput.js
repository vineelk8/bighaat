import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Input, Button } from "@ui-kitten/components";
import { FontAwesome } from "@expo/vector-icons";

import { LanguageContext } from "../context/languageContext";
import { getLanguage } from "../services/languageSelection";

export default function OtpInput(props) {
  const [mobileNo, setMobileNo] = useState();
  const [buttonState, setButtonState] = useState(false);

  const contextData = useContext(LanguageContext);
  let language = getLanguage(contextData);

  const mobileNumberChangeHandler = (value) => {
    setMobileNo(value);
    setButtonState(false);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        keyboardVerticalOffset={30}
        behavior="position"
        style={styles.viewContainer}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../../assets/images/bigHaatLogo.png")}
                resizeMode="contain"
              />
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>{language.login}</Text>
              <Text style={styles.loginOTP}>{language.enterotp}</Text>
              <Text style={styles.mobileText}>
                <FontAwesome name="phone" size={18} />
                {language.mobile}
              </Text>
              <Input
                style={styles.inputText}
                placeholder={language.entermobilenumber}
                value={mobileNo}
                onChangeText={mobileNumberChangeHandler}
              />
              <View style={styles.otpContainer}>
                <Input style={styles.otpInput} />
                <Input style={styles.otpInput} />
                <Input style={styles.otpInput} />
                <Input style={styles.otpInput} />
              </View>
              <Button
                style={styles.button}
                disabled={buttonState}
                onPress={() => {
                  props.navigation.navigate("LocationAccess");
                }}
              >
                {language.signin}
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 1,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 31,
    backgroundColor: "#49a38f",
    paddingHorizontal: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    //width: 442,
    //height: 143,
  },
  loginContainer: {
    margin: 0,
    padding: 20,
    display: "flex",
  },
  loginText: {
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 10,
  },
  loginOTP: {
    fontSize: 16,
    color: "#6a7373",
    marginBottom: 20,
  },
  mobileText: {
    color: "#87bc62",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 30,
    alignItems: "center",
  },
  inputText: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 6,
    borderColor: "#d6e3e3",
  },
  otpContainer: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otpInput: {},
  button: {
    width: "100%",
    backgroundColor: "#297463",
    borderWidth: 0,
  },
});
