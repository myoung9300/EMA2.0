import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../../../components/allStudents/homePage/index";

import BeltTesting from "../../../components/allStudents/BeltTesting";
import Itp from "../../../components/allStudents/IntentToPromote";
import KarateHomeWork from "../../../components/allStudents/KarateHomeworkCard";
import Notifications from "../../../components/allStudents/Notifications/Notifications";

import PassNavigator from "../../../components/emaPass/passLoginFlow/index";

import PrivacyPolicy from "../../login_flow/SignUpScreen/PrivacyPolicy";
import TermsOfUse from "../../login_flow/SignUpScreen/TermsOfUse";

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
        headerTitleStyle: { fontSize: 20, fontFamily: "Nunito_800ExtraBold" },
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

      <HomeStack.Screen
        name="EMA Pass Navigator"
        options={{ headerShown: false }}
        component={PassNavigator}
      />
      <HomeStack.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <HomeStack.Screen name="Terms of Use" component={TermsOfUse} />

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
