import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Purchases from "react-native-purchases";
import styles from "../styles";

const LogInForm = ({ onLogin }) => {
  const [newUserId, setNewUserId] = useState("");

  const login = async () => {
    if (!newUserId) {
      return;
    }

    try {
      await Purchases.logIn(newUserId);
    } catch (e) {
      Alert.alert("Error identifying user", e.message);
    }

    setNewUserId("");
    await onLogin();
  };

  return (
    <>
      <Text style={styles.subHeadText}>
        We want to know who you are. Please tell us who this is for?
      </Text>
      <TextInput
        value={newUserId}
        onChangeText={setNewUserId}
        onEndEditing={login}
        placeholder="Enter Name"
        placeholderTextColor="darkgrey"
        style={styles.subHeadText}
      />
    </>
  );
};

export default LogInForm;
