import React from "react";
import {
  SafeAreaView,
  View,
  Linking,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-paper";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const InstructorCard = (props) => {
  const { id, name, pic2, aboutMe, email, position, calendly } =
    props.route.params.item;
  return (
    <SafeAreaView style={styles.flexContainer}>
      <LinearGradient colors={["#0045b5", "#91b6ff"]} style={styles.gradient} />
      <View style={{ alignItems: "center" }}>
        <Image style={styles.image} source={{ uri: pic2 }} />
      </View>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{position}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card style={styles.instructorProfileCard}>
          <View style={styles.instructorCardContent}>
            <Ionicons name="information-circle" size={32} color="#0045b5" />
            <Text style={styles.instructorCardText}>{aboutMe}</Text>
          </View>
        </Card>
        <Card
          style={styles.instructorProfileCard}
          onPress={() => {
            Linking.openURL(`mailto:${email}`);
          }}
        >
          <View style={styles.instructorCardContent}>
            <MaterialIcons name="email" size={32} color="#0045b5" />
            <Text style={styles.instructorCardText}>Have a question?</Text>
          </View>
        </Card>
        <Card
          style={styles.instructorProfileCard}
          onPress={() => {
            Linking.openURL(`${calendly}`);
          }}
        >
          <View style={styles.instructorCardContent}>
            <Ionicons name="calendar" size={32} color="#0045b5" />
            <Text style={styles.instructorCardText}>
              Schedule a private lesson
            </Text>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InstructorCard;
