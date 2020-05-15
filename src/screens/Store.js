import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function Store() {
  const [showWebView, setShowWebView] = useState(false);
  const url = "https://www.bighaat.com/account/login";
  const myScript = `
      document.getElementById('customer_email').value = 'vinilk8@gmail.com';
      document.getElementById('customer_password').value = '22051995';
      document.getElementsByClassName('btn')[0].click();
      window.location.assign('https://www.bighaat.com/collections');
      true;
    `;

  const ActivityIndicatorLoadingView = () => {
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  };

  return (
    <WebView
      style={showWebView ? { flex: 1 } : { flex: 0 }}
      source={{ uri: url }}
      javaScriptEnabled
      injectedJavaScript={myScript}
      startInLoadingState
      renderLoading={ActivityIndicatorLoadingView}
      onLoadStart={() => {
        setShowWebView(false);
      }}
      onLoadEnd={() => {
        if (!showWebView) {
          setShowWebView(true);
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
