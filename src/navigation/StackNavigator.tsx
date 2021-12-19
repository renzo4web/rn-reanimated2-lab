import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import IntroScreen from "../screens/Intro.screen";
import PartOneScreen from "../screens/PartOne.screen";
import PartTwoScreen from "../screens/PartTwo.screen";

export type RootStackParamList = {
  Intro: undefined;
  One: undefined;
  Two: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="One" component={PartOneScreen} />
      <Stack.Screen name="Two" component={PartTwoScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
