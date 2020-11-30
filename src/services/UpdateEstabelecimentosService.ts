import { getRepository } from "typeorm";
import Estabelecimentos from "../models/Estabelecimentos";

interface Request {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  uf: string;
}

export default class UpdateEstabelecimentosService {
  public async execute({
    id,
    name,
    description,
    address,
    city,
    uf,
  }: Request): Promise<Estabelecimentos> {
    const estabelecimentosRepository = getRepository(Estabelecimentos);

    const estabelecimento = await estabelecimentosRepository.findOne(id);

    if (!estabelecimento) {
      throw new Error("estabelecimento não encontrado");
    }

    estabelecimento.name = name;
    estabelecimento.description = description;
    estabelecimento.address = address;
    estabelecimento.city = city;
    estabelecimento.uf = uf;

    await estabelecimentosRepository.save(estabelecimento);

    return estabelecimento;
  }
}
