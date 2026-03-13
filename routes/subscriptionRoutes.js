import { Router } from "express";
import { createSubscription } from "../controllers/subscriptionController.js";
import { protect } from "../controllers/authController.js";
const router = Router();

router
  .post('/createSub', protect, createSubscription);

export default router;