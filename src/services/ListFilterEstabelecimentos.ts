import { getRepository } from "typeorm";

import Estabelecimentos from "../models/Estabelecimentos";

interface Request {
  city: string;
}

export default class ListFilterEstabelecimentosService {
  public async execute({ city }: Request): Promise<Estabelecimentos[]> {
    const estabelecimentosRepository = getRepository(Estabelecimentos);

    const list = await estabelecimentosRepository.find({ where: { city } });

    return list;
  }
}
