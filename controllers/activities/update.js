import Activity from '../../models/Activity.js';

export default async(req, res) => {
  try {
    let updatedActivity = await Activity.findByIdAndUpdate(
      req.params.u_id,
      req.body,
      {new:true}).select("name photo");
      return res.status(200).json({
        success: true,
        message: "✨ Activity Updated succesfully! ✨",
        response: updatedActivity
      })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Updaten't 😥",
      response: null
    })
  }
}