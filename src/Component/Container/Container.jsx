import React, {useEffect, useState} from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Activity from "./Activity/Activity";
import Shell from "../Shared/Shell";


export default function Container ({location}) {

    const contentsVisible = [
        {
            id : 1,
            page : <Home isVisible={true} />,
            name : "Home"
        }, {
            id : 2,
            page : <About isVisible={true} />,
            name : "About"
        }, {
            id : 3,
            page : <Skills isVisible={true} />,
            name : "Skills"
        }, {
            id : 4,
            page : <Activity isVisible={true} />,
            name : "Activity"
        }, {
            id : 5,
            page : <Contact isVisible={true} />,
            name : "Contact"
        }
    ]

    const contents = [
        {
            id : 1,
            page : <Home isVisible={false} />,
            name : "Home"
        }, {
            id : 2,
            page : <About isVisible={false} />,
            name : "About"
        }, {
            id : 3,
            page : <Skills isVisible={false} />,
            name : "Skills"
        }, {
            id : 4,
            page : <Activity isVisible={false} />,
            name : "Activity"
        }, {
            id : 5,
            page : <Contact isVisible={false} />,
            name : "Contact"
        }
    ];
    const [page, setPage] = useState(contents[0].page);
    const [commandComplete, setCommandComplete] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const onCompleteCommand = (b) => {
        setCommandComplete(b);
    }

    const showContent = () => {
        setIsVisible(true)
        setPage(contents.filter((content) => (content.name === location))[0].page)
    }

    useEffect(() => {
        setIsVisible(false)
    }, [location]);

    useEffect(() => {
        setPage(contentsVisible.filter((content) => (content.name === location))[0].page)
    }, [commandComplete]);


    return (
        <div className="w-full h-full overflow-hidden">
            <Shell link={location}
                     showContent={showContent}
                   onCompleteCommand={onCompleteCommand}
                   command={"cd ~/"+location}
            />
            {isVisible ? page : ''}
        </div>
    );
}