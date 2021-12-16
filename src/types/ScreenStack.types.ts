import { StackNavigationProp } from "@react-navigation/stack"
import { ImageSourcePropType } from "react-native"
import { PetProps } from "../interfaces/Pet.interface"

// Login Stack
export type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  HomeStack: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

// Animal Stack
export type PetStackParamList = {
  Home: undefined
  Pet: PetProps
  Castra: {
    title: string
    image: ImageSourcePropType
    castracao?: string
    data?: string
  }
  Vacina: {
    title: string
    image: ImageSourcePropType
    castracao?: string
    idade: string
    peso: string
    raca: string
    vacinacao?: {
      nome: string
      data: string
    }[]
  }
}
type PetScreenNavigationProp = StackNavigationProp<PetStackParamList>
export type PetTypes = {
  navigation: PetScreenNavigationProp
}