import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "react-slide-routes";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/404";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({duration: 450});
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Routes timing="ease" duration={290}>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
