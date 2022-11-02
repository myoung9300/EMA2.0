import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Lvl3Breakdown = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Ema Pass Chung Mu")}
      >
        <Text style={styles.Button}>Chung - Mu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ema Pass Po Eun")}>
        <Text style={styles.Button}>Po - Eun</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ema Pass Gye Bek")}>
        <Text style={styles.Button}>Gye - Bek</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ema Pass Exodus")}>
        <Text style={styles.Button}>Exodus</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lvl3Breakdown;
