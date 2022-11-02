import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  SafeAreaView,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Auth } from "aws-amplify";

import CustomInput from "../SigninScreen/Custominput";
import CustomButton from "../SigninScreen/CustomButton";
import { styles } from "../inf_styles";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const onRegisterPress = async (data) => {
    const { name, username, email, password } = data;
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name, preferred_username: username },
      });
      navigation.navigate("Confirm Email", { username });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };
  const onSignInPress = () => {
    navigation.navigate("Sign In");
  };
  const onTermsOfUsePressed = () => {
    navigation.navigate("Terms of Use");
  };
  const onPrivacyPolicyPressed = () => {
    navigation.navigate("Privacy Policy");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.break} />
        <CustomInput
          name="name"
          placeholder="Name: First and Last..."
          control={control}
          rules={{
            required: "Name is required",
            minLength: {
              value: 8,
              message: "Should be First and Last name",
            },
            maxLength: {
              value: 24,
              message: "Name should be max 24 characters long",
            },
          }}
        />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: "Username is required",
            minLength: {
              value: 5,
              message: "Username should be at least 5 characters long",
            },
            maxLength: {
              value: 24,
              message: "Username should be max 24 characters long",
            },
          }}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be at least 6 characters long",
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          placeholder="Re-enter Password"
          control={control}
          secureTextEntry
          rules={{
            validate: (value) => value === pwd || "Passwords do not match",
          }}
        />

        <CustomButton
          text={loading ? "Loading..." : "Register"}
          onPress={handleSubmit(onRegisterPress)}
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <View style={styles.break} />
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
