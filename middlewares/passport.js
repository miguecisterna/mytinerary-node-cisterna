import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
  "jwt",
  //obligo al pasaporte a usar una estrategia de extraccion de token
  new Strategy(                                                      
    //depende de objeto de configuracion de la estrategia
    {
      jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey : process.env.SECRET_KEY,
    },
    //callback quedepende de el resultado de la extraccion
    async(jwt_payload, done) => {
      try {
        let user = await User.findOne({ mail: jwt_payload.mail }, '-_id -__v -password');
        if(user) {
          return done(null, user); //si existe user inyecta al objeto de requerimientos el usuario con la propiedad user
        }else{
          return done(null);
        }
      } catch (error){
        return done(error);
      }
    }
  )
);