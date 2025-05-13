import { createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "@/components/common/ProtectedRoute";
import { HomePage, NotFoundPage } from "@/components/pages";
import AvailabilityPage from "@/components/pages/Availability";
import Dashboard from "@/components/pages/Dashboard";
import NpubEditForm from "@/components/pages/Dashboard/Edit";
import Maintanance from "@/components/pages/Maintanance";
import PaymentResult from "@/components/pages/PaymentResult";
import SellRelay from "@/components/pages/SellRelay";
import SetUserName from "@/components/pages/SetUserName";
import DashboardLayout from "@/layout/dashboard-layout";
import RootLayout from "@/layout/layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/nip05",
                element: <AvailabilityPage />,
            },
            {
                path: "/set-username",
                element: <SetUserName />,
            },
            {
                path: "/payment-result",
                element: <PaymentResult />,
            },
            {
                path: "relay",
                element: <SellRelay />,
            },
            {
                path: "maintanance",
                element: <Maintanance />,
            },
        ],
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "",
                        element: <Dashboard />,
                    },
                    {
                        path: "edit/:id",
                        element: <NpubEditForm />,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
