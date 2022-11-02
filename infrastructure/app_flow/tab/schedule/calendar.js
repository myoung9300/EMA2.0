import React from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
// import PdfReader from "rn-pdf-reader-js";

const CalendarScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <PdfReader
        source={{ uri: "https://ema-planner.herokuapp.com/Calendar.pdf" }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator color="blue" size="large" />}
      /> */}
    </SafeAreaView>
  );
};

export default CalendarScreen;
