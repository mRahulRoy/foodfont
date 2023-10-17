import React, { useState } from "react";
import Hungry from "./components/Hungry";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MyFood from "./MyFood";
import Home from "./Home";


const App = () => {
  return (
    <>
     
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/my-foods" element={<MyFood/>} />
          </Routes>
        </BrowserRouter>
      </>
      <ToastContainer />
    </>
  );
};

export default App;
