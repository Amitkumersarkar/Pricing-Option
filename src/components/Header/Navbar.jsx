import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
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
            <div className="md:hidden" onClick={() => setOpen(true)}>
                {/*dynamic condition */}
                {
                    open === true ? 'open' : 'closed'
                }

                <RiMenu2Line className="text-2xl " />
            </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;