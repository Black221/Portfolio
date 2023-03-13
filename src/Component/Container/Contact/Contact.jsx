import React, {useEffect, useRef, useState} from "react";
import emailJs from '@emailjs/browser';
import Shell from "../../Shared/Shell";


export default function Contact ({isVisible}) {

    const form = useRef();
    const [isSend, setIsSend] = useState(false);
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [result, setResult] = useState("");
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSend(true);
        setCount(0);
        setText("");
        emailJs.sendForm('service_r6hou73', 'template_u1d5cjw', form.current, 'BCidLL6hrWDmpzwyN')
            .then((r) => {
                setResult(r.text)

            }, (error) => {
                setResult(error.text)
                timeoutRef.current = setTimeout(() => {
                    setIsSend(false)
                }, 3000)
            });
    };

    const onPrint = () =>  {
        resetTimeout()
        if (result) {
            setText("#########################");
            setCount(100);
        } else if (count <= 100 - 4) {
            timeoutRef.current = setTimeout(() => {
                setCount((c) => (c + 4))
                setText ((t) => (t+"#"))
            }, 100);
        }
        return () => {
            resetTimeout()
        };
    }


    useEffect(() => {
            onPrint()
    }, [count]);


    const showContent = () => {

    };

    const onCompleteCommand = () => {

    }

    return (
        <div id="Contacts"  className="w-full h-screen" onClick={() => {
            setIsSend(false)
        }}>
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center md:flex-row items-center h-full" >
                {isSend ? <div className="absolute w-4/6 h-60 bg-white border-4 shadow-black shadow-2xl rounded-3xl flex">
                    <Shell link="EmailJs"
                           showContent={showContent}
                           onCompleteCommand={onCompleteCommand}
                           command={"sending mail"}/>
                    <div className="absolute bottom-10 left-40 text-2xl">
                        {count}%
                    </div>
                    <div className="absolute bottom-10 left-56 text-2xl">
                       [
                    </div>
                    <div className="absolute bottom-10 left-56 ml-6 text-xl">
                        {text}
                    </div>
                    <div className="absolute bottom-10 right-56 text-2xl">
                        ] <span className="absolute ml-4">{result}</span>
                    </div>

                </div> : ""}
                {isVisible ? <div className="who text w-full">
                    <form ref={form} onSubmit={sendEmail} className="w-full mt-20">
                        <div className="flex justify-center items-center">
                            <div className="mx-4">
                                <div className="mb-6">
                                    <label className="block">Name</label>
                                    <input type="text" name="user_name"
                                           className="border-2 border-red-900 focus:border-0 rounded w-80 p-1"/>
                                </div>
                                <div className="mb-6">
                                    <label className="block">Email</label>
                                    <input type="email" name="user_email"
                                           className="border-2 border-red-900 focus:border-0 rounded w-80 p-1"/>
                                </div>
                                <div className=" mt-2">
                                    <input type="submit" value="Send"
                                           className="border-2 p-1 px-6 rounded bg-red-900 text-white cursor-pointer"/>
                                </div>
                            </div>
                            <div>
                                <label className="block">Message</label>
                                <textarea name="message" className="h-40 w-80 border-2 rounded border-red-900 p-2"/>
                            </div>
                        </div>

                    </form>
                </div> : ""}
            </div>
        </div>
    )
}


