import { Request, Response } from "express";
import { responseData } from "../../shared/utils/responseData";
import Distribution from "./distribution.model";
import distributionService from "./distribution.service";

const distributionController = {
    create: async (req: Request, res: Response) => {
        try {
            // checking if the date already in database
            const isDateExist = await Distribution.findOne({
                date: req.body.date,
            });

            if (isDateExist)
                return res.send({
                    success: false,
                    message: "Already served",
                    payload: null,
                });

            const data = await distributionService.create(req.body);
            return responseData({ req, res, data });
        } catch (error) {
            return responseData({ req, res, error });
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const query: any = { ...req.query };
            delete query.page;
            delete query.take;
            const data = await distributionService.get(query);
            return responseData({ req, res, data });
        } catch (error) {
            return responseData({ req, res, error });
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const data = await distributionService.getById(id);
            return responseData({ req, res, data });
        } catch (error) {
            return responseData({ req, res, error });
        }
    },
    updateById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const data = await distributionService.updateById(id, req.body);
            return responseData({ req, res, data });
        } catch (error) {
            return responseData({ req, res, error });
        }
    },
    deleteById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const data = await distributionService.deleteById(id);
            return responseData({ req, res, data });
        } catch (error) {
            return responseData({ req, res, error });
        }
    },
};

export default distributionController;
