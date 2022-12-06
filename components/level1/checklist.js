import React from "react";
import { View, ActivityIndicator } from "react-native";
import PdfReader from "rn-pdf-reader-js";

const Level1Checklist = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <PdfReader
        source={{
          uri: "https://ema-planner.herokuapp.com/Level1Curriculum.pdf",
        }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator color="black" size="large" />}
      />
    </View>
  );
};

export default Level1Checklist;
