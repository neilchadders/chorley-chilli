import express from "express";
import { requestPasswordReset, resetPassword } from "../controllers/forgetPasswordController.js";

const router = express.Router();

router.post("/", requestPasswordReset); // Request password reset
router.post("/:token", resetPassword);  // Reset password using token

export default router;
