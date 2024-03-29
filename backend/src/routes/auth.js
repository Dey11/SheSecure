import { Router } from "express";
import {
  registerAdmin,
  loginAdmin,
  getAdmin,
  getAllAdmins,
  editAdminDetails,
} from "../controllers/auth.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const admin = Router();

admin.post("/register", registerAdmin);
admin.post("/login", loginAdmin);
admin.get("/:id", getAdmin);
admin.patch("/edit-admin", authMiddleware, editAdminDetails);
admin.get("/", getAllAdmins);

export { admin };
