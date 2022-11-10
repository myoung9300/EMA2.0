import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Alert,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
} from "react-native";
import Purchases from "react-native-purchases";
import { PackageItem } from "./packageItem";
import styles from "./styles";

const PaywallScreen = () => {
  const [packages, setPackages] = useState([]);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const getPackages = async () => {
    try {
      const offerings = await Purchases.getOfferings();
      if (
        offerings.current !== null &&
        offerings.current.availablePackages.length !== 0
      ) {
        setPackages(offerings.current.availablePackages);
        console.log(offerings.current.availablePackages);
      }
    } catch (e) {
      Alert.alert("Error getting offers", e.message);
    }
  };
  useEffect(() => {
    getPackages();
  }, []);

  const Header = () => <Text style={styles.headText}>Exclusive Pass!</Text>;

  const Footer = () => {
    return (
      <Text style={styles.subHeadText}>
        A $2.99 per month or $32.99 per year purchase will be applied to your
        iTunes or Google account at the end of the trial on confirmation.
        Subscriptions will automatically renew unless canceled within 24-hours
        before the end of the current period. You can cancel anytime with your
        iTunes or Google account settings. Any unused portion of a free trial
        will be forfeited if you purchase a subscription. For more information,
        see our privacy Policy and Terms of Use.
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header />
      <View style={styles.break} />
      {!packages ? (
        <ActivityIndicator />
      ) : (
        packages.map((item) => (
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
        ))
      )}
      <View style={styles.break} />
      <Footer />
      {isPurchasing && <View style={styles.overlay} />}
    </SafeAreaView>
  );
};

export default PaywallScreen;
