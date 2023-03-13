import React, {useState} from "react";
import {FaBars, FaCloudMoon, FaMoon, FaRegMoon, FaSun, FaTimes} from "react-icons/fa";
// import {AiOutlineMenu} from "react-icons/ai";

const NavBar = ({onLoadPage}) => {

    const [nav, setNav] = useState(true);
    const [lightMode, setLightMode] = useState(true);


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
        <div className="flex justify-between items-center w-full h-20  px-5 fixed z-40">
            <div className="text-3xl">
                <h1 className="title">LHackSRT</h1>
            </div>
            <div className="flex align-center">
                <ul className="hidden md:flex">
                    { links.map(({id, link}) => (
                        <li key={id}
                            onClick={ (event) => {
                                onLoadPage(link)
                            }}
                            className="px-4 cursor-pointer hover:scale-150 hover:text-black duration-200 link">
                            <a href={"#"+link}>{link}</a>
                        </li>
                    ))}
                </ul>
                <div onClick={() => setNav(!nav)}
                     className="cursor-pointer z-10 text-gray-500 md:hidden">
                    { nav ? <FaBars size={30} /> : <FaTimes size={30} />}
                </div>
                <button onClick={() => setLightMode(!lightMode)}>
                    { lightMode ? <FaMoon size={35} color="#1E212D"/> : <FaSun size={35} color="#FFEC41" />}
                </button>
            </div>
        </div>
    )
}

export default NavBar;