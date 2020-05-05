import React, { useState } from "react";
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

export default function OtpInput(props) {
  const [mobileNo, setMobileNo] = useState();
  const [buttonState, setButtonState] = useState(false);

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
                source={require("../../assets/images/loginWheatImage.jpg")}
                resizeMode="cover"
              />
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Login</Text>
              <Text style={styles.loginOTP}>Please Enter Your OTP</Text>
              <Text style={styles.mobileText}>
                <FontAwesome name="phone" size={18} /> Mobile Number
              </Text>
              <Input
                style={styles.inputText}
                placeholder="Enter Your Mobile Number"
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
                  props.navigation.navigate("Location");
                }}
              >
                Sign In
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
  },
  image: {
    height: "100%",
    width: "100%",
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
    backgroundColor: "orange",
    borderWidth: 0,
  },
});
