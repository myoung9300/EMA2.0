import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  View,
  Alert,
  Image,
  Text,
  SafeAreaView,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Auth } from "aws-amplify";

import EMABlue from "../../../assets/images/EMABlue.png";
import { styles } from "../inf_styles";
import CustomInput from "../SigninScreen/Custominput";
import CustomButton from "../SigninScreen/CustomButton";

const SignInScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPress = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      navigation.navigate("Tab");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };
  const onForgotPasswordPress = () => {
    navigation.navigate("Forgot Password");
  };
  const onConfirmationPress = () => {
    navigation.navigate("Confirm Account");
  };
  const onSignUp = () => {
    navigation.navigate("Sign Up");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.root}>
        <View style={styles.break} />
        <Image style={styles.logo} source={EMABlue} />
        <View style={styles.break} />
        <Text style={styles.text_bold}>
          Did you forget your username? See someone at the front counter when
          you are in next to recover it...
        </Text>
        <View style={styles.break} />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          type="PRIMARY"
          rules={{
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password should be minumium 6 characters long",
            },
          }}
        />
        <CustomButton
          text={loading ? "Loading..." : "Sign In"}
          onPress={handleSubmit(onSignInPress)}
        />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPress}
          type="TERTIARY"
        />
        <CustomButton
          text="Confirm your account..."
          onPress={onConfirmationPress}
          type="THIRD"
        />
        <View style={styles.break} />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUp}
          type="TERTIARY"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
