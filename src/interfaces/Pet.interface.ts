import { ImageSourcePropType } from 'react-native'

export interface PetProps {
  id: number
  title: string
  image: ImageSourcePropType
  idade: string
  peso: string
  raca: string
  vacinacao: {
    id: number
    nome: string
    data: string
  }[]
}


export interface IPet {
  status: string,
  message: string,
  data: {
    id: number,
    nome: string,
    imagem: string,
    castracao: string,
    idade: string
    peso: string
    raca: string
    vacinacao: {
      id: number,
      nome: string,
      data: string
    }[]
  }[]
}

export interface IInterfacePet {
  id: number,
  nome: string,
  imagem: string,
  castracao: string,
  idade: string
  peso: string
  raca: string
  vacinacao: {
    id: number,
    nome: string,
    data: string
  }[]
}