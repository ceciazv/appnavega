import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Pets, CDRvaci } from "../pages";

const Stack = createStackNavigator();

export default function PetRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pets" component={Pets} />
      <Stack.Screen name="CDRvaci" component={CDRvaci} />
    </Stack.Navigator>
  );
}