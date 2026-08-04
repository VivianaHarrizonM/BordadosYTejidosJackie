import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Amigurumi from "./components/gallery/Amigurumi.jsx";
import Accesorios from "./components/gallery/Accesorios.jsx";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery-amigurumi" element={<Amigurumi />} />
        <Route path="/gallery-accesorios" element={<Accesorios />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
