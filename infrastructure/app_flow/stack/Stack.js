import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../../../components/allStudents/homePage/index";

import BeltTesting from "../../../components/allStudents/BeltTesting";
import Itp from "../../../components/allStudents/IntentToPromote";
import KarateHomeWork from "../../../components/allStudents/KarateHomeworkCard";
import Notifications from "../../../components/allStudents/Notifications/Notifications";

import Subscription from "../../../components/emaPass/Subscription";
import PaywallScreen from "../../../components/emaPass/paywallscreen";
import EmaPass from "../../../components/emaPass/index";
import PrivacyPolicy from "../../login_flow/SignUpScreen/PrivacyPolicy";
import TermsOfUse from "../../login_flow/SignUpScreen/TermsOfUse";
import Lvl1Breakdown from "../../../components/emaPass/Lvl1Breakdown";
import Lvl2Breakdown from "../../../components/emaPass/Lvl2Breakdown";
import Lvl3Breakdown from "../../../components/emaPass/Lvl3Breakdown";
import EmaPassMon2 from "../../../components/emaPass/Mon2Breakdown";
import EmaPassChonJi from "../../../components/emaPass/EmaPass.youtube/EmaPass.Chonji";
import EmaPassTanGun from "../../../components/emaPass/EmaPass.youtube/EmaPass.TanGun";
import EmaPassToSan from "../../../components/emaPass/EmaPass.youtube/EmaPass.ToSan";
import EmaPassWonHyo from "../../../components/emaPass/EmaPass.youtube/EmaPass.WonHyo";
import EmaPassYulGok from "../../../components/emaPass/EmaPass.youtube/EmaPass.YulGok";
import EmaPassChungGun from "../../../components/emaPass/EmaPass.youtube/EmaPass.ChungGun";
import EmaPassToiGye from "../../../components/emaPass/EmaPass.youtube/EmaPass.ToiGye";
import EmaPassHwaRang from "../../../components/emaPass/EmaPass.youtube/EmaPass.HwaRang";
import EmaPassPoEun from "../../../components/emaPass/EmaPass.youtube/EmaPass.PoEun";
import EmaPassGyeBek from "../../../components/emaPass/EmaPass.youtube/EmaPass.GyeBek";
import EmaPassExodus from "../../../components/emaPass/EmaPass.youtube/EmaPass.Exodus";
import EmaPassChungMu from "../../../components/emaPass/EmaPass.youtube/EmaPass.ChungMu";

import BasicHomeScreen from "../../../components/basic";
import BasicPlayer from "../../../components/basic/Basic.Player";

import Level1 from "../../../components/level1";
import Level1Player from "../../../components/level1/Lv1.Player";
import Level1Standards from "../../../components/level1/standards";
import Level1Checklist from "../../../components/level1/checklist";
import Level1Spar from "../../../components/level1/sparringGear";
import Level1Manual from "../../../components/level1/manual";

import Level2 from "../../../components/level2";
import Level2Player from "../../../components/level2/Lv2.Player";
import Level2Manual from "../../../components/level2/manual";
import Level2Standards from "../../../components/level2/standards";
import Level2Checklist from "../../../components/level2/checklist";
import Level2Spar from "../../../components/level2/sparringGear";

import Level3 from "../../../components/level3";
import Level3Player from "../../../components/level3/Lv3.Player";
import Level3Manual from "../../../components/level3/manual";
import Level3Standards from "../../../components/level3/standards";
import Level3Checklist from "../../../components/level3/checklist";
import BlackBelt from "../../../components/blackBelt";
import BBPlayer from "../../../components/blackBelt/BB.Player";
import SecondBBPlayer from "../../../components/blackBelt/SecondBB.Player";
import BBTesting from "../../../components/blackBelt/BBTesting";
import Swat1 from "../../../components/blackBelt/swat1";

import Exclusive from "../../../components/exclusive";

