import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import Purchases from "react-native-purchases";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export const ENTITLEMENT_ID = "pass";

const PackageItem = ({ data, setIsPurchasing }) => {
  const navigation = useNavigation();
  const onSelection = async () => {
    setIsPurchasing(true);

    try {
      const { customerInfo } = await Purchases.purchasePackage(data);

      if (
        typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined"
      ) {
        navigation.navigate("EMA Pass");
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

export default PackageItem;
