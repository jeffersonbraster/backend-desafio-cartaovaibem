import { getRepository } from "typeorm";

import Estabelecimentos from "../models/Estabelecimentos";

export default class ListInstitutionService {
  public async execute(): Promise<Estabelecimentos[]> {
    const estabelecimentosRepository = getRepository(Estabelecimentos);

    const list = await estabelecimentosRepository.find();

    return list;
  }
}
