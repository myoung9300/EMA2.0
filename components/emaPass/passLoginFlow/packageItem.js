import React, { memo } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import Purchases from "react-native-purchases";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

export const ENTITLEMENT_ID = "EMA Pass";

const PackageItem = ({ data, setIsPurchasing }) => {
  const navigation = useNavigation();
  const onSelection = async () => {
    setIsPurchasing(true);
    try {
      //buy a package...
      const { customerInfo } = await Purchases.purchasePackage(data);
      if (
        typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined"
      ) {
        navigation.navigate("EMA Pass Navigator");
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
    <TouchableOpacity onPress={() => onSelection(data)} style={styles.Button}>
      <Text style={styles.headText}>{data.product.priceString}</Text>
      <Text style={styles.bodyText}>{data.packageType}</Text>
    </TouchableOpacity>
  );
};

export default memo(PackageItem);
