import express from "express";
import foodRouter from "./food.routes";
import studentRouter from "./student.routes";

const indexRouter = express.Router();

indexRouter.use("/students", studentRouter);
indexRouter.use("/foods", foodRouter);

export default indexRouter;
