import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import React from "react";
import { Spin } from "antd";
import { queryClient } from "@shared/config/react-query/react-query";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <React.Suspense
            fallback={
                <div className="h-screen w-screen flex items-center justify-center">
                    <Spin />
                </div>
            }
        >
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>{children}</BrowserRouter>
            </QueryClientProvider>
        </React.Suspense>
    );
};
