import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/checkout"
            element={
              <>
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
