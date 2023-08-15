import User from "../../models/User.js";

export default async (req,res) => {
  try {
    let oneUser = await User.findOne({_id: req.params.id }).select("mail photo -_id");     //busca según el objeto de condiciones(en este caso le paso el id).
    // let ondeUserId = await User.findById(req.params.id);      //busca solo por id.
    return res.status(200).json({
      succes: true,
      message: "User found 🔎",
      response: oneUser
    });
  } catch (error) {
    return res.status(400).json({
      succes: false,
      message: "not found 😒",
      response: null
    })
  }
}