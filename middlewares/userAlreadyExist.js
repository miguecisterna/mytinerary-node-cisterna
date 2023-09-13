import User from "../models/User.js";

export default async(req,res,next) => {
  try {
    let one = await User.findOne({ mail: req.body.mail })
    if (one){
      return res.status(400).json({
        succes: false,
        message: 'User already exists',
        response: one._id
      });
    } else {
      return next();
    }
  } catch (error) {
    return next(error);
  }
};