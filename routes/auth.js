import { Router } from "express";


import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import token from "../controllers/auth/token.js";

import isPassOk from "../middlewares/isPassOk.js";
import userDoesNotExist from "../middlewares/userDoesNotExist.js";
import isValidPass from "../middlewares/isValidPass.js";
import userAlreadyExist from "../middlewares/userAlreadyExist.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";

import signinSchema from "../schemas/signin.js";
import isValidToken from "../middlewares/isValidToken.js";
import passport from "../middlewares/passport.js";
import signout from "../controllers/auth/signout.js";



let authRouter = Router();

//register requiere de midlewares para validar/verificar/autenticar/etc...
  //validar datos con joi
  //validar que la cuenta no existe para que no haya re-registro
  //hashear la contraseña
authRouter.post(
  '/register', 
  validator(registerSchema), 
  userAlreadyExist, 
  isValidPass, 
  register
);
authRouter.post(
  '/signin', 
  validator(signinSchema), 
  userDoesNotExist, 
  isPassOk,
  isValidToken,
  signin
);
authRouter.post(
  '/token',
  passport.authenticate('jwt', {session:false}),              //middleware para destokenizar
  isValidToken, //middleware para generar un nuevo token
  token
);
authRouter.post(
  '/signout',  
  passport.authenticate('jwt', {session:false}),
  signout
)

export default authRouter;