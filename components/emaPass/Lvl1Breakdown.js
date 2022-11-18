import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Lvl1Breakdown = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Chon Ji")}
      >
        <Text style={styles.headText}>Chon - Ji</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Tan Gun")}
      >
        <Text style={styles.headText}>Tan - Gun</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass To San")}
      >
        <Text style={styles.headText}>To - San</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Ema Pass Won Hyo")}
      >
        <Text style={styles.headText}>Won - Hyo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lvl1Breakdown;
