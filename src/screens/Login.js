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
  const [buttonState, setButtonState] = useState(true);

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
              source={require("../../assets/images/loginWheatImage.jpg")}
              resizeMode="cover"
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.mobileText}>
              <FontAwesome name="phone" size={18} /> Mobile Number
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
    width: "100%",
    height: "100%",
  },
  loginContainer: {
    margin: 0,
    padding: 20,
    //backgroundColor: "blue",
    display: 'flex',
  },
  loginText: {
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 20,
  },
  mobileText: {
    color: "#87bc62",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 30,
    alignItems: 'center',
  },
  inputText: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 6,
    borderColor: "#d6e3e3",
  },
  button: {
    width: "100%",
    backgroundColor: "#c9d3d3",
    borderWidth: 0,
  },
});
