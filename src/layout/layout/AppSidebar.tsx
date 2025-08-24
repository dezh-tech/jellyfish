import { X } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    useSidebar,
} from "../../components/ui/Sidebar";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { JellyFishIcon } from "@/assets/icons/nav/JellyFishIcon";
import AuthenticationAction from "./AuthenticationActions";

const AppSidebar = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <Sidebar side="left" variant="sidebar">
            <SidebarContent className="p-3">
                <SidebarHeader>
                    <div className="flex  gap-2 items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <Link to="/">
                                <JellyFishIcon />
                            </Link>

                            <div className="inline gradient-text font-bankGothic font-bold text-2xl">
                                JellyFish
                            </div>
                        </div>

                        <button
                            className="flex flex-col space-y-1.5 text-gray-500 hover:text-gray-800 transition-all duration-150"
                            onClick={toggleSidebar}
                            aria-label="Close navigation menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </SidebarHeader>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <nav aria-label="Main navigation">
                                <MenuItems isMobile={true} />
                            </nav>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-3">
                <div className="flex-grow">
                    <AuthenticationAction />
                </div>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
