import { Navigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks";

const Logout = () => {
    const { setAuth } = useAuth();

    const handleLogout = () => {
        setAuth({});
        <Navigate to="/login" />
    }

    return (
        <button className="icon-btn" onClick={handleLogout}>
            <img src={LogoutIcon} alt="Logout" />
        </button>
    )
}

export default Logout;