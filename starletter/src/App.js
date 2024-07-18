import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import MyBook from "./pages/MyBook";
import MyBookAddPet from "./pages/MyBookAddPet";
import MyBookMake from "./pages/MyBookMake";
import MyBookDetail from "./pages/MyBookDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Test" element={<Test />}></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/MyBook" element={<MyBook />}></Route>
        <Route path="/MyBookAddPet" element={<MyBookAddPet />}></Route>
        <Route path="/MyBookMake" element={<MyBookMake />}></Route>
        <Route path="/MyBookDetail" element={<MyBookDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
