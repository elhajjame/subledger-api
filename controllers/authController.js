
import jwt from 'jsonwebtoken';
import { User } from "../models/User.js";

const signup = async (req, res) => {
  try {
    // const newUser = await User.create(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRED_IN
    })

    res.status(202).json({
      status: 'success',
      message: 'the user has been created successfully',
      token,
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