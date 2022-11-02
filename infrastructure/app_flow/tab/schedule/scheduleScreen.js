import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles";

const ScheduleScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../../assets/images/EMABlue.png")}
        style={styles.image}
      />
      <View style={styles.break} />
      <Text style={styles.text}>Current Schedule and Calendar</Text>
      <View style={styles.break} />
      <TouchableOpacity onPress={() => navigation.navigate("Weekly Schedule")}>
        <Text style={styles.area}>Weekly Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
        <Text style={styles.area}>Monthly Calendar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
