import { BrowserRouter, Route, Routes } from "react-router-dom";
import RankingPage from "./pages/rankingPage/RankingPage";
import SignupPage from "./pages/signupPage/SignupPage";
import SigninPage from "./pages/signinPage/SigninPage";
import UserPage from "./pages/userPage/UserPage";
import UserName from "./context/UserContext";
import { useState } from "react";
import NewPage from "./pages/NewPage/NewPage";


function App() {
  const [name, setName] = useState()
  return (
    <UserName.Provider value={{name, setName}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RankingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/me" element={<UserPage />} />
          <Route path="/open/:link" element={<NewPage/>}/>
        </Routes>
      </BrowserRouter>
    </UserName.Provider>
  );
}

export default App;
