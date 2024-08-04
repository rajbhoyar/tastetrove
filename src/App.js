import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
