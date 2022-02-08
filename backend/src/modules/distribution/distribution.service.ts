import IDistribution from "./distribution.interface";
import Distribution from "./distribution.model";

const distributionService = {
    create: async (data: IDistribution) => {
        return Distribution.create(data);
    },
    get: async (query: any = {}) => {
        return Distribution.find({ ...query });
    },
    getById: async (id: string) => {
        return Distribution.findById(id);
    },
    updateById: async (id: string, data: any) => {
        return Distribution.findByIdAndUpdate(id, data, { new: true });
    },
    deleteById: async (id: string) => {
        return Distribution.findByIdAndDelete(id);
    },
};

export default distributionService;
