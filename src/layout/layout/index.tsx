import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AppSidebar from "./AppSidebar";
import Cookies from "js-cookie";
import { SidebarProvider } from "@/components/ui/Sidebar";
import NoticeMessage from "./NoticeMessage";

const RootLayout = () => {
    const { pathname } = useLocation();

    const defaultOpen = Cookies.get("sidebar_state") === "true";

    return (
        <SidebarProvider defaultOpen={defaultOpen} className="relative">
            {/* -- If App Open On the mobile -- */}
            <AppSidebar />

            <main className="relative w-full">
                <div className="absolute top-0 -translate-x-1/2 -z-50 left-1/2 animate-fade">
                    <img src="/svg/top-light.svg" alt="top-light" />
                </div>
                {pathname !== "/" && (
                    <div className=" -z-50 absolute -top-[200px] left-1/2 -translate-x-1/2 ">
                        <img
                            className="animate-fade-up"
                            src="/svg/half-ring.svg"
                            alt="/half-ring"
                            height={894}
                            width={806}
                        />
                    </div>
                )}
                <div
                    className="fixed inset-0 z-20 w-full h-screen"
                    style={{
                        backgroundImage:
                            "linear-gradient(269.54deg, #05060F 0.39%, rgba(5, 6, 15, 0) 35.21%, rgba(5, 6, 15, 0) 64.87%, #05060F 99.6%)",
                    }}
                ></div>
                <div className="relative z-50">
                    {/* -- If App Open Ont the Large screen */}
                    <Navbar />

                    <NoticeMessage />

                    <main className="container">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </main>
        </SidebarProvider>
    );
};

export default RootLayout;
