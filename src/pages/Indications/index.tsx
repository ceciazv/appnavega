import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Container } from "./style";
import { Header, ButtonPets } from "../../components";

export default function Home() {
    const navigation = useNavigation();
    return (
        <Container>
            <title> Indicações</title>
            <text>
                Proteção: É dever do proprietário proteger seu animal do sol e da chuva, além de impedir que os bichinhos fujam ou saiam sozinhos na rua. Assim, evitamos brigas, atropelamentos, envenenamentos e crias indesejáveis.
                Alimentação: Oferecer sempre uma ração de boa qualidade, respeitando as características de cada animal e faixa etária (ração de filhote, adulto e idoso). E sempre disponibilizar água limpa e fresca.
                Passeios e Brincadeiras: Animais também precisam de atenção e carinho. Por isso, é necessário passear regularmente com os cães e brincar com brinquedos. Desse modo, estimulamos tanto a parte física quanto a psicológica, ajudando a prevenir doenças causadas por estresse e obesidade.
             </text>
        </Container>
    )
}
