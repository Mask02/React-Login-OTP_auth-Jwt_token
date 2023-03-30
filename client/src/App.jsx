import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*-------------------- Components Import--------------------*/

import Home from "./components/Home";
import Profile from "./components/Profile";
import Password from "./components/Password";
import Recovery from "./components/Recovery";
import UserName from "./components/UserName";
import PageNotFound from "./components/PageNotFound";
import Reset from "./components/Reset";

/*-------------------- CSS Import--------------------*/
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserName />} />
          <Route path="/password" element={<Password />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
