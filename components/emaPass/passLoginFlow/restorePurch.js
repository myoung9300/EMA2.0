import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import Purchases from "react-native-purchases";
import styles from "../styles";

const RestorePurchasesButton = ({ navigation }) => {
  const restorePurchases = async () => {
    if (await Purchases.restorePurchases()) {
      navigation.navigate("EMA Pass Navigator");
    }
  };

  return (
    <TouchableOpacity style={styles.Button} onPress={() => restorePurchases()}>
      <Text style={styles.subHeadText}>Restore Purchase...</Text>
    </TouchableOpacity>
  );
};

export default RestorePurchasesButton;
