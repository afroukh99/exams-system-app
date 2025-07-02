import App from "@/App";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const currentUser = null;
    return currentUser ? <App/> : <Navigate to={"/login"}/>;
}

export default ProtectedRoutes;