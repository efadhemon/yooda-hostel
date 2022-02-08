import { Paths } from "@shared/enums";
import { Navigate } from "react-router-dom";
import FoodCreatePage from "./routes/FoodCreatePage";
import FoodListPage from "./routes/FoodListPage";
import FoodUpdatePage from "./routes/FoodUpdatePage";

export const FoodRoutes = [
    { path: "", element: <Navigate to={Paths.FoodList} /> },
    { path: "list", element: <FoodListPage /> },
    { path: "create", element: <FoodCreatePage /> },
    { path: "update/:id", element: <FoodUpdatePage /> },
];
