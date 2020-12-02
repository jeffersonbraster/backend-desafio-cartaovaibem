import { getRepository } from "typeorm";
import Estabelecimento from "../models/Estabelecimentos";

interface Request {
  id: string;
}

export default class ListIdEstabelecimento {
  public async execute({ id }: Request): Promise<Estabelecimento> {
    const estabelecimentoRepository = getRepository(Estabelecimento);

    const estab = await estabelecimentoRepository.findOne(id);

    if (!estab) {
      throw new Error("Não foi encontrado estab.");
    }

    return estab;
  }
}
