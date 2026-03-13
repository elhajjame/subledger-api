import { Router } from "express";
import { createSubscription, getAllSubscriptions, getSubscription } from "../controllers/subscriptionController.js";
import { protect } from "../controllers/authController.js";
const router = Router();

router
  .post('/subscriptions/createSub', protect, createSubscription);

router
  .get('/subscriptions', protect, getAllSubscriptions)
  .get('/subscriptions/:id', protect, getSubscription)


export default router;