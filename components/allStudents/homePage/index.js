import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
} from "react-native";
import { Auth } from "aws-amplify";

import styles from "../../../infrastructure/app_flow/stack/styles";

import EMABlue from "../../../assets/images/EMABlue.png";
import { ENTITLEMENT_ID } from "../../emaPass/passLoginFlow/packageItem";
import Purchases from "react-native-purchases";

const HomePage = ({ navigation }) => {
  const signOut = () => {
    Auth.signOut();
  };

  const checkrcUser = async () => {
    try {
      const customerInfo = await Purchases.getCustomerInfo();
      // access latest customerInfo
      if (
        typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined"
      ) {
        navigation.navigate("EMA Pass Navigator");
      } else {
        navigation.navigate("Paywall Screen");
      }
    } catch (e) {
      // Error fetching customer info
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={EMABlue} />
      <View style={{ marginTop: 10, marginHorizontal: 130 }}>
        <TouchableOpacity onPress={signOut}>
          <Text style={styles.signOut}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        Scroll and click on your level below to view:
      </Text>
      <Text style={styles.smallText}>1. Video Curriculum</Text>
      <Text style={styles.smallText}>2. Belt Testing Registration</Text>
      <Text style={styles.smallText}>3. And MORE!!</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Push Notifications")}
        >
          <Text style={[styles.area, { fontSize: 18, padding: 5 }]}>
            APP Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={checkrcUser}>
          <Text style={styles.area}>EMA Pass</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Basic")}>
          <Text style={styles.area}>Lil' Dragons & Basic</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Level 1")}>
          <Text style={styles.area}>Level 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Level 2")}>
          <Text style={styles.area}>Level 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Level 3")}>
          <Text style={styles.area}>Level 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Black Belt")}>
          <Text style={styles.area}>Black Belt</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Exclusive")}>
          <Text style={styles.area}>Exclusive</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage;
