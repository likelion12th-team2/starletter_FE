import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Pluspet from "./pages/Pluspet";
import Managepet from "./pages/Managepet";
import Activity from "./pages/Activity";
import Funeral from "./pages/Funeral";
import Market from "./pages/Market";
import EditProfile from "./pages/EditProfile";
import ManagePetAdd from "./pages/ManagepetAdd";

import MyBook from "./pages/MyBook";
import MyBookAddPet from "./pages/MyBookAddPet";
import MyBookMake from "./pages/MyBookMake";
import MyBookDetail from "./pages/MyBookDetail";
import MyBookWrite from "./pages/MyBookWrite";

import Library from "./pages/Library";
import LibraryDetail from "./pages/LibraryDetail";

function App() {
  return (
    <Router>
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
        <Route path="/mypage/edit" element={<EditProfile />} />
        <Route path="/mypage/managepet/pluspet" element={<ManagePetAdd />} />
        <Route path="/mybook" element={<MyBook />} />
        <Route path="/mybook/addpet" element={<MyBookAddPet />} />
        <Route path="/mybook/make" element={<MyBookMake />} />
        <Route path="/mybook/detail/:id" element={<MyBookDetail />} />
        <Route path="/mybook/write" element={<MyBookWrite />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<LibraryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
