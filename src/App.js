import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
function App() {
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
                <Header />
                <Home />
              </>
            }
          ></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
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
