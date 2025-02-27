import { Button } from "@/components/ui/Button";
import SidebarItem from "./SidebarItem";
import { ChevronLeft, ChevronRight, HomeIcon } from "lucide-react";
import { JellyFishIcon } from "@/assets/icons/nav/JellyFishIcon";
import { Link } from "react-router-dom";
import { useDashboardSidebar } from "./DashboardSidebarContext";
import AuthenticationAction from "./../layout/AuthenticationActions";

const DashboardSidebar = () => {
    const { isCollapsed, toggleCollapse } = useDashboardSidebar();

    return (
        <>
            <div
                className={`flex flex-col h-full bg-gray-800 text-white transition-width duration-300 max-md:absolute max-md:inset-y-0 max-md:left-0 max-md:z-[99] ${isCollapsed ? "w-0 max-md:hidden md:w-16" : "md:w-64"}`}
            >
                {/* Sidebar Header */}
                <div className="relative flex items-center justify-between w-full p-4 border-b border-gray-700 ">
                    <div className="flex items-center flex-shrink-0 gap-2 w-fit">
                        <Link to="/" title="Jelly Fish">
                            <JellyFishIcon
                                className={isCollapsed ? "w-8 h-8" : ""}
                            />
                        </Link>

                        <div
                            className={`text-2xl font-bold gradient-text font-bankGothic ${isCollapsed ? "hidden" : ""}`}
                        >
                            JellyFish
                        </div>
                    </div>

                    <Button
                        className="absolute w-8 h-8 rounded-full cursor-pointer -right-4 -bottom-4 shrink-0 z-100"
                        onClick={toggleCollapse}
                    >
                        {isCollapsed ? (
                            <ChevronRight className="w-4 h-4" />
                        ) : (
                            <ChevronLeft className="w-4 h-4" />
                        )}
                    </Button>
                </div>

                {/* Sidebar Items */}
                <div className="flex-1 p-4">
                    <Link to={"/dashboard"}>
                        <SidebarItem
                            icon={<HomeIcon className="w-5 h-5 " />}
                            label="Home"
                            isCollapsed={isCollapsed}
                        />
                    </Link>
                </div>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-gray-700 md:hidden">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <AuthenticationAction
                            isLogin
                            isCollapsed={isCollapsed}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;
