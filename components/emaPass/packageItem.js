import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import Purchases from "react-native-purchases";
import { useNavigation } from "@react-navigation/native";
import { ENTITLEMENT_ID } from "../emaPass/key";
import styles from "./styles";

const PackageItem = ({ item, setIsPurchasing }) => {
  return (
    <Pressable
      style={styles.Button}
      key={item.identifier}
      onPress={() => {
        setIsPurchasing(true);
      }}
    >
      <Text style={styles.headText}>{item.product.priceString}</Text>
      <Text style={styles.bodyText}>{item.packageType}</Text>
    </Pressable>
  );
};

export default PackageItem;
