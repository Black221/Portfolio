import React, {useEffect, useState} from "react";
import logo from "../../../assets/logo(3).png";
import './Home.css';



const Home = ({isVisible}) => {

    const [className, setClassName] = useState("text m-4")

    useEffect(() => {
        setClassName("who text m-4")
    }, [isVisible]);

    return (
        <div name="Home" id="Home" className="w-full h-screen">
            {isVisible ?<div className="who max-w-screen-lg mx-auto flex flex-col md:flex-row px-4 items-center h-full">
                <div className=" flex flex-col justify-center md:w-2/3   h-full  ml-4">
                    <div >
                        <h1 className="text-2xl">Hi, welcome to my linux shell portfolio !</h1>
                        <div className={className}>
                            I'm developer and I love linux.
                        </div>
                        <div className="text-button text-end">
                            <button className="p-2 text-white rounded">Download CV</button>
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <img className="mx-auto md:mt-0 mt-20"
                         src={logo}
                         width={400}
                         alt="mu logo"
                    />
                </div>
            </div> : ""}
        </div>
    )
}

export default Home;