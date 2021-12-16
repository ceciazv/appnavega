import React from "react";
import { FlatList, StyleSheet, SafeAreaView, Text, View } from "react-native";

import { Header, ButtonPets} from "../../components";
import data from "../../services/data";
import { PetProps } from "../../interfaces/Pet.interface";
import { PetTypes } from "../../types/ScreenStack.types";
import { useAuth } from "../../hook/auth";

export default function Home({ navigation }: PetTypes) {
  const { user } = useAuth();
  function handlePet(item: PetProps) {
    navigation.navigate("Pet", { ...item });
  }
  return (
    <SafeAreaView style={styles.container}>
      {user && (
        <Header
          hello="Olá"
          name={user?.name}
          image={{ uri: user.profile_photo_url }}
        />
      )}
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ButtonPets
              key={item.id}
              title={item.title}
              onPress={() => handlePet(item)}
              image={item.image}
            />
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 110,
    marginTop: 10,
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
});