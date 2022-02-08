import IStudent from "./student.interface";
import Student from "./student.model";

const studentService = {
    create: async (data: IStudent) => {
        return Student.create(data);
    },
    get: async (query: any = {}) => {
        if (query.name) {
            const regex = new RegExp(escapeRegex(query.name), "gi");
            query.name = regex;
            return Student.find({ ...query });
        }
        return Student.find({ ...query });
    },
    getById: async (id: string) => {
        return Student.findById(id);
    },
    updateById: async (id: string, data: any) => {
        return Student.findByIdAndUpdate(id, data, { new: true });
    },
    updateMany: async (data: any) => {
        const results = [];
        for (let i = 0; i < data.length; i++) {
            const result = await Student.findByIdAndUpdate(
                data[i].id,
                { status: data[i].status },
                {
                    new: true,
                }
            );
            results.push(result);
        }
        return results;
    },
    deleteById: async (id: string) => {
        return Student.findByIdAndDelete(id);
    },
};

export default studentService;

function escapeRegex(text: any) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
