import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    // declared an state
    const [open, setOpen] = useState(false);
    // declare routes data here
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/contact", name: "Contact" }
    ];

    return (
        <nav>
            {/*for react icon */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {/*dynamic conditional toggling */}
                {
                    open === true ? <IoCloseSharp className="text-3xl" /> : <RiMenu2Line className="text-2xl " />
                }

            </div>
            <ul className={`md:flex duration-1000 p-4 m-3 absolute md:static  bg-gray-800 shadow-lg  ${open ? "top-7" : "-top-60"}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;