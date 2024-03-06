import express, { Router }  from "express";
import { addTask, forgetPassword, getMyProfile, login, logout, register, removeTask, resetPassword, updatePassword, updateProfile, updateTask, verify } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = express.Router();
router.get("/me" ,isAuthenticated,getMyProfile);
router.post("/register" , register)
router.post("/verify" , isAuthenticated,verify)
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/newtask").post(isAuthenticated, addTask);

router
  .route("/task/:taskId")
  .get(isAuthenticated, updateTask)
  .delete(isAuthenticated, removeTask);
router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);

router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword").put(resetPassword);
export default router;