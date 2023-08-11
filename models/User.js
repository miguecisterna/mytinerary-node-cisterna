import { model, Schema } from "mongoose";

// lo primero que necesitamos crear es el espacio virtual donde se van a guardar todos los documentos/modelos, es decir la COLECCION (conjunto de documentos/modelos de datos)

let collection = 'users';

//lo siguiente es definir el esquema de datos del modelo.

let schema = new Schema({
  name: { type:String, required:true}, //por default todos los datos son opcionales (required:false).
  lastName: { type:String },            //si el dato es opcional no lleva required.
  mail: { type:String, required:true, unique:true }, //unique:true no me permite registrar dos veces el mismo mail
  photo: { type:String, default:"https://cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg" },
  password: { type:String, required:true },
  country: { type:String, required:true }
})

//para crear un modelo de datos, utilizo el metodo model 
//pasando por parametro deonde tengo que crear los documentos y con que Forma.

let User = model(collection, schema)

export default User;