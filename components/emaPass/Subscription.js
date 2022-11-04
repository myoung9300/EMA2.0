import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import styles from "./styles";

const Subscription = ({ navigation }) => {
  const onTermsOfUsePressed = () => {
    navigation.navigate("Terms of Use");
  };
  const onPrivacyPolicyPressed = () => {
    navigation.navigate("Privacy Policy");
  };
  const onMonthlyPressed = () => {
    navigation.navigate("Paywall Screen");
  };
  const onYearlyPressed = () => {
    navigation.navigate("Paywall Screen");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headText}>Buy Subscription</Text>
        <Text style={styles.bodyText}>
          To access this premium ad-free content, become a EMA Pass member by
          subscribing below
        </Text>
        <View style={styles.break} />
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <View>
            <Button title="Monthly" onPress={onMonthlyPressed} />
          </View>
          <View>
            <Button title="Yearly" onPress={onYearlyPressed} />
          </View>
        </View>
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
        <View style={styles.break} />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            paddingEnd: 40,
          }}
        >
          <TouchableWithoutFeedback onPress={onPrivacyPolicyPressed}>
            <Text style={(styles.ruleText, { paddingHorizontal: 30 })}>
              Privacy Policy
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onTermsOfUsePressed}>
            <Text>Terms and Conditions</Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
      <View style={styles.break} />
    </SafeAreaView>
  );
};

export default Subscription;
