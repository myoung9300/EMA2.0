import React, { useEffect } from "react";
import { getPushDataObject } from "native-notify";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import LoginFlow from "./infrastructure/login_flow/LoginFlow";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { Nunito_800ExtraBold } from "@expo-google-fonts/nunito";
import { PatrickHandSC_400Regular } from "@expo-google-fonts/patrick-hand-sc";
import { useFonts } from "expo-font";
import registerNNPushToken from "native-notify";

export default function App() {
  registerNNPushToken(2348, "hqEMgzJMPWeyd0tRiFUUPl");
  let pushDataObject = getPushDataObject("");

  useEffect(() => {
    if ("alertTitle" in pushDataObject) {
      Alert.alert(pushDataObject.alertTitle, pushDataObject.alertMessage);
    }
  });

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
