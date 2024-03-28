import Accident from "../models/accident.js";

export const getAllAccidents = async (req, res) => {
  try {
    const allAccidents = await Accident.find();
    if (!allAccidents) {
      return res.status(200).json({ message: "No accidents in the db" });
    }
    return res.status(200).json(allAccidents);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

export const getAccidentByPin = async (req, res) => {
  const pincode = req.params["pincode"] || "";
  try {
    if (!pincode) {
      return res.status(400).json({ message: "Pincode not provided" });
    }
    const getAccidents = await Accident.find({ pincode });
    if (!getAccidents) {
      return res.status(200).json({ message: "No accidents for the pincode" });
    }
    return res.status(200).json(getAccidents);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

export const addAccident = async (req, res) => {
  try {
    const {
      date,
      time,
      state,
      city,
      pincode,
      lat,
      lng,
      description,
      severity,
    } = req.body;

    const newAccident = {
      date,
      time,
      state,
      city,
      pincode,
      lat,
      lng,
      description,
      severity,
    };

    await Accident.create(newAccident);
    return res.status(200).json({ message: "Accident has been registered" });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

export const updateAccident = async (req, res) => {
  try {
    const { status, assignedTo, id } = req.body;

    const accidentFromDB = await Accident.findOneAndUpdate(
      { _id: id },
      { status, assignedTo }
    );

    return res.status(200).json({ message: "Status has been updated." });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};
