import City from "../../models/City.js";

export default async (req, res) => {
  try {
    let deletedCity = await City.findByIdAndDelete(req.params.d_id);
    return res.status(200).json({
      success: true,
      message: "🚮 City Deleted!",
      response: deletedCity._id
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "🤒 City not Deleted 🤒",
      response: null
    })
  }
}
