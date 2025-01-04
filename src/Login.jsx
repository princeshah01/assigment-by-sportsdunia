import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
    const { loginWithRedirect , isAuthenticated } = useAuth0();
    const navigate = useNavigate() ;

    useEffect(()=>{
        if(isAuthenticated){
            navigate("/dashboard");
        }
    },[isAuthenticated,navigate]);


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button onClick={()=>loginWithRedirect()} className="flex items-center gap-2 px-6 py-2 bg-white border border-gray-300 rounded-xl shadow hover:shadow-md transition">
        <FcGoogle size={24} />
        <span className="text-gray-600 font-medium">Login with Google</span>
      </button>
    </div>
  );
};

export default Login;
