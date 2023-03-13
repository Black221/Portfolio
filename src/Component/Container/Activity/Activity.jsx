import React, {useEffect, useState} from "react";
import Shell from "../../Shared/Shell";
import "./Activity.css"
import {FaArrowCircleLeft, FaArrowCircleRight, FaArrowLeft} from "react-icons/fa";


export default function Activity ({isVisible}) {

    const [projects, setProjects] = useState([
        {
            id : 1,
            name: "a",
            picture: require("../../../assets/p1.png"),
            className : "project center"
        },
        {
            id : 2,
            name: "b",
            picture: require("../../../assets/p2.jpg"),
            className : "project c middle"
        },
        {
            id : 3,
            name: "c",
            picture: require("../../../assets/p3.jpg"),
            className : "project d end"
        },
        {
            id : 4,
            name: "d",
            picture: require("../../../assets/p4.jpg"),
            className : "project a end"
        },
        {
            id : 5,
            name: "e",
            picture: require("../../../assets/p5.jpg"),
            className : "project b middle"
        }
    ]);
    const [remove, setRemove] = useState({state : false, value:0})

    const slideLeft = () => {
        let newProjects = projects;
        let tmp = projects[0].className;
        for (let i = 0; i < projects.length - 1; i ++) {
            newProjects[i].className = projects[i+1].className;
        }
        newProjects[4].className = tmp;
        setProjects(newProjects)
        setRemove({state: false, value: 0})
    }

    const slideRight = () => {
        let newProjects = projects;
        let tmp = projects[4].className;
        for (let i = projects.length - 1; i > 0; i --) {
            newProjects[i].className = projects[i-1].className;
        }
        newProjects[0].className = tmp;
        setProjects(newProjects)
        setRemove({state: false, value: 0})
    }

    useEffect(() => {
        if (remove.state)
            if (remove.value)
                slideLeft()
            else
                slideRight()
    }, [remove]);


    return (
        <div id="Activities"  className="w-full h-screen">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center md:flex-row items-center h-full" >
                {isVisible ?<div className="who w-full mt-8">
                    <div className="Activity-slide  mt-12 relative  ml-12 flex justify-center">
                        { projects.map(({id, name, picture, className}) => (
                            <div key={id} className={className}>
                                <img src={picture} className="" alt={name}/>
                            </div>
                        )) }
                        <FaArrowCircleLeft className="absolute left-2 bottom-28 cursor-pointer" size={50} onClick={() => {
                            setRemove({state: true, value: 1})
                        }} />
                        <FaArrowCircleRight className="absolute right-2 bottom-28 cursor-pointer" size={50} onClick={() => setRemove({state: true, value: 0})}/>
                    </div>
                </div> : ""}
            </div>
        </div>
    )
}