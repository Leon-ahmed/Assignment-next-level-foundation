import { Outlet } from "react-router";
import Navber from "../components/Navber";

const Mainlayout = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-[#11110f] text-[#f5f0e8]">
            <Navber />
            <Outlet />
         
        </div>
    );
};

export default Mainlayout;