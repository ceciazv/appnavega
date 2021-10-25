import { ImageSourcePropType } from 'react-native'

export interface PetProps {
  id: number
  title: string
  image: ImageSourcePropType
  castracao: string
  vacinacao: {
    id: number
    nome: string
    data: string
  }[]
}