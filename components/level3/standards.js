import React from "react";
import { View, ActivityIndicator } from "react-native";
import PdfReader from "rn-pdf-reader-js";

const Level3Standards = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <PdfReader
        source={{
          uri: "https://ema-planner.herokuapp.com/Level_3_Rubric.pdf",
        }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator color="black" size="large" />}
      />
    </View>
  );
};

export default Level3Standards;
