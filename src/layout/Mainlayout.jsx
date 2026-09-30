import { Outlet } from "react-router";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const Mainlayout = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-[#11110f] text-[#f5f0e8]">
            <Navber />
            <Outlet />
            <Footer></Footer>
         
        </div>
    );
};

export default Mainlayout;