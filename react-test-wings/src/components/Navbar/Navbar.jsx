import { useNavigate } from "react-router-dom";

export const Navbar = (props) => {
	const navigate = useNavigate();
  return (
    <div className="bg-white flex justify-between m-2 shadow-sm">
      <div className="font-bold font-poppins">Logo</div>
      <div className="flex gap-2 mr-3 items-stretch font-poppins">
        <h2 className="text-[#fe4b62] self-center font-bold text-sm">Home</h2>
        <button onClick={()=>{navigate('/register')}} className="bg-[#fe4b62] text-white rounded-lg px-3 py-1 text-sm">Login</button>
      </div>
    </div>
  );
};
