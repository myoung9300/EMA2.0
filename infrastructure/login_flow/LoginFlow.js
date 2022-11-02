import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { Auth, Hub } from "aws-amplify";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./SigninScreen/SigninScreen";
import SignUpScreen from "./SignUpScreen/SignUpScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen/ForgotPasswordScreen";
import ConfirmEmailScreen from "./ConfirmEmailScreen/ConfirmEmailScreen";
import PrivacyPolicy from "./SignUpScreen/PrivacyPolicy";
import TermsOfUse from "./SignUpScreen/TermsOfUse";
import NewPasswordScreen from "./NewPasswordScreen/NewPasswordScreen";
import TabNavigation from "../app_flow/tab/Tab";

const Login = createNativeStackNavigator();

const LoginFlow = () => {
  const [user, setUser] = useState(undefined);
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    };
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <Login.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#0045b5",
        },
      }}
    >
      {user ? (
        <Login.Screen
          name="Tab"
          options={{ headerShown: false }}
          component={TabNavigation}
        />
      ) : (
        <>
          <Login.Screen
            name="Sign In"
            options={{ headerShown: false }}
            component={SignInScreen}
          />
          <Login.Screen
            name="Sign Up"
            options={{ headerShown: false }}
            component={SignUpScreen}
          />
          <Login.Screen
            name="Forgot Password"
            options={{ headerShown: false }}
            component={ForgotPasswordScreen}
          />
          <Login.Screen
            name="New Password"
            options={{ headerShown: false }}
            component={NewPasswordScreen}
          />
          <Login.Screen
            name="Confirm Account"
            options={{ headerShown: false }}
            component={ConfirmEmailScreen}
          />
          <Login.Screen name="Privacy Policy" component={PrivacyPolicy} />
          <Login.Screen name="Terms of Use" component={TermsOfUse} />
        </>
      )}
    </Login.Navigator>
  );
};

export default LoginFlow;
