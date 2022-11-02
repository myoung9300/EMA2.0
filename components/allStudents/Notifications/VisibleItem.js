import React from "react";
import { View, TouchableHighlight, Text, Alert } from "react-native";
import styles from "./styles";

const VisableItem = (props) => {
  const { data } = props;

  const onPress = () => {
    Alert.alert(data.item.title, `Sent on: ${data.item.date}`);
  };

  return (
    <View style={styles.rowFront}>
      <TouchableHighlight onPress={onPress} style={styles.rowFrontVisible}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {data.item.title}
          </Text>
          <View style={styles.break} />
          <Text style={styles.details}>{data.item.message}</Text>
          <View style={styles.break} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default VisableItem;
