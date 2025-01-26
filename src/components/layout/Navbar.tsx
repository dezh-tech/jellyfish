// src/components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { JellyFishIcon } from "@/assets/icons/nav/JellyFishIcon";
import { HandIcon } from "@/assets/icons/nav/HandIcon";
import { LightingIcon } from "@/assets/icons/nav/LightingIcon";
import { NostrIconPink } from "@/assets/icons/nav/NostrIconPink";
import { NostrIconWhite } from "@/assets/icons/NostrIconWhite";
// import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext

const Links = () => {
    return (
        <>
            <Link to="/availability" className="flex gap-2 items-center">
                <div>
                    <HandIcon />
                </div>
                <div className="gradient-text font-roboto-mono font-medium text-lg">
                    NIP-05 Service
                </div>
            </Link>
            <Link
                to="lightning:dezh@coinos.io"
                className="flex gap-2 items-center"
            >
                <div>
                    <LightingIcon />
                </div>
                <div className="text-[#EAB308] font-roboto-mono font-medium text-lg">
                    Zap Us
                </div>
            </Link>
            <Link
                to="nostr:npub1hu47u55pzjw8cdg0t5f2uvh4znrcvnl3pqz3st6p0pfcctzzzqrsplc46u"
                className="flex gap-2 items-center"
            >
                <div>
                    <NostrIconPink />
                </div>
                <div className="bg-gradient-to-r from-[#F869B6] to-[#D34CD9] bg-clip-text text-transparent font-roboto-mono font-medium text-lg">
                    Nostr
                </div>
            </Link>
        </>
    );
};

const Navbar = () => {
    //   const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="">
            <div className="p-8 md:px-12">
                <div className="flex justify-between">
                    <Link to="/" className="flex md:w-2/12 gap-2 items-center">
                        <div>
                            <JellyFishIcon />
                        </div>
                        <div className="hidden md:inline gradient-text font-bankGothic font-bold text-2xl">
                            JellyFish
                        </div>
                        <div className="md:hidden">
                            <Button variant={"link"} onClick={toggleMenu}>
                                <button className="flex flex-col space-y-1.5">
                                    <span className="w-6 h-0.5 bg-white"></span>
                                    <span className="w-6 h-0.5 bg-white"></span>
                                    <span className="w-6 h-0.5 bg-white"></span>
                                </button>
                            </Button>
                        </div>
                    </Link>

                    <div className="hidden md:w-8/12 md:flex justify-center md:space-x-8 md:ml-10">
                        <Links />
                    </div>
                    <div className="md:w-2/12 flex justify-end">
                        <Button variant={"outline"} className="h-12">
                            <NostrIconWhite /> Log In
                        </Button>
                        {/* {user ? (
                            <Button
                                onClick={logout}
                                className="text-gray-800 dark:text-white"
                            >
                                Logout
                            </Button>
                        ) : (
                            <Link
                                to="/login"
                                className="text-gray-800 dark:text-white"
                            >
                                Login
                            </Link>
                        )} */}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="flex flex-col gap-2 justify-center items-center">
                    <Links />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
