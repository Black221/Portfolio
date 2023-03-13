
import React, {useEffect, useState} from "react";
import {IoSkull} from "react-icons/io5";
import {AiOutlineLine} from "react-icons/ai";
import "./Shell.css"

const Shell = ({link, command, showContent, onCompleteCommand}) => {

    const commands = [
        {
            page: "Home",
            text: "npm start"
        },
        {
            page: "About",
            text: "tree about-list"
        },
        {
            page: "Skills",
            text: "show profile --skills"
        },
        {
            page: "Activity",
            text: "start projects.slide"
        },
        {
            page: "Contact",
            text: "import form from @emailjs/browser"
        },
        {
            page: "EmailJs",
            text: "loading..."
        }
    ]

    const [className, setClassName] = useState("main-shell text-justify mb-2 md:text-2xl text-xl");
    const [changeCommand, setChangeCommand] = useState(command);
    const [newLink, setNewLink] = useState(link);
    const [newCommand, setNewCommand] = useState("")

    const onPrint = () => {
        if (changeCommand)
            if (newCommand !== changeCommand && newCommand.length < changeCommand.length) {
                const timer = setTimeout( () => {
                    setNewCommand((c) => (c+changeCommand[c.length]))
                }, 80)
                return () => clearTimeout(timer)
            }
        return () => null;
    }

    useEffect(() => {
        if (newCommand !== changeCommand && newCommand.length < changeCommand.length)
            onPrint()
        else {
            const timer = setTimeout(() => {
                setClassName("main-shell text-justify mb-2 md:text-2xl text-xl");
                setNewLink(link)
                showContent()
                if (command !== "loading...") {
                    setChangeCommand(commands.filter((command) => (command.page === link))[0].text)
                    if (newCommand === command)
                        setNewCommand("")
                    if (newCommand !== changeCommand)
                        setNewCommand("")
                    if (newCommand === changeCommand && newCommand !== command)
                        onCompleteCommand(true)
                }

            }, 500)
            return () => {
                clearTimeout(timer)
            }
        }

    }, [newCommand, changeCommand])

    useEffect(() => {
        onCompleteCommand(false)
        if (link !== "EmailJs")
            setClassName("main-shell translate-shell text-justify mb-2 md:text-2xl text-xl");

        setChangeCommand(command)
        const printTimer = setTimeout(() => {
            setNewCommand("")
        }, 500);
        return () => {
            clearTimeout(printTimer)
        }
    }, [link]);

    return (
        <div className={className}>
            <div className="shell flex">
                <span className="text-green-800">(</span>
                <span className="text-red-800">Bamba BAR </span>
                <IoSkull className="mx-2 text-red-800" />
                <span className="text-red-800">LHackSRT</span>
                <span className="text-green-800"> ) - [ </span>
                <span> ~/{newLink}</span>
                <span className="text-green-800">]</span>
            </div>
            <div></div>
            <div className="text-green-800 left-bar justify-center flex flex-col">
                <AiOutlineLine size={45} />
                <div className="v-bar">|</div>
                <div className="prompt shell flex text-4xl">
                    <AiOutlineLine size={45} />
                    <span className="text-red-800">#</span>
                </div>
            </div>
            <div className="text-shell relative top-4 left-4 text-xl max-w-xl">
                {newCommand}
            </div>
        </div>
    )
}


export default Shell;