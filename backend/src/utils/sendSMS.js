import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
// getting errors reading .env file. will fix later
export const sendSMS = async (phone, message) => {
  try {
    const client = new twilio(process.env.ACC_SID, process.env.AUTH_TOKEN);

    const response = await client.messages.create({
      body: message,
      from: process.env.NUMBER,
      to: phone,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
