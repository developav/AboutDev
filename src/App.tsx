import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header/Header";
import HeadPage from "./Pages/HeadPage/HeadPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import SkillsPage from "./Pages/SkillsPage/SlillsPage";
import CareerPage from "./Pages/CareerPage/CareerPage";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <HashRouter>
      <Header />
 <AnimatePresence mode="wait">
<Routes>
        <Route path="/" element={<HeadPage />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/skills" element={<SkillsPage/>} />
        <Route path="/career" element={<CareerPage/>} />
        <Route path="/contacts" element={<ContactPage/>} />
      </Routes>
 </AnimatePresence>
      
    </HashRouter>
  );
}

export default App;