import { JellyFishIcon } from "@/assets/icons/nav/JellyFishIcon";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import { useDashboardSidebar } from "./DashboardSidebarContext";
import AuthenticationAction from "./../layout/AuthenticationActions";

const DashboardHeader = () => {
    const { isCollapsed, toggleCollapse } = useDashboardSidebar();

    return (
        <div className="relative flex items-center justify-between w-full p-4 border-b border-gray-700 ">
            <div className="flex items-center gap-2 shrink-0 w-fit md:hidden">
                <Link to="/" title="Jelly Fish">
                    <JellyFishIcon className="shrink-0" />
                </Link>

                <div
                    className={`text-2xl font-bold gradient-text font-bankGothic ${isCollapsed ? "hidden" : "hidden md:inline"}`}
                >
                    JellyFish
                </div>
            </div>

            <button className="text-white md:hidden" onClick={toggleCollapse}>
                <AlignJustify className="w-5 h-5 shrink-0" />
            </button>

            <div className="ml-auto grow-0 max-md:hidden">
                <AuthenticationAction isLogin isCollapsed={false} />
            </div>
        </div>
    );
};

export default DashboardHeader;
