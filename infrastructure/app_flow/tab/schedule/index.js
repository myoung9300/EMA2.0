import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScheduleScreen from "./scheduleScreen";
import WeeklySchedule from "./weeklySchedule";
import CalendarScreen from "./calendar";

const Schedule = createNativeStackNavigator();

const ScheduleScreenNavigator = () => {
  return (
    <Schedule.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#0045b5",
        },
      }}
    >
      <Schedule.Screen
        options={{ headerShown: false }}
        name="ScheduleScreen"
        component={ScheduleScreen}
      />
      <Schedule.Screen name="Weekly Schedule" component={WeeklySchedule} />
      <Schedule.Screen name="Calendar" component={CalendarScreen} />
    </Schedule.Navigator>
  );
};

export default ScheduleScreenNavigator;
