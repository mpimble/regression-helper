import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./auth";

const Protected = () => {
    const isAuth: boolean = isAuthenticated();

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;