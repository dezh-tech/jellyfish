import { Link } from "react-router-dom";
import { JellyFishIcon } from "@/assets/icons/nav/JellyFishIcon";
import { useSidebar } from "../../components/ui/Sidebar";
import MenuItems from "./MenuItems";
import AuthenticationAction from "./AuthenticationActions";
import { AlignJustify } from "lucide-react";
import { useEffect } from "react";
import { useActiveUser } from "nostr-hooks";

const Navbar = () => {
    const { toggleSidebar } = useSidebar();

    const { activeUser } = useActiveUser();

    useEffect(() => {
        console.log("Active User", activeUser);
    }, [activeUser]);

    return (
        <nav className="">
            <div className="p-6 md:p-8 lg:px-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-shrink-0 gap-2 w-fit">
                        <Link to="/">
                            <JellyFishIcon />
                        </Link>

                        <div className="hidden text-2xl font-bold lg:inline gradient-text font-bankGothic">
                            JellyFish
                        </div>
                    </div>

                    <div className="items-center justify-center flex-grow hidden md:flex md:space-x-8">
                        <MenuItems />
                    </div>

                    <div className="flex-shrink-0 hidden md:block w-fit">
                        <AuthenticationAction />
                    </div>

                    <button
                        className="text-white md:hidden"
                        onClick={toggleSidebar}
                    >
                        <AlignJustify />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
