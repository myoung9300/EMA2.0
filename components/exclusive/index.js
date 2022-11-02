import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import styles from "./styles";

const Exclusive = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.break} />
      <Text style={styles.bigText}>Coming soon!</Text>
    </SafeAreaView>
  );
};

export default Exclusive;
