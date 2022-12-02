import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Purchases from "react-native-purchases";
import styles from "../styles";

const RestorePurchasesButton = () => {
  const navigation = useNavigation();
  const restorePurchases = async () => {
    try {
      const restore = async () => await Purchases.restorePurchases();
      // ... check restored purchaserInfo to see if entitlement is now active
      if (restore() === "undefined") {
        return null;
      } else {
        Alert.alert(
          "CONGRATS!!",
          "You are all set. Click on the 'EMA Pass' button to see all of the content."
        );
        navigation.navigate("Home Page");
      }
    } catch (e) {
      Alert.alert("Error getting offers", e.message);
    }
  };

  return (
    <TouchableOpacity style={styles.Button} onPress={restorePurchases}>
      <Text style={styles.subHeadText}>Restore Purchase...</Text>
    </TouchableOpacity>
  );
};

export default RestorePurchasesButton;
