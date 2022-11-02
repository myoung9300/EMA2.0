import React from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
// import PdfReader from "rn-pdf-reader-js";

const WeeklySchedule = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <PdfReader
        source={{ uri: "https://ema-planner.herokuapp.com/schedule.pdf" }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator color="blue" size="large" />}
      /> */}
    </SafeAreaView>
  );
};

export default WeeklySchedule;
