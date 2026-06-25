import { Router } from "express";
import { login, signup } from "../controllers/authController.js";
import { protect } from "../controllers/authController.js";
import { restrictTo } from "../middlewares/roleMiddleware.js";
import { getAllUsers } from "../controllers/userController.js";

const router = Router();
router.post("/signup", signup).post("/login", login);
router.get("/", protect, restrictTo("admin"), getAllUsers);

export default router;
