import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Pluspet from "./pages/Pluspet";
import Managepet from "./pages/Managepet";
import Activity from "./pages/Activity";
import Funeral from "./pages/Funeral";

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
        <Route path="/mypage/pluspet" element={<Pluspet />} />
        <Route path="/mypage/managepet" element={<Managepet />} />
        <Route path="/mypage/bookroom" element={<Activity />} />
        <Route path="/funeral" element={<Funeral />} />

        <Route path="/mybook" element={<MyBook />}></Route>
        <Route path="/mybook/addpet" element={<MyBookAddPet />}></Route>
        <Route path="/mybook/make" element={<MyBookMake />}></Route>
        <Route path="/mybook/detail" element={<MyBookDetail />}></Route>
        <Route path="/mybook/write" element={<MyBookWrite />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
