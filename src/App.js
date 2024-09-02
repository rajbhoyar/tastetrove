import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Cart from "./Components/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { useEffect, useState } from "react";

// Custom hook for user context initialization
const useUserName = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Simulate fetching user data
    const data = { name: "Raj Bhoyar" };
    setUserName(data.name);
  }, []);

  return userName;
};

function App() {
  const userName = useUserName();

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Router>
          <Header />
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/restaurants/:resId"
                  element={<RestaurantMenu />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
