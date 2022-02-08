import { StudentRoutes } from "@modules/student";
import MainLayout from "@shared/components/layout/main-layout.component";
import NotFound from "@shared/components/NotFound";
import { Paths } from "@shared/enums";
import { Navigate, useRoutes, Outlet } from "react-router-dom";

const App = () => {
    let pathName = window.location.pathname;
    return (
        <MainLayout>
            {pathName === "/" ? <Navigate to={Paths.StudentList} /> : ""}
            <Outlet />
        </MainLayout>
    );
};

const Routes = () => {
    const routes = [
        {
            path: Paths.Student,
            children: StudentRoutes,
        },
    ];
    return useRoutes([
        {
            path: "",
            element: <App />,
            children: routes,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);
};

export default Routes;
