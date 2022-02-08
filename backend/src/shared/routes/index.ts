import express from "express";
import distributionRouter from "./distribution.routes";
import foodRouter from "./food.routes";
import studentRouter from "./student.routes";

const indexRouter = express.Router();

indexRouter.use("/students", studentRouter);
indexRouter.use("/foods", foodRouter);
indexRouter.use("/distribution", distributionRouter);

export default indexRouter;
