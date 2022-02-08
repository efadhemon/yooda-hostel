import { Request, Response } from "express";
import studentService from "./student.service";
import { responseData } from "../../shared/utils/responseData";
const studentController = {
    create: async (req: Request, res: Response) => {
        try {
            const data = await studentService.create(req.body);
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
            const data = await studentService.get(query);
            return responseData({ req, res, data });
        } catch (error) {
            return responseData({ req, res, error });
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const data = await studentService.getById(id);
            return responseData({ req, res, data });
        } catch (error) {
            return responseData({ req, res, error });
        }
    },
    updateById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const data = await studentService.updateById(id, req.body);
            return responseData({ req, res, data });
        } catch (error) {
            return responseData({ req, res, error });
        }
    },
    deleteById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const data = await studentService.deleteById(id);
            return responseData({ req, res, data });
        } catch (error) {
            return responseData({ req, res, error });
        }
    },
    changeStatus: async (req: Request, res: Response) => {},
};

export default studentController;
