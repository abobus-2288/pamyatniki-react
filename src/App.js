import React from "react";

import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import About from "./components/About/About";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </>
    );
}

export default App;
