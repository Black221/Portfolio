import React, {useEffect, useState} from "react";
import Shell from "../../Shared/Shell";
import SlideShow from "../../Shared/SlideShow";
import AboutText from "../../Shared/AboutText";
import {FaChevronRight} from "react-icons/fa";
import {motion} from "framer-motion"
import "./About.css";
import AnimeComponent from "../../Shared/AnimeComponent";
import {BsArrowReturnRight} from "react-icons/bs";
import {TbChevronDownLeft} from "react-icons/tb";

export  default function About ({isVisible}) {

    const [currentTextItemId, setCurrentTextItemId] = useState(1);

    const textItem = [
        {
            id: 1,
            name: "About me"
        }, {
            id: 2,
            name: "Profession"
        }, {
            id: 3,
            name: "Space-time"
        }
    ];



    return (
        <div name="About" id="About" className="w-full h-screen">
            {isVisible ? <div className="who max-w-screen-lg mx-auto flex flex-col justify-center md:flex-row items-center h-full">
                <div className="mt-8 relative  flex flex-col place-content-between h-full py-36" >
                    <div className="tree choose  ml-4 ">
                        <ul className="ml-6">
                            { textItem.map( ({id, name}) => (
                                <li key={id}
                                    onClick={ () => {
                                        if (id !== currentTextItemId)
                                            setCurrentTextItemId(id);
                                    }}
                                    className="group  ul-list flex items-center cursor-pointer hover:translate-x-2 ease-linear duration-100 ">
                                    <TbChevronDownLeft className="group-hover:text-blue-400 ease-linear duration-100" size={35} />
                                    <span className="text-red-900 group-hover:tracking-widest ease-linear duration-150">{name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <AboutText id={currentTextItemId}/>
                </div>
                <SlideShow id={currentTextItemId}/>
            </div> : ""}
        </div>
    )
}