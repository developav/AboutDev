import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HeadPage from "./Pages/HeadPage/HeadPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import SkillsPage from "./Pages/SkillsPage/SlillsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HeadPage />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/skills" element={<SkillsPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;