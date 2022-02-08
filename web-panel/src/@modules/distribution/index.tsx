import { Paths } from "@shared/enums";
import { Navigate } from "react-router-dom";
import DistributionListPage from "./routes/DistributionListPage";

export const DistributionRoutes = [
    { path: "", element: <Navigate to={Paths.StudentList} /> },
    { path: "list", element: <DistributionListPage /> },
];
