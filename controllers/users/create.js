import User from "../../models/user.js";

export default async(req, res) => {
  //req: es el objeto donde el cliente me manda muchos datos importantes acerca de la petición
  //res: objeto de respuesta a devolver al cliente.
  //Las propiedades más importantes son:
  // -> BODY: objeto que generalmente se envia a través de formularios
  // -> PARAMS (parámetros): suelen ser estatícos como el ide de una ciudad a bucscar por ejemeplo.
  // -> QUERIES (consultas): son opcionales y nos indican algunas consultas/filtros/modos de ver la info/ de pagina, etc. 

  try {
    let newUser = await User.create(req.body);
    return res.status(201).json({
      succes : true,
      message: 'User created 🎃🎃',
      response: newUser._id
    })
  } catch (error) {
    return res.status(400).json({
      succes: false,
      message: "User couldn't be created",
      response: null
    })
  }
}