//this middleware helps us to protect our routes.
//only the authorised person can access to the protected routes.
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
import { HttpError } from "../models/errorModel.js";
export const authMiddleware = async (req, res, next) => {
  const Authorization = req.headers.Authorization || req.headers.authorization;

  if (Authorization && Authorization.startsWith("Bearer ")) {
    const token = Authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
      if (err) {
        return next(new HttpError(401, "UnAuthorized"));
      }

      req.user = info;

      next();
    });
  } else {
    return next(new HttpError(402, "UnAuthorized Token"));
  }
};
