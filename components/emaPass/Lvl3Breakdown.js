import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Lvl3Breakdown = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Chung Mu")}
      >
        <Text style={styles.headText}>Chung - Mu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Po Eun")}
      >
        <Text style={styles.headText}>Po - Eun</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Gye Bek")}
      >
        <Text style={styles.headText}>Gye - Bek</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Exodus")}
      >
        <Text style={styles.headText}>Exodus</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lvl3Breakdown;
