import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Pluspet from "./pages/Pluspet";
import Managepet from "./pages/Managepet";
import Mybook from "./pages/MyBook";

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
        <Route path="/mypage/bookroom" element={<Mybook />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
