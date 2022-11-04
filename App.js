import React, { useEffect } from "react";
import { Platform } from "react-native";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import registerNNPushToken from "native-notify";
import { getPushDataObject } from "native-notify";

import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import Purchases from "react-native-purchases";
import { APPLE_API_KEY, GOOGLE_API_KEY } from "./components/emaPass/key";

import { Nunito_800ExtraBold } from "@expo-google-fonts/nunito";
import { PatrickHandSC_400Regular } from "@expo-google-fonts/patrick-hand-sc";
import { useFonts } from "expo-font";

import LoginFlow from "./infrastructure/login_flow/LoginFlow";

export default function App() {
  registerNNPushToken(2348, "hqEMgzJMPWeyd0tRiFUUPl");
  let pushDataObject = getPushDataObject("");

  useEffect(() => {
    if ("alertTitle" in pushDataObject) {
      Alert.alert(pushDataObject.alertTitle, pushDataObject.alertMessage);
    }
  });
  useEffect(() => {
    Purchases.setDebugLogsEnabled(true);
    if (Platform.OS === "ios") {
      Purchases.configure({ apiKey: APPLE_API_KEY });
    } else if (Platform.OS === "android") {
      Purchases.configure({ apiKey: GOOGLE_API_KEY });
    }
  }, []);

  Amplify.configure(awsconfig);
  let [fontsLoaded, error] = useFonts({
    Nunito_800ExtraBold,
    PatrickHandSC_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginFlow />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
