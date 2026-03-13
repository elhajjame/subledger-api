import { Subscription } from "../models/Subscription.js";

const createSubscription = async (req, res) => {
  try {
    const NewSubscription = await Subscription.create({
      name: req.body.name,
      price: req.body.price,
      billingCycle: req.body.billingCycle,
      createdAt: req.body.createdAt,
      userId: req.body.userId
    });
    res.status(202).json({
      status: 'success',
      message: 'the subscription has been created successfully',
      data: {
        NewSubscription
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    })
  }
}

export { createSubscription };