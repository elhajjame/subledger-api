import { Router } from "express";
import { login, signup } from "../controllers/authController.js";

const router = Router();
// router
//   .route('/signup').post(signup)
//   .route('/login').post(login)
router
  .post('/signup', signup)
  .post('/login', login);


export default router
