import {useEffect, useState} from "react";
import {FaBellSlash, FaChevronLeft, FaChevronRight, FaSlackHash, FaSlash} from "react-icons/fa";
import {CgFormatSlash} from "react-icons/cg";
import "../Container/About/About.css"


const AboutText = ({id}) => {

    const text = [
        {
            id: 1,
            name: "About Me",
            text: "My full name is Papa Bouna Bamba BAR" +
                " ,I come from Senegal. I am a student" +
                " in computer science at the higher" +
                " polytechnic school of dakar. I'm 20 years old and I love code !" ,

        }, {
            id: 2,
            name: "Profession",
            text: "I am a computer technician and I do development" +
                ", my speciality is the backend. I design software" +
                ", mobile application and web application. I have " +
                "knowledge in database but also in operating system",
        }, {
            id: 3,
            name: "Spare-time",
            text: "I am a basketball and tennis player" +
                " I like science, history, psychologies, " +
                "math, social engineering and cyber security." +
                " Half of my time I read history books and manga.",
        }
    ]
    const [currentText, setCurrentText] = useState(text[0]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false)
        setCurrentText(text.filter((text) => text.id === id)[0])
        const timer = setTimeout (() => {
            setIsVisible(true)
        }, 150);
        return () => {
            clearTimeout(timer)
        }
    }, [id]);

    return (
        <div className="h-44 w-96">
            {isVisible ?  <div className="who">
                <div className="head flex items-center">
                    <FaChevronLeft size={30} />
                    <span className="text-3xl text-style">
                    {currentText.name}
                </span>
                </div>
                <p className="text max-w-md mt-2">
                    {currentText.text}
                </p>
                <div className="foot flex items-center justify-end">
                    <CgFormatSlash size={60} className="" />
                    <FaChevronRight size={30}/>
                </div>
            </div> : ""}
        </div>
    )
}

export default AboutText;