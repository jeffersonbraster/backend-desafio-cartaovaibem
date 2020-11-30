import { Router } from "express";
import usersRouter from "./users.routes";
import sessionRouter from "./sessions.routes";
import estabelecimentoRouter from "./estabelecimento.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionRouter);
routes.use("/estabelecimentos", estabelecimentoRouter);

export default routes;
