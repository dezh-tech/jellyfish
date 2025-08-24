import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ReactQueryProvider from "./providers/ReactQueryProviders";
import AuthProvider from "./providers/AuthProvider";
import { NostrLoginProvider } from "./providers/NostrLoginProvider";

function App() {
    return (
        <NostrLoginProvider>
            <AuthProvider>
                <ReactQueryProvider>
                    <RouterProvider router={router} />
                </ReactQueryProvider>
            </AuthProvider>
        </NostrLoginProvider>
    );
}

export default App;
