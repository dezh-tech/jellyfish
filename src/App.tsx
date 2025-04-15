import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ReactQueryProvider from "./providers/ReactQueryProviders";
import AuthProvider from "./providers/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <ReactQueryProvider>
                <RouterProvider router={router} />
            </ReactQueryProvider>
        </AuthProvider>
    );
}

export default App;
