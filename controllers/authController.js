import { User } from "../models/User.js";

const signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body)

    res.status(202).json({
      status: 'success',
      message: 'the user has been created successfully',
      data: {
        user: newUser,
      }
    })
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

export { signup }