import { Paths } from "@shared/enums";
import { Navigate } from "react-router-dom";
import StudentCreatePage from "./routes/StudentCreatePage";
import StudentsPage from "./routes/StudentsPage";
import StudentUpdatePage from "./routes/StudentUpdatePage";

export const StudentRoutes = [
    { path: "", element: <Navigate to={Paths.StudentList} /> },
    { path: "list", element: <StudentsPage /> },
    { path: "create", element: <StudentCreatePage /> },
    { path: "update/:id", element: <StudentUpdatePage /> },
];
