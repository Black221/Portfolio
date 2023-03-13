import './App.css';
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Container from "../Component/Container/Container";
import NavBar from "../Component/Header/NavBar";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import SocialNetwork from "../Component/Shared/SocialNetwork";

function App() {

    const [page, setPage] = useState("Home")

    const onLoadPage = (link) => {
        setPage(link)
    }
    useEffect(() => {
        console.log(page)
    }, [page]);

    return (
        <div className="App">
            <NavBar onLoadPage={onLoadPage} />
            <SocialNetwork />
            <Container location={page} />
            {/*<Footer />*/}
        </div>
    );
}

export default App;
