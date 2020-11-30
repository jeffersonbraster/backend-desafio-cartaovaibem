import { Router } from "express";
import usersRouter from "./users.routes";
import estabelecimentoRouter from "./estabelecimento.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/estabelecimentos", estabelecimentoRouter);

export default routes;
