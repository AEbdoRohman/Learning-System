import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const RequireAuth = () => {
  const cookies = new Cookies();
  const token = cookies.get("authToken");
  return token ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default RequireAuth;
