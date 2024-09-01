import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Raj Bhoyar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
