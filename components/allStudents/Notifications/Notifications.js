import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

import VisableItem from "./VisibleItem";
import styles from "./styles";

const Notifications = () => {
  const [pushData, setPushData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get(
        `https://app.nativenotify.com/api/notification/inbox/2348/hqEMgzJMPWeyd0tRiFUUPl`
      )
      .then((res) => {
        setPushData(res.data.slice(0, 4));
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const renderItem = (data) => {
    return <VisableItem data={data} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.break} />
      <Text style={[styles.bigText, { fontSize: 18 }]}>
        App notifications will show here
      </Text>
      <Text style={styles.smallText}>
        Click on a notification to see when it was sent...
      </Text>
      <FlatList
        data={pushData}
        refreshing={loading}
        onRefresh={() => getData()}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
};
export default Notifications;
