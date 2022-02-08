import express from "express";
import foodController from "../../modules/food/food.controller";

const foodRouter = express.Router();

// user routes
foodRouter.post("/", foodController.create);
foodRouter.get("/", foodController.get);
foodRouter.get("/:id", foodController.getById);
foodRouter.put("/:id", foodController.updateById);
foodRouter.delete("/:id", foodController.deleteById);

export default foodRouter;
