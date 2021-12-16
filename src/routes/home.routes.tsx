import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PetStack from "./pet.routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { Sair } from "../pages";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.green },
        headerTintColor: colors.white,
        headerTitle: () => <Text style={styles.title}>Animais</Text>,
        drawerStyle: {backgroundColor: colors.green},
        drawerInactiveTintColor: colors.white,
        drawerActiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="PetStack"
        component={PetStack}
        options={{
          drawerLabel: "Pets",
          drawerIcon: () => (
            <MaterialCommunityIcons name="dog" size={24} color={colors.white} />
          ),
        }}
      />

      <Drawer.Screen name="Sair" component={Sair} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});