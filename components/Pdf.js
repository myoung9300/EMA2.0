import { ActivityIndicator, SafeAreaView } from "react-native";
import React from "react";
import WebView from "react-native-webview";

const Pdf = ({ uri }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: `https://ema-planner.herokuapp.com/${uri}.pdf` }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator color="black" size="large" />}
      />
    </SafeAreaView>
  );
};

export default Pdf;
