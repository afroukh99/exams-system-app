import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const currentUser = null;
    return currentUser ? <Outlet/> : <Navigate to={"/login"}/>;
}

export default ProtectedRoutes;