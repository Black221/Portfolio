import React, {useState} from "react";
import logo from "../../../assets/logo(3).png";
import './Home.css';

import {FaArrowRight} from "react-icons/fa";
import {IoSkull} from "react-icons/io5";
import {AiOutlineLine} from "react-icons/ai";


const Home = () => {

    return (
        <div name="Home" className="w-full h-screen">
            <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row px-4 items-center justify-center md:justify-between h-full">
                <div className=" flex flex-col justify-center h-full">
                    <div className="text-justify mb-2 md:text-3xl text-2xl">
                        <div className="shell flex">
                            <span className="text-green-800">(</span>
                            <span className="text-red-800">Bamba BAR </span>
                            <IoSkull className="mx-2 text-red-800" />
                            <span className="text-red-800">LHackSRT</span>
                            <span className="text-green-800"> ) - [ </span>
                            <span> ~/Home</span>
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
                    </div>
                    <div>
                        <p className="text text-xl max-w-md">
                            echo "I'm developer and programmer. I love code" >> who.txt
                            {/*molestiae mollitia nam odit officiis praesentium quod.*/}
                        </p>
                        <div className="container-button">
                            <button>Projects</button>
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img className="mx-auto md:mt-0 mt-20"
                         src={logo}
                         width={400}
                         alt="mu logo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;