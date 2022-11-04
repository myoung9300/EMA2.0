import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import Purchases from "react-native-purchases";
import { PackageItem } from "./packageItem";
import styles from "./styles";

/*
 An example paywall that uses the current offering.
 */
const PaywallScreen = () => {
  // - State for all available package
  const [packages, setPackages] = useState([]);

  // - State for displaying an overlay view
  const [isPurchasing, setIsPurchasing] = useState(false);

  useEffect(() => {
    // Get current available packages
    const getPackages = async () => {
      try {
        const offerings = await Purchases.getOfferings();
        if (
          offerings.current !== null &&
          offerings.current.availablePackages.length !== 0
        ) {
          setPackages(offerings.current.availablePackages);
        }
      } catch (e) {
        Alert.alert("Error getting offers", e.message);
      }
    };

    getPackages();
  }, []);

  const header = () => <Text style={styles.text}>Magic Weather Premium</Text>;

  const footer = () => {
    return (
      <Text style={styles.text}>
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
    <View style={styles.page}>
      {/* The paywall flat list displaying each package */}
      <FlatList
        data={packages}
        renderItem={({ item }) => (
          <PackageItem
            purchasePackage={item}
            setIsPurchasing={setIsPurchasing}
          />
        )}
        keyExtractor={(item) => item.identifier}
        ListHeaderComponent={header}
        ListHeaderComponentStyle={styles.headerFooterContainer}
        ListFooterComponent={footer}
        ListFooterComponentStyle={styles.headerFooterContainer}
      />

      {isPurchasing && <View style={styles.overlay} />}
    </View>
  );
};

export default PaywallScreen;
