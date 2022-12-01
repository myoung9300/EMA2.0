import React, {memo} from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const SemiPVT = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        overScrollMode="always"
        contentInsetAdjustmentBehavior="scrollableAxes"
        source={{
          uri: "https://www.signupgenius.com/go/9040848a8aa23a1ff2-exclusive",
        }}
      />
    </SafeAreaView>
  );
};

export default memo(SemiPVT);
