import React, { useEffect, useState, memo } from "react";
import { View, Text, FlatList, Alert, SafeAreaView } from "react-native";
import Purchases from "react-native-purchases";
import PackageItem from "./packageItem";
import RestorePurchasesButton from "./restorePurch";
import styles from "../styles";
import { ActivityIndicator } from "react-native-paper";

const PaywallScreen = ({ navigation }) => {
  const [packages, setPackages] = useState([]);
  const [isPurchasing, setIsPurchasing] = useState(false);

  const getPackages = async () => {
    //show different packages...
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

  useEffect(() => {
    getPackages();
  }, []);

  const header = () => <Text style={styles.headText}>Exclusive Pass!</Text>;

  const footer = () => {
    return (
      <>
        <RestorePurchasesButton navigation={navigation} />
        <View style={styles.break} />
        <Text style={styles.subHeadText}>Trial Period Terms</Text>
        <Text style={styles.bodyText}>
          Any unused portion of a free trial period, will be forfited when your
          trial is converted to a paid subscription.
        </Text>
        <View style={styles.break} />
        <Text style={styles.subHeadText}>Subscription Terms</Text>
        <Text style={styles.bodyText}>
          * You can gain access to app features and premium content by
          subscribing to the plans above and making the purchase on a recurring
          basis for USD 2.99/month or USD 32.99/year. This is a subscription
          that will automatically renew every month/year according to your plan.
        </Text>
        <Text style={styles.bodyText}>
          * Payment wil be charged to either the App Store or Play Store at
          confirmation of purchase.
        </Text>
        <Text style={styles.bodyText}>
          * Subscription automatically renews unless auto-renew is turned off at
          least 24 hours before the end of the current period.
        </Text>
        <Text style={styles.bodyText}>
          * Account will be charged for renewal within 24 hours prior to the end
          of the current period, and identify the cost of the renewal.
        </Text>
        <View style={styles.break} />
        <Text style={styles.subHeadText}>Cancelation Terms</Text>
        <Text style={styles.bodyText}>
          * You can cancel your subscription and still have access to the
          purchased subscription until the end of your subscription period.
        </Text>
        <Text style={styles.bodyText}>
          * You should turn off auto-renewal at least 24 hours before the end of
          the current period to stop auto-renewal.
        </Text>
        <Text style={styles.bodyText}>
          * You may manage your subscription and/or turn off auto-renewal by
          visiting your Play Store account settings after purchase.
        </Text>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.page}>
      {!packages ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={packages}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => (
            <PackageItem data={item} setIsPurchasing={setIsPurchasing} />
          )}
          ListHeaderComponent={header}
          ListHeaderComponentStyle={styles.headerFooterContainer}
          ListFooterComponent={footer}
          ListFooterComponentStyle={styles.headerFooterContainer}
        />
      )}
      {isPurchasing && <View style={styles.overlay} />}
    </SafeAreaView>
  );
};

export default memo(PaywallScreen);
