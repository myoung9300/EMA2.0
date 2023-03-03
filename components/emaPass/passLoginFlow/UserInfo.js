import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import Purchases from "react-native-purchases";

import LogInForm from "./LogInForm";
import { ENTITLEMENT_ID } from "./packageItem";
import LogoutButton from "./LogoutButton";
import styles from "../styles";

const UserInfo = ({ onLogin }) => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [userId, setUserId] = useState(null);
  const [subscriptionActive, setSubscriptionActive] = useState(false);

  // get the latest details about the user (is anonymous, user id, has active subscription)
  const getUserDetails = async () => {
    setIsAnonymous(await Purchases.isAnonymous());
    setUserId(await Purchases.getAppUserID());

    const customerInfo = await Purchases.getCustomerInfo();
    setSubscriptionActive(
      typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined"
    );
  };

  useEffect(() => {
    // Get user details when component first mounts
    getUserDetails();
  }, []);

  useEffect(() => {
    // Subscribe to purchaser updates
    Purchases.addCustomerInfoUpdateListener(getUserDetails);
    return () => {
      Purchases.removeCustomerInfoUpdateListener(getUserDetails);
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* The user's current app user ID and subscription status */}
      <View style={styles.break} />
      <Text style={styles.headText}>Current User Identifier</Text>
      <Text style={styles.bodyText}>{userId}</Text>
      <View style={styles.break} />
      <Text style={styles.headText}>Subscription Status</Text>
      <Text
        style={[
          { color: subscriptionActive ? "green" : "red" },
          styles.bodyText,
        ]}
      >
        {subscriptionActive ? "Active" : "Not Active"}
      </Text>
      <View style={styles.break} />
      {/* Authentication UI */}
      {isAnonymous ? (
        <LogInForm onLogin={getUserDetails} />
      ) : (
        <LogoutButton onLogout={getUserDetails} />
      )}
    </SafeAreaView>
  );
};

export default UserInfo;
