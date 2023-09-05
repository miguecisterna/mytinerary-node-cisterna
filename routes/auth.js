import { Router } from "express";
import register from "../controllers/auth/register.js";

import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";


let authRouter = Router();

//register requiere de midlewares para validar/verificar/autenticar/etc...
  //validar datos con joi
  //validar que la cuenta no existe para que no haya re-registro
  //hashear la contraseña
authRouter.post('/register', validator(registerSchema), register)

export default authRouter;