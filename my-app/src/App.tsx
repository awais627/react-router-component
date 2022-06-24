import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./components/about";
import Profile from "./components/routes";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Confirmed from "./components/confirm";
import PageNotFound from "./components/pageNotFound";
import Products from "./components/products";
import Featured from "./components/features";
import NewProducts from "./components/newProducts";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="*" element={<PageNotFound/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/confirmed" element={<Confirmed/>}/>
                <Route path="/products" element={<Products/>}>
                    <Route path="featured" element={<Featured/>}/>
                    <Route path="new" element={<NewProducts/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
