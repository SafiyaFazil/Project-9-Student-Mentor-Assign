import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./Database/dbConfig.js";
import mentorRouter from "./Routers/Mentor.Router.js";
import studentRouter from "./Routers/Student.Router.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/mentors", mentorRouter);
app.use("/api/students", studentRouter);

//testing purpose
app.get("/", async (req, res) => {
  try {
    res.status(200).json({
      message: "Assign Student-Mentor Working Properly....",
    });
    console.log("Assign Student-Mentor Working Properly....");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log("Error in Server>>>>>>>");
  }
});

app.listen(port, () => {
  console.log(`App is listening port ${port}`);
});

ConnectDB();
