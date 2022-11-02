import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Lvl1Breakdown = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Ema Pass Chon Ji")}>
        <Text style={styles.Button}>Chon - Ji</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ema Pass Tan Gun")}>
        <Text style={styles.Button}>Tan - Gun</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ema Pass To San")}>
        <Text style={styles.Button}>To - San</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ema Pass Won Hyo")}>
        <Text style={styles.Button}>Won - Hyo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lvl1Breakdown;
