import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Container, Pets } from "./style";
import { Header, ButtonPets } from "../../components";
import data from "../../services/data";
import { PetProps } from "../../interfaces/Pet.interface";

export default function Home() {
  const navigation = useNavigation();
  function handlePet(item: PetProps) {
    navigation.navigate("Pet", { ...item });
  }
  return (
    <Container>
      <Pets>
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
      </Pets>
    </Container>
  );
}