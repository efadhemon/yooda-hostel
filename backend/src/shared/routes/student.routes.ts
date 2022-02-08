import express from "express";
import studentController from "../../modules/student/student.controller";

const studentRouter = express.Router();

// user routes
studentRouter.post("/", studentController.create);
studentRouter.get("/", studentController.get);
studentRouter.get("/:id", studentController.getById);
studentRouter.put("/:id", studentController.updateById);
studentRouter.delete("/:id", studentController.deleteById);
studentRouter.post("/change-status", studentController.changeStatus);

export default studentRouter;
