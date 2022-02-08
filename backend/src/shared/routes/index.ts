import express from "express";
import studentRouter from "./student.routes";

const indexRouter = express.Router();

indexRouter.use("/students", studentRouter);

export default indexRouter;
