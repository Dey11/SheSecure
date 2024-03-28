import express from "express";
import {
  getAllAccidents,
  getAccidentByPin,
  addAccident,
  updateAccident,
} from "../controllers/accidents.js";

export const accident = express.Router();

accident.post("/", (req, res) => {
  addAccident(req, res);
});

accident.get("/", (req, res) => {
  getAllAccidents(req, res);
});

accident.get("/:pincode", (req, res) => {
  getAccidentByPin(req, res);
});

accident.put("/:id", (req, res) => {
  updateAccident(req, res);
});

// yet to think of putting the accidents that
// dont have a registered police station for
// that pincode
