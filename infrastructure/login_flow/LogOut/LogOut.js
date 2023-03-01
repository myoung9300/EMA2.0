import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Auth } from "aws-amplify";

import EMABlue from "../../../assets/images/EMABlue.png";
import styles from "../../app_flow/stack/styles";

const LogOut = () => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const userInfo = await Auth.currentUserInfo();
        setUserInfo(userInfo);
      } catch (error) {
        console.log("Error retrieving user information:", error);
      }
    };
    getUserInfo();
  }, []);

  const SignOut = () => {
    Auth.signOut();
  };
  const Delete = () => {
    Alert.alert(
      "!!!ALERT!!!",
      "If you delete your account, this can NOT be undone. You will have to go through the sign up process all over again",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "destructive",
        },
        { text: "OK", onPress: () => Auth.deleteUser(), style: "cancel" },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={EMABlue} />
      <View style={styles.break} />
      <Text style={styles.text}>
        Here you can Sign Out or you can delete your account all together:
      </Text>
      <View style={styles.break} />
      <View>
        {userInfo && (
          <>
            <Text
              style={[styles.text, { fontFamily: "Nunito_800ExtraBold" }]}
            >{`Username: ${userInfo.username}`}</Text>
            <Text
              style={[styles.text, { fontFamily: "Nunito_800ExtraBold" }]}
            >{`Email: ${userInfo.attributes.email}`}</Text>
          </>
        )}
      </View>
      <View style={styles.break} />
      <View style={{ marginTop: 10, marginHorizontal: 130 }}>
        <TouchableOpacity onPress={SignOut}>
          <Text style={styles.signOut}>Sign Out...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.break} />
      <View style={{ marginHorizontal: 20 }}>
        <TouchableOpacity onPress={Delete}>
          <Text style={styles.signOut}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogOut;
