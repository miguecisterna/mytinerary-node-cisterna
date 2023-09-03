import City from "../../models/City.js"

export default async (req,res) =>{
try {
  let oneCity = await City.findOne({_id:req.params.id})
  .select("country city  photo smalldescription");
  return res.status(200).json({
    success: true,
    message: "City Found! 🎊",
    response: oneCity
  })

} catch (error) {
  return res.status(400).json({
    success: false,
    message: "City not found 😫",
    response: null
  })
}
}