import {useState, useEffect} from "react";

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

const AnimeComponent = ({component, className, visible}) => {

    const [state, setState] = useState(visible ? VISIBLE : HIDDEN);
    const newClassName = state === VISIBLE ? "" : className;

    useEffect(() => {
        if (!visible) {
            setState(LEAVING)
        } else {
            setState((s) => (
                s === HIDDEN ? ENTERING : VISIBLE
            ))
        }
        console.log(visible)
    }, [visible]);

    useEffect(() => {
        if (state === LEAVING) {
            const timer = setTimeout(() => {
                const c = document.body.offsetHeight;
                setState(HIDDEN)
            }, 300)
            return () => {
                clearTimeout(timer)
            };
        }

        if (state === ENTERING) {
            setState(VISIBLE)
        }
    }, [state]);


    return (
        <div className="">
            {component}
        </div>
    )
}


export default AnimeComponent;