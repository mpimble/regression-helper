import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Wrapper = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default Wrapper