import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import Purchases from "react-native-purchases";
import styles from "../styles";
import { ENTITLEMENT_ID } from "./packageItem";

const RestorePurchasesButton = ({ navigation }) => {
  const restorePurchases = async () => {
    try {
      const restore = await Purchases.restorePurchases();
      if (typeof restore.entitlements.active[ENTITLEMENT_ID] !== "undefined") {
        navigation.navigate("EMA Pass Navigator");
      } else {
        Alert.alert(
          "ALERT",
          "It looks like there are no active subscriptions. Buy one to see all of the great content"
        );
      }
    } catch (e) {
      Alert.alert("OOPS. Something went wrong", e.message);
    }
  };

  return (
    <TouchableOpacity style={styles.Button} onPress={restorePurchases}>
      <Text style={styles.subHeadText}>Restore Purchase...</Text>
    </TouchableOpacity>
  );
};

export default RestorePurchasesButton;
