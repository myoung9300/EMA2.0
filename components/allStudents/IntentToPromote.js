import React from "react";
import { View, ActivityIndicator } from "react-native";
// import PdfReader from "rn-pdf-reader-js";

const Itp = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <PdfReader
        source={{
          uri: "https://ema-planner.herokuapp.com/ITP.pdf",
        }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator color="blue" size="large" />}
      /> */}
    </View>
  );
};

export default Itp;
