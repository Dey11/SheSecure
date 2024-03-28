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
    pincode: {
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
      required: false,
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

export default Accident;
