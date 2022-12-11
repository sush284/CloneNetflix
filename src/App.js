import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NetflixHomeScreen from "./screens/NetflixHomeScreen.jsx";
// import LoginPopupScreen from "./screens/LoginPopupScreen.jsx";
import MoviesHomeScreen from "./screens/MoviesHomeScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
import RegistrationScreen from "./screens/RegistrationScreen.jsx";
import PlansAndPricing from "./components/PlansAndPricing.jsx";

function App() {
  // const user = "Sushma";

  return (
    <div className="App">
      <Routes>
        {/* {!user ? ( */}
          <Route exact path="/" element={<NetflixHomeScreen />} />
        {/* ) : ( */}
          <>
            {/* <Route exact path="/login" element={<LoginPopupScreen />} /> */}
            <Route exact path="/signup" element={<SignupScreen />} />
            <Route exact path="/browse" element={<MoviesHomeScreen />} />
            <Route exact path="/register" element={<RegistrationScreen />} />
            <Route exact path="/plans-and-pricing" element={<PlansAndPricing/>}/>
          </>
        {/* )} */}
      </Routes>
    </div>
  );
}
export default App;
