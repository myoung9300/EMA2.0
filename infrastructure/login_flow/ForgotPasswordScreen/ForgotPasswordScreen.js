import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm } from "react-hook-form";

import { Auth } from "aws-amplify";

import CustomInput from "../SigninScreen/Custominput";
import CustomButton from "../SigninScreen/CustomButton";
import { styles } from "../inf_styles";

const ForgotPasswordScreen = ({ navigation }) => {
  const onSendPressed = async (data) => {
    try {
      await Auth.forgotPassword(data.username);
      Alert.alert("Success", "Code was sent to your email");
      navigation.navigate("New Password");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };
  const onSignInPressed = () => {
    navigation.navigate("Sign In");
  };

  const { control, handleSubmit } = useForm();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <View style={styles.break} />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />
        <View style={styles.break} />
        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
