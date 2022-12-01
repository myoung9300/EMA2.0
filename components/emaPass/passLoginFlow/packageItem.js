import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity } from "react-native";
import Purchases from "react-native-purchases";
import styles from "../styles";

export const ENTITLEMENT_ID = "pass";

const PackageItem = ({ data, setIsPurchasing }) => {
  const onSelection = async () => {
    setIsPurchasing(true);
    try {
      const { customerInfo } = await Purchases.purchasePackage(data);
      if (
        typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined"
      ) {
        // this is where a user gets lead to the EMA Pass screen...
        Alert.alert(
          "CONGRATS!!",
          "Click the Home button and then click the EMA Pass button again and you will be redirected..."
        );
      }
    } catch (e) {
      if (e.PurchaseCancelledError) {
        Alert.alert("OOPS... Something went wrong", e.message);
      }
    } finally {
      setIsPurchasing(false);
    }
  };

  return (
    <TouchableOpacity onPress={onSelection} style={styles.Button}>
      <Text style={styles.headText}>{data.product.priceString}</Text>
      <Text style={styles.bodyText}>{data.packageType}</Text>
    </TouchableOpacity>
  );
};

export default memo(PackageItem);
