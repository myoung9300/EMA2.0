import React, { memo } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import Purchases from "react-native-purchases";
import styles from "../styles";

export const ENTITLEMENT_ID = "pass";

const PackageItem = ({ data, setIsPurchasing }) => {
  const onSelection = async (data) => {
    setIsPurchasing(true);
    try {
      const { customerInfo } = await Purchases.purchasePackage(data);
      if (typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== null) {
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
