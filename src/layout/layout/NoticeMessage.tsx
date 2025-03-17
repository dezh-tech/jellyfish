import { Alert, AlertDescription } from "@/components/ui/Alert";
import { alertData } from "@/data/alert";
import { Link, useLocation } from "react-router-dom";

const NoticeMessage = () => {
    const location = useLocation();

    if (location.pathname.startsWith(alertData?.link)) {
        return null;
    }

    if (!alertData?.show) {
        return null;
    }

    return (
        <Alert variant="error" className="px-3 py-6 shrink-0">
            <AlertDescription>
                {alertData?.title ?? ""} {alertData?.description ?? ""}.{" "}
                <Link to={alertData?.link ?? "/"} className="text-[blue]">
                    {alertData?.linkText ?? ""}
                </Link>
            </AlertDescription>
        </Alert>
    );
};

export default NoticeMessage;
