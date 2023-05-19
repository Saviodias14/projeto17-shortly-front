import { BrowserRouter, Route, Routes } from "react-router-dom";
import RankingPage from "./pages/rankingPage/RankingPage";
import SignupPage from "./pages/signupPage/SignupPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RankingPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
