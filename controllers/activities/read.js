import Activity from "../../models/Activity.js";

export default async (req, res) => {
  try {
    let allActivities = await Activity.find()
    return res.status(200).json({
      success: true,
      message: "🎉 Activities found! 🎉",
      response: allActivities
    })
  } catch (error) {
    return res.status(400).json({
      succes: false,
      message: "😯 Activity not found",
      response: null
    })
  }
}