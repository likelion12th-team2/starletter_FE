import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";

import MyBook from "./pages/MyBook";
import MyBookAddPet from "./pages/MyBookAddPet";
import MyBookMake from "./pages/MyBookMake";
import MyBookDetail from "./pages/MyBookDetail";
import MyBookWrite from "./pages/MyBookWrite";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        <Route path="/MyBook" element={<MyBook />}></Route>
        <Route path="/MyBookAddPet" element={<MyBookAddPet />}></Route>
        <Route path="/MyBookMake" element={<MyBookMake />}></Route>
        <Route path="/MyBookDetail" element={<MyBookDetail />}></Route>
        <Route path="/MyBookWrite" element={<MyBookWrite />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
