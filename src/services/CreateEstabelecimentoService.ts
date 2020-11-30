import { getRepository } from "typeorm";
import Estabelecimentos from "../models/Estabelecimentos";

interface Request {
  name: string;
  description: string;
  address: string;
  city: string;
  uf: string;
  user_id: string;
}

export default class CreateEstabelecimentoService {
  public async execute({
    name,
    description,
    address,
    city,
    uf,
    user_id,
  }: Request): Promise<Estabelecimentos> {
    const estabelecimentosRepository = getRepository(Estabelecimentos);

    //Verifica se foi passado o usuário ao criar um estab
    if (!user_id) {
      throw new Error("sem id do usuário");
    }

    //Cria estabelecimento
    const estabelecimentos = estabelecimentosRepository.create({
      name,
      description,
      address,
      city,
      uf,
      user_id,
    });

    //salva no banco
    await estabelecimentosRepository.save(estabelecimentos);

    return estabelecimentos;
  }
}
