import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import MiniCard from "../Youtube/miniCard";
import styles from "./styles";

const PlaylistKey = "PLTCcbu_9GgTjXloZ523Pd6vOdNE2EQkGb";
export const API_KEY = "AIzaSyDGdX_6R680MoskUWKy47IBIT7BI8l9H5k";

const BasicPlayer = () => {
  const [miniCardData, setMiniCard] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PlaylistKey}&maxResults=50&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMiniCard(data.items);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={() => fetchData()}
        refreshing={loading}
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              id={item.id}
              channel={item.snippet.channelTitle}
              videoId={item.snippet.resourceId.videoId}
              title={item.snippet.title}
              description={item.snippet.description}
            />
          );
        }}
        keyExtractor={(item) => item.snippet.resourceId.videoId}
      />
    </View>
  );
};

export default BasicPlayer;
