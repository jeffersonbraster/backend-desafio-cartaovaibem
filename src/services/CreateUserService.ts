import { getRepository } from "typeorm";
import { hash } from "bcryptjs";
import User from "../models/User";

interface Request {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, cpf, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    //Verifica que já existe um usuário com o E-mail informado no cadastro
    const checkUserExist = await userRepository.findOne({ where: { email } });

    //Criptografa a senha do usuário
    const hashedpass = await hash(password, 7);

    //caso exista um email já cadastro, retorna um erro.
    if (checkUserExist) {
      throw new Error("Já existe usuário com esse E-mail");
    }

    //Cria o usuário caso ocorra tudo bem

    const user = userRepository.create({
      name,
      cpf,
      email,
      password: hashedpass,
    });

    //salva no banco de dados

    await userRepository.save(user);

    return user;
  }
}
