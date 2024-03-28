import mongoose from "mongoose";

// the data we will get from the mobile app.

const accidentSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    lat: {
      type: String,
      required: true,
    },
    lng: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    severity: {
      type: String,
      required: true,
      enum: ["high", "medium", "low"],
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "unassigned",
      enum: ["unassigned", "assigned"],
    },
    assignedTo: {
      type: String,
      default: null, // stores name_pin of admin if assigned
    },
  },
  { timestamps: true }
);

const Accident = mongoose.model("Accident", accidentSchema);

module.exports = Accident;
