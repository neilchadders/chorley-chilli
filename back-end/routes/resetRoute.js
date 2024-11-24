import express from "express";
import { forgetPassword,
 resetPassword } from "../controllers/forgetPassword.controller.js";

const router = express.Router();

router.post("/forgetPassword", forgetPassword);
router.post("/reset-password/:token", resetPassword);

export default router;