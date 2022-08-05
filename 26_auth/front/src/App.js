
import './App.css';

import FormLogin from "./components/auth/forms/FormLogin";
import FormRegister from "./components/auth/forms/FormRegister";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmailVerify from "./components/auth/EmailVerify";
//require('dotenv').config()


function App() {
  return (
    <div className="App"><BrowserRouter>

        <Routes>
            <Route path="/registration" element={<FormRegister />} />
            <Route path="/login" element={<FormLogin />} />
            <Route path="/auth/verifyEmail/:key" element={<EmailVerify />} />
        </Routes>

        <FormRegister></FormRegister>
        <hr/>
      <FormLogin></FormLogin>
    </BrowserRouter></div>
  );
}

export default App;
