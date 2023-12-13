import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="test">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
