import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboardSidebarProvider from "./DashboardSidebarContext";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
    return (
        <DashboardSidebarProvider>
            <div className="flex w-full h-svh">
                <DashboardSidebar />

                <main className="container flex flex-col h-full overflow-auto">
                    <DashboardHeader />

                    <Outlet />
                </main>
            </div>
        </DashboardSidebarProvider>
    );
};

export default DashboardLayout;
