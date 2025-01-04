import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import loading from "./assets/loading.gif";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
  return <div className="w-full h-[100vh] flex items-center justify-center">
  <img src={loading} alt="loading" className="w-20" />
</div>
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }
  
  return <>{children}</>;

};

export default ProtectedRoute;
