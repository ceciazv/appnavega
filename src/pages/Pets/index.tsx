import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";
import { Container, Message, Pets } from "./style";
import { Header, Vac } from "../../components";
import { PetProps } from "../../interfaces/Pet.interface";
import { VacinaParamProps } from "../../interfaces/Vac.interface";

export default function Pet() {
  const route = useRoute();
  const { title, image, castracao, vacinacao, id } =
    route.params as PetProps;
  const navigation = useNavigation();
  function handleVacinaAnimal() {
    navigation.navigate("Vacina", { title, image });
  }
  function vacinaEdit(item: VacinaParamProps) {
    navigation.navigate("Vacina", { title, image, ...item });
  }
  function vacinaRemove(item: VacinaParamProps) {
    console.log("Vacina", { title, image, ...item });
  }

  return (
    <Container>
      <Header name={title} image={image} />
      <Vac
        title="Vacinação"
        onPress={handleVacinaAnimal}
        buttonEdit={vacinaEdit}
        buttonRemove={vacinaRemove}
        vacinacao={vacinacao}
      />
    </Container>
  );
  }