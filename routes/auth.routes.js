import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post('/sing-up', signUp)
authRouter.post('/sing-in',signIn)
authRouter.post('/sing-out',signOut)

export default authRouter;