import { Router } from "express";
import CreateUserServices from "../services/CreateUserService";

const usersRouter = Router();

usersRouter.post("/", async (request, response) => {
  const { name, cpf, email, password } = request.body;

  const createUser = new CreateUserServices();

  const user = await createUser.execute({
    name,
    cpf,
    email,
    password,
  });
  return response.json(user);
});

export default usersRouter;
