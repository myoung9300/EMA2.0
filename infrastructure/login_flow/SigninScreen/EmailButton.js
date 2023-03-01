import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import email from "react-native-email";
import styles from "../../app_flow/stack/styles";

const EmailButton = () => {
  const handleEmail = () => {
    email(["exclusivemartialarts@gmail.com"], {
      subject: "Username request",
      body: "Please send me my user name for EMA2.0.",
    }).catch(console.error);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={handleEmail}
        style={{ backgroundColor: "#0045b5", borderRadius: 10 }}
      >
        <Text
          style={[styles.signOut, { color: "white", paddingHorizontal: 20 }]}
        >
          EMAIL US
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EmailButton;
