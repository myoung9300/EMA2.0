import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Lvl2Breakdown = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Ema Pass Yul Gok")}>
        <Text style={styles.Button}>Yul - Gok</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Ema Pass Chung Gun")}
      >
        <Text style={styles.Button}>Chung - Gun</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ema Pass Toi Gye")}>
        <Text style={styles.Button}>Toi - Gye</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Ema Pass Hwa Rang")}
      >
        <Text style={styles.Button}>Hwa - Rang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lvl2Breakdown;
