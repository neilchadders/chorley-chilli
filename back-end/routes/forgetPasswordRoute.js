import express from "express";
import { forgetPassword,
 resetPassword } from "../controllers/forgetPasswordController.js";

const router = express.Router();

router.post("/forgetPassword", forgetPassword);
router.post("/reset-password/:token", resetPassword);

export default router;