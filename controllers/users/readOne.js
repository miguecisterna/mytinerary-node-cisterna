import User from "../../models/User.js";

export default async (req,res,next) => {
  try {
    let oneUser = await User.findOne({_id: req.params.id })
    .select("mail photo -_id");     //busca según el objeto de condiciones(en este caso le paso el id).
    // let ondeUserId = await User.findById(req.params.id);      //busca solo por id.
    if(oneUser){
      return res.status(200).json({
        succes: true,
        message: "User found 🔎",
        response: oneUser
      });
    }else{
      return res.status(404).json({
        success: false,
        message: " User not found 😩",
        response: null
      })
    }

  } catch (error) {
    next(error);
  }
}