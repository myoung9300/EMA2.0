import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassSignUp from "./classSignUpScreen";
import Classes from "./classes";
import InstructorPVT from "./instructors/index";
import SemiPVT from "./semiPVT";
import InstructorCard from "./instructors/instructorCard";

const Class = createNativeStackNavigator();

const ClassScreenNavigator = () => {
  return (
    <Class.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#0045b5",
        },
      }}
    >
      <Class.Screen
        options={{ headerShown: false }}
        name="Class Screen"
        component={ClassSignUp}
      />
      <Class.Screen name="Weekly Schedule" component={Classes} />
      <Class.Screen name="Private Lessons" component={InstructorPVT} />
      <Class.Screen name="Semi pvt Lessons" component={SemiPVT} />
      <Class.Screen
        name="Instructor Card"
        headerShown={false}
        component={InstructorCard}
      />
    </Class.Navigator>
  );
};

export default ClassScreenNavigator;
