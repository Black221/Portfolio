import React, {useState, useRef, useEffect} from "react";
import './SlideShow.css'

const delay = 2500;

function SlideShow ({id}) {

    const slides = [
        {
            id: 1,
            images : [
                {
                    id: 1,
                    url: require("../../assets/me1.jpg"),
                },  {
                    id: 2,
                    url: require("../../assets/me2.jpg"),
                },  {
                    id: 3,
                    url: require("../../assets/me3.jpg"),
                }
            ]
        },{
            id: 2,
            images : [
                {
                    id: 1,
                    url: require("../../assets/linux.png"),
                },  {
                    id: 2,
                    url: require("../../assets/code.jpg"),
                },  {
                    id: 3,
                    url: require("../../assets/computer.jpg"),
                }, {
                    id: 4,
                    url: require("../../assets/logo(3).png"),
                }
            ]
        },{
            id: 3,
            images : [
                {
                    id: 1,
                    url: require("../../assets/basket.jpg"),
                },  {
                    id: 2,
                    url: require("../../assets/tennis.jpg"),

                },  {
                    id: 3,
                    url: require("../../assets/5652006.jpg"),
                }, {
                    id: 4,
                    url: require("../../assets/japan.jpg"),
                }, {
                    id: 5,
                    url: require("../../assets/books.jpg"),
                }
            ]
        },
    ]

    const [index, setIndex] = useState(1);
    const [images, setImages] = useState(slides[0].images);
    const [back, setBack] = useState(false);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        if (index === images[images.length - 1].id)
            setBack(true)
        if (index === images[0].id)
            setBack(false)

            resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    !back
                        ? prevIndex === images[images.length - 1].id ? prevIndex - 1 : prevIndex + 1
                        : prevIndex === images[0].id ? prevIndex + 1 : prevIndex - 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    useEffect(() => {
        setIndex(1);
        setImages(slides.filter((slide) => (slide.id === id))[0].images);
    }, [id])

    return (
        <div className="slideshow relative left-10 top-8 z-10">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-(index - 1)* 100}%, 0, 0)` }}
            >
                {images.map((image) => (
                    <div
                        className="slide justify-center"
                        key={image.id}
                    >
                        <div className="flex h-full items-center">
                            <img className="w-full h-auto absolute" src={image.url} alt={image.id} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="slideshowDots">
                {images.map((_) => (
                    <div
                        key={_.id}
                        className={`slideshowDot${index === _.id ? " active" : ""}`}
                        onClick={() => {
                            setIndex(_.id);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default SlideShow;