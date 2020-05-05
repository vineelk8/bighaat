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
} from "react-native";
import { Input, Button } from "@ui-kitten/components";
import { FontAwesome } from "@expo/vector-icons";

export default function Login(props) {
  const [mobileNo, setMobileNo] = useState();
  const [buttonState, setButtonState] = useState(false);

  const mobileNumberChangeHandler = (value) => {
    setMobileNo(value);
    setButtonState(false);
  };

  return (
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
            <Text style={styles.mobileText}>
              <FontAwesome name="phone" size={20} /> Mobile Number
            </Text>
            <Input
              style={styles.inputText}
              placeholder="Enter Your Mobile Number"
              value={mobileNo}
              onChangeText={mobileNumberChangeHandler}
            />
            <Button
              style={styles.button}
              color="orange"
              disabled={buttonState}
              onPress={() => {
                props.navigation.navigate("OtpInput");
              }}
            >
              Send OTP
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  button: {
    marginTop: 10,
    width: "90%",
  },
});
