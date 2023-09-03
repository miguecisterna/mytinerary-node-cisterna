import Itinerary from "../../models/Itinerary.js";

export default async (req, res) => {
  try {
    let search = {}

    if(req.query.city_id){
      search.city_id = req.query.city_id
    }

    let allItineraries = await Itinerary.find(search)
    return res.status(200).json({
      success: true,
      message: "🎉 Itenaries found! 🎉",
      response: allItineraries
    })
  } catch (error) {
    return res.status(400).json({
      succes: false,
      message: "😯 Itinerary not found",
      response: null
    })
  }
}