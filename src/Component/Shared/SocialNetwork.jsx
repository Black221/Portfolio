import React from "react";
import "./SocialNetwork.css"
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {SiFiverr} from "react-icons/si";

const SocialNetwork = () => {

    const socialLink = [
        {
            id: 1,
            name: "Github",
            value: <FaGithub size={50} />,
            link: "https://github.com/Black221"
        }, {
            id: 2,
            name: "Linkedin In",
            value: <FaLinkedinIn size={50} />,
            link: "https://www.linkedin.com/in/pbouna-bar-a30308249"
        }, {
            id: 3,
            name: "Fiverr",
            value: <SiFiverr size={50} />,
            link: "https://fr.business.fiverr.com/share/rQKzNP"
        }, {
            id: 4,
            name: "Instagram",
            value: <FaInstagram size={50} />,
            link: ""
        }
    ]

    return (
        <div className="main z-40">
            { socialLink.map( ({id, name, link, value}) => (
                <div  key={id} className="rsx">
                    <a href={link}>{name}</a>
                    {value}
                </div>
            ))}
        </div>
    )
};

export default SocialNetwork;