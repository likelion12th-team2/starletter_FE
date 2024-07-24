import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Pluspet from "./pages/Pluspet";
import Managepet from "./pages/Managepet";
import Activity from "./pages/Activity";
import Funeral from "./pages/Funeral";
import Market from "./pages/Market";

import MyBook from "./pages/MyBook";
import MyBookAddPet from "./pages/MyBookAddPet";
import MyBookMake from "./pages/MyBookMake";
import MyBookDetail from "./pages/MyBookDetail";
import MyBookWrite from "./pages/MyBookWrite";

import Library from "./pages/Library";
import LibraryDetail from "./pages/LibraryDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage/pluspet" element={<Pluspet />} />
        <Route path="/mypage/managepet" element={<Managepet />} />
        <Route path="/mypage/bookroom" element={<Activity />} />
        <Route path="/funeral" element={<Funeral />} />
        <Route path="/market" element={<Market />} />

        <Route path="/mybook" element={<MyBook />} />
        <Route path="/mybook/addpet" element={<MyBookAddPet />} />
        <Route path="/mybook/make" element={<MyBookMake />} />
        <Route path="/mybook/detail" element={<MyBookDetail />} />
        <Route path="/mybook/write" element={<MyBookWrite />} />

        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<LibraryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
