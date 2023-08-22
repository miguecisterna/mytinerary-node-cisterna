import City from "../../models/City.js";

export default async (req,res,next) => {
  try {
  
    //let objetoDeBusqueda = { admin_id: "64d644d4c75ded30a8549377"};
    
    let objetoDeBusqueda = {};
    let objetoDeOrdenamiento = {};

    if(req.query.admin_id){
      objetoDeBusqueda.admin_id = req.query.admin_id;
    }

    if(req.query.city){
      objetoDeBusqueda.city = new RegExp('^'+ req.query.city,'i');
    }

    if(req.query.sort){
      objetoDeOrdenamiento.city = req.query.sort;
    }

    let allCities = await City
    .find(objetoDeBusqueda,'country city photo smaldescription admin_id')
    .populate('admin_id','photo name mail -_id')
    .sort(objetoDeOrdenamiento)  // ----> esta alternativa es i quiero hacer un filtro
    
    //let allCities = await City.find().select('country city photo smaldescription admin_id').populate('admin_id','photo name mail -_id')  //
    
    if(allCities.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Cities Found 🐱‍👤",
        response: allCities
      }) 
    }else{
      return res.status(400).json({
        success: false,
        message: "Cities not found 😫",
        response: null
      })
    }

  } catch (error) {
    next(error);
  }
}