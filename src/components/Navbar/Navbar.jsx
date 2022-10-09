import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { Conditional } from "../Conditional/Conditional";

export const Navbar = (props) => {
  const navigate = useNavigate();

  //get user from context
  const { User, onUserChange } = useContext(UserContext);

  return (
    <div className="bg-white flex justify-between items-center p-2 px-4 shadow">
      <div className="font-bold text-xl font-poppins">Logo</div>
      <div className="flex gap-2 font-poppins">
        <Link to="/" className="flex items-center">
          <button type="button" className="text-[#fe5454] font-bold text-xl">
            Home
          </button>
        </Link>
        <Conditional condition={!User}>
          <button
            type="button"
            onClick={() => {
              navigate("/login");
            }}
            className="bg-[#fe5454] text-white rounded-lg px-3 py-1 text-xl"
          >
            Login
          </button>
        </Conditional>
        <Conditional condition={User}>
          <button
            type="button"
            onClick={() => {
              onUserChange(null);
              navigate("/login");
            }}
            className="bg-[#fe5454] text-white rounded-lg px-3 py-1 text-xl"
          >
            Logout
          </button>
        </Conditional>
      </div>
    </div>
  );
};
