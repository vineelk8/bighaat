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
  Alert,
  ScrollView,
} from "react-native";
import { Input, Button } from "@ui-kitten/components";
import { FontAwesome } from "@expo/vector-icons";

export default function OtpInput(props) {
  const [mobileNo, setMobileNo] = useState();
  const [buttonState, setButtonState] = useState(true);

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
                source={require("../../assets/images/wheat.jpg")}
                resizeMode="cover"
              />
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Login</Text>
              <Text style={styles.loginOTP}>Please Enter Your OTP</Text>
              <Text style={styles.mobileText}>
                <FontAwesome name="phone" size={20} /> Mobile Number
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
                color="orange"
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
    marginLeft: 30,
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  loginOTP: { marginTop: 10, fontSize: 18 },
  mobileText: {
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  inputText: {
    width: "90%",
    marginTop: 10,
  },
  otpContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  otpInput: { paddingRight: 35 },
  button: {
    marginTop: 10,
    width: "90%",
  },
});
