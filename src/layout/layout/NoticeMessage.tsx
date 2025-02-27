import { Alert, AlertDescription } from "@/components/ui/Alert";
import { Link, useLocation } from "react-router-dom";

const NoticeMessage = () => {
    const location = useLocation();

    if (location.pathname.startsWith("/maintanance")) {
        return null;
    }

    return (
        <Alert variant="error" className="px-3 py-6 shrink-0">
            <AlertDescription>
                Notice: Your session has expired. Please log in again.{" "}
                <Link to="/maintanance" className="text-[blue]">
                    Learn more.
                </Link>
            </AlertDescription>
        </Alert>
    );
};

export default NoticeMessage;
