import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="flex gap-10 items-center ml-20 text-black relative z-50">
                <NavLink to="/home-page" className="font-bold text-2xl">
                    Trallo
                </NavLink>
                <div className="flex gap-10 items-center ml-10 text-gray-500">
                    <NavLink to="/trips" className="underline underline-offset-6">
                        Trips
                    </NavLink>

                    <NavLink to="/calculator" className="underline underline-offset-6">
                        Budget
                    </NavLink>

                    <NavLink to="/dashboard" className="underline underline-offset-6">
                        Dashboard
                    </NavLink>

                    <NavLink className="underline underline-offset-6">
                        Tips
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}