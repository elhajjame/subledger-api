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
};

const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ userId: req.user._id });

    res.status(200).json({
      status: 'success',
      results: subscriptions.length,
      data: {
        subscriptions
      }
    });

  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

const getSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!subscription) {
      return res.status(404).json({
        status: 'fail',
        message: 'Subscription not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        subscription
      }
    });

  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};
export { createSubscription, getAllSubscriptions, getSubscription };