import { register,login ,getUser} from './../controllers/authController.js';
import express from "express"

const router = express.Router();

router.post("/register",register);
router.post("/login",login)
router.get("/users",getUser)

export default router