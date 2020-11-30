import { Router } from "express";
//import { getCustomRepository } from "typeorm";

import CreateEstabelecimentoService from "../services/CreateEstabelecimentoService";
import UpdateEstabelecimentosService from "../services/UpdateEstabelecimentosService";
//import EstabelecimentoRepository from "../repositories/EstabelecimentoRepository";

const estabelecimentoRouter = Router();

estabelecimentoRouter.post("/", async (request, response) => {
  try {
    const { name, description, address, city, uf, user_id } = request.body;

    const createEstab = new CreateEstabelecimentoService();

    const estab = await createEstab.execute({
      name,
      description,
      address,
      user_id,
      city,
      uf,
    });

    return response.json(estab);
  } catch (error) {
    console.error(error);
  }
});

estabelecimentoRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { name, description, address, city, uf, user_id } = request.body;

    const updateEstab = new UpdateEstabelecimentosService();

    const estab = await updateEstab.execute({
      id,
      name,
      description,
      address,
      city,
      uf,
    });

    return response.json(estab);
  } catch (error) {
    console.error(error);
  }
});

export default estabelecimentoRouter;
