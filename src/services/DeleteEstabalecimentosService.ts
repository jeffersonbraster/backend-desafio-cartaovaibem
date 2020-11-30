import { getRepository } from "typeorm";
import Estabelecimentos from "../models/Estabelecimentos";

interface Request {
  id: string;
}

export default class DeleteEstabelecimentoService {
  public async execute({ id }: Request): Promise<void> {
    const estabelecimentoRepository = getRepository(Estabelecimentos);

    const estabelecimento = await estabelecimentoRepository.findOne(id);

    if (!estabelecimento) {
      throw new Error("identificação invalido");
    }

    await estabelecimentoRepository.remove(estabelecimento);
  }
}
