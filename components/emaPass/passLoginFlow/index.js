import React, { useEffect, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Purchases from "react-native-purchases";
import { ENTITLEMENT_ID } from "./packageItem";

import PaywallScreen from "./paywallscreen";
import EmaPassHome from "../PassHomeScreen";
import Lvl1Breakdown from "../Lvl1Breakdown";
import Lvl2Breakdown from "../Lvl2Breakdown";
import Lvl3Breakdown from "../Lvl3Breakdown";
import EmaPassMon2 from "../Mon2Breakdown";
import EmaPassChonJi from "../EmaPass.youtube/EmaPass.Chonji";
import EmaPassTanGun from "../EmaPass.youtube/EmaPass.TanGun";
import EmaPassToSan from "../EmaPass.youtube/EmaPass.ToSan";
import EmaPassWonHyo from "../EmaPass.youtube/EmaPass.WonHyo";
import EmaPassYulGok from "../EmaPass.youtube/EmaPass.YulGok";
import EmaPassChungGun from "../EmaPass.youtube/EmaPass.ChungGun";
import EmaPassToiGye from "../EmaPass.youtube/EmaPass.ToiGye";
import EmaPassHwaRang from "../EmaPass.youtube/EmaPass.HwaRang";
import EmaPassPoEun from "../EmaPass.youtube/EmaPass.PoEun";
import EmaPassGyeBek from "../EmaPass.youtube/EmaPass.GyeBek";
import EmaPassExodus from "../EmaPass.youtube/EmaPass.Exodus";
import EmaPassChungMu from "../EmaPass.youtube/EmaPass.ChungMu";
import { useNavigation } from "@react-navigation/native";

const PassNavigator = () => {
  const Pass = createNativeStackNavigator();
  const [rcUser, setRcUser] = useState();

  useEffect(() => {
    const checkMember = async () => {
      try {
        const customerInfo = await Purchases.getCustomerInfo();
        if (
          typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !==
          "undefined"
        ) {
          console.log("pro user");
          setRcUser();
        }
      } catch (e) {
        console.log(e);
      }
    };
    checkMember();
  }, []);
  return (
    <Pass.Navigator
      screenOptions={{
        headerTitleStyle: { fontSize: 20, fontFamily: "Nunito_800ExtraBold" },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#79B779",
        },
      }}
    >
      {rcUser === null ? (
        <Pass.Screen
          name="Paywall Screen"
          options={{
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "#79B779",
            },
          }}
          component={PaywallScreen}
        />
      ) : (
        <>
          <Pass.Screen
            name="EMA Pass"
            options={{
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassHome}
          />
          <Pass.Screen
            name="Level 1 Breakdowns"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={Lvl1Breakdown}
          />
          <Pass.Screen
            name="Level 2 Breakdowns"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={Lvl2Breakdown}
          />
          <Pass.Screen
            name="Level 3 Breakdowns"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={Lvl3Breakdown}
          />
          <Pass.Screen
            name="Month 2 Breakdowns"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassMon2}
          />
          <Pass.Screen
            name="Ema Pass Chon Ji"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassChonJi}
          />
          <Pass.Screen
            name="Ema Pass Tan Gun"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassTanGun}
          />
          <Pass.Screen
            name="Ema Pass To San"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassToSan}
          />
          <Pass.Screen
            name="Ema Pass Won Hyo"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassWonHyo}
          />
          <Pass.Screen
            name="Ema Pass Yul Gok"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassYulGok}
          />
          <Pass.Screen
            name="Ema Pass Chung Gun"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassChungGun}
          />
          <Pass.Screen
            name="Ema Pass Toi Gye"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassToiGye}
          />
          <Pass.Screen
            name="Ema Pass Hwa Rang"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassHwaRang}
          />
          <Pass.Screen
            name="Ema Pass Po Eun"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassPoEun}
          />
          <Pass.Screen
            name="Ema Pass Gye Bek"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassGyeBek}
          />
          <Pass.Screen
            name="Ema Pass Exodus"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassExodus}
          />
          <Pass.Screen
            name="Ema Pass Chung Mu"
            options={{
              headerStyle: {
                backgroundColor: "#79B779",
              },
            }}
            component={EmaPassChungMu}
          />
        </>
      )}
    </Pass.Navigator>
  );
};

export default PassNavigator;
