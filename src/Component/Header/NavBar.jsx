import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
// import {AiOutlineMenu} from "react-icons/ai";

const NavBar = () => {

    const [nav, setNav] = useState(true)

    const links = [{
        id: 1,
        link: 'Home'
    }, {
        id: 2,
        link: 'About'
    }, {
        id: 3,
        link: 'Skills'
    }, {
        id: 4,
        link: 'Activity'
    }, {
        id: 5,
        link: 'Contact'
    }]

    return (
        <div className="flex justify-between items-center w-full h-20 text-black px-5 fixed">
            <div className="text-3xl">
                <h1>LHackSRT</h1>
            </div>
            <ul className="hidden md:flex">
                { links.map(({id, link}) => (
                    <li key={id}
                        className="px-4 cursor-pointer hover:scale-150 hover:text-black duration-200 text-gray-500">
                        {link}
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)}
                className="cursor-pointer z-10 text-gray-500 md:hidden">
                { nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>
        </div>
    )
}

export default NavBar;