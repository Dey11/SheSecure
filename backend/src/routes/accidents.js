import express from "express";

const accident = express.Router();

accident.post("/", (req, res) => {});

accident.get("/", (req, res) => {}); // done

accident.get("/:pincode", (req, res) => {}); // done

accident.put("/:id", (req, res) => {});

export default accident;

// yet to think of putting the accidents that
// dont have a registered police station for
// that pincode
