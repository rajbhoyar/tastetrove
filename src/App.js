import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Profile from "./Components/Profile";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Header />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
