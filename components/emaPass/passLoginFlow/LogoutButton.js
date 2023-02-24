import { View, Text, Alert, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import Purchases from "react-native-purchases";
import styles from "../styles";

const LogoutButton = ({ onLogout }) => {
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await Purchases.logOut();
    } catch (e) {
      Alert.alert("Error resetting purchases", e.message);
    }

    await onLogout();
    navigation.navigate("Paywall Screen");
  };

  return (
    <TouchableOpacity
      onPress={logout}
      style={[styles.Button, { marginHorizontal: 100 }]}
    >
      <Text style={styles.bodyText}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
