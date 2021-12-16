import { IPet } from "../../../interfaces/Pet.interface";
import api from "../../api";

class PetData {
  index() {
    return api.get<IPet>('/pet')
  }
  update(id: number, data: string) {
    console.log(id, data)
    return api.put<IPet>(`//${id}`, { castracao: data })
  }
}

export default new PetData();