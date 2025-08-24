import { LightingIcon } from "@/assets/icons/nav/LightingIcon";
import { Link } from "react-router-dom";

interface MenuItemsProps {
    isMobile?: boolean;
}

const MenuItems = ({ isMobile = false }: MenuItemsProps) => {
    const listClasses = isMobile
        ? "flex flex-col space-y-4 list-none"
        : "flex items-center justify-center gap-8 list-none";

    return (
        <ul className={listClasses}>
            <li>
                <Link to="/relay" className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                        <img src="/svg/relay.svg" alt="relay" />
                    </div>
                    <div className="text-lg font-medium gradient-text font-roboto-mono">
                        Relay
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/nip05" className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                        <img src="/svg/Shaka.svg" alt="nip05" />
                    </div>
                    <div className="text-lg font-medium gradient-text font-roboto-mono">
                        NIP-05
                    </div>
                </Link>
            </li>
            <li>
                <Link
                    to="lightning:dezh@coinos.io"
                    className="flex items-center gap-2"
                >
                    <div className="flex-shrink-0">
                        <LightingIcon />
                    </div>
                    <div className="text-[#EAB308] font-roboto-mono font-medium text-lg">
                        Zap Us
                    </div>
                </Link>
            </li>
            <li>
                <Link
                    to="nostr:npub1hu47u55pzjw8cdg0t5f2uvh4znrcvnl3pqz3st6p0pfcctzzzqrsplc46u"
                    className="flex items-center gap-2"
                >
                    <div className="flex-shrink-0">
                        <img src="/svg/nostr.svg" alt="nostr" />
                    </div>
                    <div className="bg-gradient-to-r from-[#F869B6] to-[#D34CD9] bg-clip-text text-transparent font-roboto-mono font-medium text-lg">
                        Nostr
                    </div>
                </Link>
            </li>
        </ul>
    );
};

export default MenuItems;
