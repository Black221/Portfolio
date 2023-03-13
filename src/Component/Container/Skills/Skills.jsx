import React from "react";
import "./Skills.css"
import {TbChevronDownLeft} from "react-icons/tb";


export default function Skills({isVisible}) {

    const utilsList = [
        {
            id: 1,
            name: "a",
            picture: require("../../../assets/intellij.png")
        },
        {
            id: 2,
            name: "b",
            picture: require("../../../assets/react.png")
        },
        {
            id: 3,
            name: "c",
            picture: require("../../../assets/angular.png")
        },
        {
            id: 4,
            name: "d",
            picture: require("../../../assets/java.png")
        },
        {
            id: 5,
            name: "e",
            picture: require("../../../assets/laravel.png")
        },
        {
            id: 6,
            name: "f",
            picture: require("../../../assets/c.png")
        },
    ]


    return (
        <div id="Skills"  className="w-full h-screen  relative z-0 overflow-hidden">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center md:flex-row items-center h-full" >
                {isVisible ? <div className="who mt-20 flex w-full justify-between items-center">
                    <div className="text text-xl left-skill-list h-60  w-80 flex items-center ml-4">
                        <ul>
                            <li className="list-a mb-2 flex">
                                <TbChevronDownLeft className="relative bottom-1" size={32} />
                                Creativity
                            </li>
                            <li className="list-b mb-2 flex">
                                <TbChevronDownLeft className="relative bottom-1" size={32} />
                                self-taught
                            </li>
                            <li className="list-c mb-2 flex">
                                <TbChevronDownLeft className="relative bottom-1" size={32} />
                                adapt quickly
                            </li>
                            <li className="list-d mb-2 flex">
                                <TbChevronDownLeft className="relative bottom-1" size={32} />
                                French and english speaker
                            </li>
                            <li className="list-e mb-2 flex">
                                <TbChevronDownLeft className="relative bottom-1" size={32} />
                                Artist and designer
                            </li>
                            <li className="list-f mb-2 flex">
                                <TbChevronDownLeft className="relative bottom-1" size={32} />
                                Web software and mobile developer
                            </li>
                            <li className="list-g mb-2 flex">
                                <TbChevronDownLeft className="relative bottom-1" size={32} />
                                Operating system and telecom
                            </li>
                        </ul>
                    </div>
                    <div className="right-skill-list h-80 w-96 flex items-end z-0  justify-end relative">
                           <div className="main-utils w-32 h-32 relative z-0">
                               {utilsList.map((utils) => (
                                   <div key={utils.id} className={"w-32 h-32 z-10 absolute flex items-center justify-center  utils-"+utils.name}>
                                       <img className="w-full h-auto" src={utils.picture} alt={utils.name}/>
                                   </div>
                               ))}
                           </div>
                    </div>
                </div> : ""}
            </div>
        </div>
    )
}