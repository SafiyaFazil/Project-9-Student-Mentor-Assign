import express from "express";
import {
  MultiStudForOneMen,
  assignStudentToMentor,
  createMentor,
  getMentorList,
  getStudentsForMentor,
  previousMentor,
} from "../Controllers/Mentor.controller.js";

const router = express.Router();

router.post("/creatementor", createMentor); //to create a mentor
router.get("/getmentor", getMentorList); // to get all mentor
router.post("/assign", assignStudentToMentor); // to assign one student to one mentor
router.post("/assignmultiple", MultiStudForOneMen); // to assign many students to one mentor
router.post("/studentlist", getStudentsForMentor); // to get student list for one mentor
router.post("/previousmentor", previousMentor); // to get student list for one mentor


export default router;