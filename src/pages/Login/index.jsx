import React, { useEffect } from "react";
import { Navbar , LoginForm } from "@/components/index";


const Login = () => {

  return (
    <div className="w-screen h-screen bg-gray-50">
        <Navbar />
        <LoginForm />
    </div>
  );
};

export default Login;
