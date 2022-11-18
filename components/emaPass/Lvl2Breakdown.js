import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Lvl2Breakdown = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Yul Gok")}
      >
        <Text style={styles.headText}>Yul - Gok</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Chung Gun")}
      >
        <Text style={styles.headText}>Chung - Gun</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Toi Gye")}
      >
        <Text style={styles.headText}>Toi - Gye</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Hwa Rang")}
      >
        <Text style={styles.headText}>Hwa - Rang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lvl2Breakdown;
