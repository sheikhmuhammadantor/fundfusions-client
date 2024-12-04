import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoutes({ children }) {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info loading-lg"></span></div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={{from: location?.pathname}} to="/login"></Navigate>
    )
}

export default PrivateRoutes
