import IFood from "./food.interface";
import Food from "./food.model";

const foodService = {
    create: async (data: IFood) => {
        return Food.create(data);
    },
    get: async (query: any = {}) => {
        if (query.name) {
            const regex = new RegExp(escapeRegex(query.name), "gi");
            query.name = regex;
            return Food.find({ ...query });
        }
        return Food.find({ ...query });
    },
    getById: async (id: string) => {
        return Food.findById(id);
    },
    updateById: async (id: string, data: any) => {
        return Food.findByIdAndUpdate(id, data, { new: true });
    },
    deleteById: async (id: string) => {
        return Food.findByIdAndDelete(id);
    },
};

export default foodService;

function escapeRegex(text: any) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
