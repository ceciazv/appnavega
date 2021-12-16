import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CDRvaci, Home, Pets } from "../pages";
import { PetStackParamList } from "../types/ScreenStack.types";

const Stack = createStackNavigator<PetStackParamList>();

export default function AnimalRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pet" component={Pets} />
      <Stack.Screen name="Vacina" component={CDRvaci} />
    </Stack.Navigator>
  );
}