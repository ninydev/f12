import NinyFooter from "./components/Footer/NinyFooter";
import NinyHeader from "./components/Header/NinyHeader";

import {Routes, Route, BrowserRouter, Link} from "react-router-dom";
import React from 'react'

import PageHome from "./pages/Home";
import PageAbout from "./pages/About";
import PageError from "./pages/Error";
import Main from "./components/Nav/Main";
import PagePhoneBook from "./pages/PhoneBook";


function App() {
  return (
      <BrowserRouter>
        <div className="App container">
            <NinyHeader></NinyHeader>
            <Main></Main>

            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/phone" element={<PagePhoneBook />} />
                <Route path="*" element={<PageError />}></Route>
            </Routes>

          <NinyFooter></NinyFooter>
        </div>
      </BrowserRouter>
  );
}

export default App;
