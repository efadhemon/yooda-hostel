import { AppProvider } from "@shared/context";
import AppRoutes from "@shared/routes";

function App() {
    return (
        <AppProvider>
            <AppRoutes />
        </AppProvider>
    );
}

export default App;