const HomeStack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#0045b5",
        },
      }}
    >
      <HomeStack.Screen
        name="Home Page"
        options={{ headerShown: false }}
        component={HomePage}
      />

      <HomeStack.Screen name="Testing" component={BeltTesting} />
      <HomeStack.Screen name="Intent-To-Promote" component={Itp} />
      <HomeStack.Screen
        name="Karate Homework Card"
        component={KarateHomeWork}
      />
      <HomeStack.Screen name="Push Notifications" component={Notifications} />

      <HomeStack.Screen name="Subscription" component={Subscription} />
      <HomeStack.Screen
        name="Paywall Screen"
        options={{ headerShown: false }}
        component={PaywallScreen}
      />
      <HomeStack.Screen name="EMA Pass" component={EmaPass} />
      <HomeStack.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <HomeStack.Screen name="Terms of Use" component={TermsOfUse} />
      <HomeStack.Screen name="Level 1 Breakdowns" component={Lvl1Breakdown} />
      <HomeStack.Screen name="Level 2 Breakdowns" component={Lvl2Breakdown} />
      <HomeStack.Screen name="Level 3 Breakdowns" component={Lvl3Breakdown} />
      <HomeStack.Screen name="Month 2 Breakdowns" component={EmaPassMon2} />
      <HomeStack.Screen name="Ema Pass Chon Ji" component={EmaPassChonJi} />
      <HomeStack.Screen name="Ema Pass Tan Gun" component={EmaPassTanGun} />
      <HomeStack.Screen name="Ema Pass To San" component={EmaPassToSan} />
      <HomeStack.Screen name="Ema Pass Won Hyo" component={EmaPassWonHyo} />
      <HomeStack.Screen name="Ema Pass Yul Gok" component={EmaPassYulGok} />
      <HomeStack.Screen name="Ema Pass Chung Gun" component={EmaPassChungGun} />
      <HomeStack.Screen name="Ema Pass Toi Gye" component={EmaPassToiGye} />
      <HomeStack.Screen name="Ema Pass Hwa Rang" component={EmaPassHwaRang} />
      <HomeStack.Screen name="Ema Pass Po Eun" component={EmaPassPoEun} />
      <HomeStack.Screen name="Ema Pass Gye Bek" component={EmaPassGyeBek} />
      <HomeStack.Screen name="Ema Pass Exodus" component={EmaPassExodus} />
      <HomeStack.Screen name="Ema Pass Chung Mu" component={EmaPassChungMu} />

      <HomeStack.Screen name="Basic" component={BasicHomeScreen} />
      <HomeStack.Screen name="Basic Player" component={BasicPlayer} />

      <HomeStack.Screen name="Level 1" component={Level1} />
      <HomeStack.Screen name="Level 1 Curriculum" component={Level1Player} />
      <HomeStack.Screen name="Level 1 Standards" component={Level1Standards} />
      <HomeStack.Screen name="Level 1 Checklist" component={Level1Checklist} />
      <HomeStack.Screen name="Level 1 Sparring Gear" component={Level1Spar} />
      <HomeStack.Screen name="Level 1 Manual" component={Level1Manual} />

      <HomeStack.Screen name="Level 2" component={Level2} />
      <HomeStack.Screen name="Level 2 Curriculum" component={Level2Player} />
      <HomeStack.Screen name="Level 2 Manual" component={Level2Manual} />
      <HomeStack.Screen name="Level 2 Standards" component={Level2Standards} />
      <HomeStack.Screen name="Level 2 Checklist" component={Level2Checklist} />
      <HomeStack.Screen name="Level 2 Sparring Gear" component={Level2Spar} />

      <HomeStack.Screen name="Level 3" component={Level3} />
      <HomeStack.Screen name="Level 3 Curriculum" component={Level3Player} />
      <HomeStack.Screen name="Level 3 Manual" component={Level3Manual} />
      <HomeStack.Screen name="Level 3 Standards" component={Level3Standards} />
      <HomeStack.Screen name="Level 3 Checklist" component={Level3Checklist} />

      <HomeStack.Screen name="Black Belt" component={BlackBelt} />
      <HomeStack.Screen name="Black Belt Curriculum" component={BBPlayer} />
      <HomeStack.Screen
        name="2nd Degree Curriculum"
        component={SecondBBPlayer}
      />
      <HomeStack.Screen name="Black Belt Testing" component={BBTesting} />
      <HomeStack.Screen name="SWAT 1" component={Swat1} />

      <HomeStack.Screen name="Exclusive" component={Exclusive} />
    </HomeStack.Navigator>
  );
};
export default StackNavigation;
