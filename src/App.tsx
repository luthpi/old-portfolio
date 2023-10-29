import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "react-slide-routes"
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import NotFound from "./pages/404";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Routes timing="ease" duration={290}>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
