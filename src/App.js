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
import About from "./components/about/About";
import Payments from "./components/payment/Payments";
import NavMobile from "./components/nav/NavMobile";
import Order from "./components/order/Order";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Error from "./components/dashboardPages/Error";
import AccountPage from "./components/dashboardPages/AccountPage";

import One from "./components/allLandingPage/One";

import Two from "./components/allLandingPage/Two";

import Three from "./components/allLandingPage/Three";

import Four from "./components/allLandingPage/Four";

import Five from "./components/allLandingPage/Five";

import Six from "./components/allLandingPage/Six";

import Seven from "./components/allLandingPage/Seven";

import Eight from "./components/allLandingPage/Eight";

import Nine from "./components/allLandingPage/Nine";

import Ten from "./components/allLandingPage/Ten";

import Eleven from "./components/allLandingPage/Eleven";

import Twelve from "./components/allLandingPage/Twelve";

import Thirteen from "./components/allLandingPage/Thirteen";

import Fourteen from "./components/allLandingPage/Fourteen";

import Fifteen from "./components/allLandingPage/Fifteen";

import Sixteen from "./components/allLandingPage/Sixteen";

import Seventeen from "./components/allLandingPage/Seventeen";

import Eighteen from "./components/allLandingPage/Eighteen";

import Nineteen from "./components/allLandingPage/Nineteen";

import Twenty from "./components/allLandingPage/Twenty";

import TwentyOne from "./components/allLandingPage/TwentyOne";

import TwentyTwo from "./components/allLandingPage/TwentyTwo";

import TwentyThree from "./components/allLandingPage/TwentyThree";
import TwentyFour from "./components/allLandingPage/TwentyFour";

const promise = loadStripe(
  "pk_test_51MOEHvSAmgVrd7Auw275yln50qYzQZjPBxQsRFJU5ys7GgGl1lav1Wx7Am1UDhyri4ZRjg7RwtVxtM4b5ZMk3nkk00MczFsiwI"
);

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
                {/* <Alert /> */}
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
              </>
            }
          ></Route>

          <Route
            path="/error"
            element={
              <>
                <Error />
              </>
            }
          ></Route>

          <Route
            path="/accountPage"
            element={
              <>
                <AccountPage />
              </>
            }
          ></Route>

          <Route
            path="/sell"
            element={
              <>
                <Header />
                <Sell />
              </>
            }
          ></Route>

          <Route
            path="/dashboard"
            element={
              <>
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
            path="/payments"
            element={
              <>
                <Elements stripe={promise}>
                  <Payments />
                </Elements>
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

          <Route
            path="/one"
            element={
              <>
                <Header />
                <One />
              </>
            }
          ></Route>

          <Route
            path="/two"
            element={
              <>
                <Header />
                <Two />
              </>
            }
          ></Route>

          <Route
            path="/three"
            element={
              <>
                <Header />
                <Three />
              </>
            }
          ></Route>

          <Route
            path="/four"
            element={
              <>
                <Header />
                <Four />
              </>
            }
          ></Route>

          <Route
            path="/five"
            element={
              <>
                <Header />
                <Five />
              </>
            }
          ></Route>

          <Route
            path="/six"
            element={
              <>
                <Header />
                <Six />
              </>
            }
          ></Route>

          <Route
            path="/seven"
            element={
              <>
                <Header />
                <Seven />
              </>
            }
          ></Route>

          <Route
            path="/eight"
            element={
              <>
                <Header />
                <Eight />
              </>
            }
          ></Route>

          <Route
            path="/nine"
            element={
              <>
                <Header />
                <Nine />
              </>
            }
          ></Route>

          <Route
            path="/ten"
            element={
              <>
                <Header />
                <Ten />
              </>
            }
          ></Route>

          <Route
            path="/oone"
            element={
              <>
                <Header />
                <Eleven />
              </>
            }
          ></Route>

          <Route
            path="/otwo"
            element={
              <>
                <Header />
                <Twelve />
              </>
            }
          ></Route>

          <Route
            path="/othree"
            element={
              <>
                <Header />
                <Thirteen />
              </>
            }
          ></Route>

          <Route
            path="/ofour"
            element={
              <>
                <Header />
                <Fourteen />
              </>
            }
          ></Route>

          <Route
            path="/ofive"
            element={
              <>
                <Header />
                <Fifteen />
              </>
            }
          ></Route>

          <Route
            path="/osix"
            element={
              <>
                <Header />
                <Sixteen />
              </>
            }
          ></Route>

          <Route
            path="/oseven"
            element={
              <>
                <Header />
                <Seventeen />
              </>
            }
          ></Route>

          <Route
            path="/oeight"
            element={
              <>
                <Header />
                <Eighteen />
              </>
            }
          ></Route>

          <Route
            path="/onine"
            element={
              <>
                <Header />
                <Nineteen />
              </>
            }
          ></Route>

          <Route
            path="/oten"
            element={
              <>
                <Header />
                <Twenty />
              </>
            }
          ></Route>

          <Route
            path="/tone"
            element={
              <>
                <Header />
                <TwentyOne />
              </>
            }
          ></Route>

          <Route
            path="/ttwo"
            element={
              <>
                <Header />
                <TwentyTwo />
              </>
            }
          ></Route>

          <Route
            path="/tthree"
            element={
              <>
                <Header />
                <TwentyThree />
              </>
            }
          ></Route>

          <Route
            path="/tfour"
            element={
              <>
                <Header />
                <TwentyFour />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
