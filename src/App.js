import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Sell from "./components/sell/Sell";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/stateprovider/StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import About from "./components/about/About";
import Payment from "./components/payment/Payment";
import NavMobile from "./components/nav/NavMobile";
import Order from "./components/order/Order";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <NavMobile />
                <Header />
                <Home />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/sell"
            element={
              <>
                <Header />
                <Sell />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/dashboard"
            element={
              <>
                <NavMobile />
                <Header />
                <Dashboard />
              </>
            }
          ></Route>

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>

          <Route
            path="/payment"
            element={
              <>
                <Payment />
              </>
            }
          ></Route>

          <Route
            path="/order"
            element={
              <>
                <Order />
              </>
            }
          ></Route>

          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
