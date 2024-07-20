import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Pluspet from "./pages/Pluspet";
import Managepet from "./pages/Managepet";
import Activity from "./pages/Activity";

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
        <Route path="/MyBook" element={<MyBook />} />
        <Route path="/MyBookAddPet" element={<MyBookAddPet />} />
        <Route path="/MyBookMake" element={<MyBookMake />} />
        <Route path="/MyBookDetail" element={<MyBookDetail />} />
        <Route path="/MyBookWrite" element={<MyBookWrite />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
