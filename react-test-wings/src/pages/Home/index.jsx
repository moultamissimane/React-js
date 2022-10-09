import React, { useEffect } from "react";
import { Navbar , LoginForm } from "@/components/index";


const Home = ({form}) => {

  return (
    <div className="w-screen h-screen bg-gray-50">
      <div>
        <Navbar />
        <h1 className="text-black font-poppins text-2xl font-bold">Home</h1>
        {form === 'login' && <LoginForm />}
        {form === 'register' && <div>Register</div>}

      </div>
    </div>
  );
};

export default Home;
