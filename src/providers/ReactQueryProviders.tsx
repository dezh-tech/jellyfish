import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";

// Create a client
const queryClient = new QueryClient();

type Props = PropsWithChildren & {};

const ReactQueryProvider: React.FC<Props> = ({ children }) => {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;
