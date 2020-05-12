import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function Store() {
    const myScript = `
      document.getElementById('customer_email').value = 'vinilk8@gmail.com';
      document.getElementById('customer_password').value = '22051995';
      document.getElementsByClassName('btn')[0].click();
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: "https://www.bighaat.com/account/login" }}
                injectedJavaScript={myScript}
            />
            {/* <Text>open</Text> */}
        </View>
    );
}
